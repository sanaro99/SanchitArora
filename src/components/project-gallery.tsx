"use client";

import { Button } from "@/components/ui/button";
import type { ProjectMedia } from "@/lib/project-media";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export function ProjectGallery({ title, media }: { title: string; media: readonly ProjectMedia[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number; pointerId: number } | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    return () => { video?.pause(); };
  }, [isOpen, index]);

  useEffect(() => {
    if (isOpen) {
      thumbnailsRef.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')
        ?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    }
  }, [isOpen, index]);

  if (media.length === 0) return null;
  const item = media[index];

  function finishClose() {
    setIsOpen(false);
    gesture.current = null;
    triggerRef.current?.focus({ preventScroll: true });
  }
  function closeGallery() {
    videoRef.current?.pause();
    dialogRef.current?.close();
    finishClose();
  }
  function selectSlide(nextIndex: number) {
    gesture.current = null;
    videoRef.current?.pause();
    setIndex(nextIndex);
  }
  function move(direction: number) {
    selectSlide((index + direction + media.length) % media.length);
  }
  function onKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    // Keep seeking and volume keys available to the native video player.
    if ((event.target as HTMLElement).closest("video") || event.altKey || event.ctrlKey || event.metaKey) return;
    if (media.length > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  }
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || item.type === "video") return;
    gesture.current = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = gesture.current;
    gesture.current = null;
    if (!start || start.pointerId !== event.pointerId || media.length < 2) return;
    const horizontal = event.clientX - start.x;
    const vertical = event.clientY - start.y;
    if (Math.abs(horizontal) >= 50 && Math.abs(horizontal) > Math.abs(vertical) * 1.5) {
      move(horizontal < 0 ? 1 : -1);
    }
  }

  return (
    <>
      <Button ref={triggerRef} type="button" variant="outline"
        className="h-auto px-2 py-1 text-[10px]"
        aria-label={`${title}: View media gallery`} aria-haspopup="dialog"
        onClick={() => { setIndex(0); setIsOpen(true); }}>
        View image
      </Button>
      <dialog ref={dialogRef} aria-labelledby={titleId} onKeyDown={onKeyDown}
        onCancel={(event) => { event.preventDefault(); closeGallery(); }} onClose={finishClose}
        onClick={(event) => { if (event.target === event.currentTarget) closeGallery(); }}
        className="m-auto w-[calc(100vw-1rem)] max-w-6xl max-h-[calc(100dvh-1rem)] rounded-xl border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        {isOpen && (
          <div className="flex h-[calc(100dvh-2rem)] max-h-[900px] flex-col">
            <header className="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3">
              <h2 id={titleId} className="min-w-0 text-base font-semibold sm:text-lg">{title} gallery</h2>
              <Button type="button" variant="ghost" size="icon" aria-label="Close gallery" onClick={closeGallery}>
                <X className="size-5" aria-hidden="true" />
              </Button>
            </header>
            <div role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${media.length}`}
              onPointerDown={onPointerDown} onPointerUp={onPointerUp}
              onPointerCancel={() => { gesture.current = null; }}
              className="flex min-h-0 flex-1 items-center justify-center bg-muted/40 p-2 [touch-action:pan-y_pinch-zoom] sm:p-4">
              {item.type === "image" ? (
                <Image key={item.src} src={item.src} alt={item.alt} width={1600} height={1000}
                  unoptimized draggable={false} className="h-full w-full select-none object-contain" />
              ) : (
                <video key={item.src} ref={videoRef} src={item.src} poster={item.poster}
                  controls playsInline preload="metadata" aria-label={item.alt}
                  className="h-full max-h-full w-full object-contain" />
              )}
            </div>
            <footer className="shrink-0 space-y-2 border-t px-3 py-3 sm:px-4">
              <div className="flex items-center justify-center gap-4">
                {media.length > 1 && (
                  <Button type="button" variant="outline" size="icon" aria-label="Previous media" onClick={() => move(-1)}>
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </Button>
                )}
                <span role="status" aria-live="polite" aria-atomic="true" className="min-w-14 text-center text-sm tabular-nums">
                  {index + 1} of {media.length}
                </span>
                {media.length > 1 && (
                  <Button type="button" variant="outline" size="icon" aria-label="Next media" onClick={() => move(1)}>
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </Button>
                )}
              </div>
              <p className="max-h-16 overflow-y-auto text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.caption || item.alt}
              </p>
              {media.length > 1 && (
                <div ref={thumbnailsRef} className="flex gap-2 overflow-x-auto p-1" aria-label="Gallery thumbnails">
                  {media.map((entry, entryIndex) => (
                    <button key={`${entry.type}:${entry.src}`} type="button"
                      aria-label={`Show ${entry.type} ${entryIndex + 1}: ${entry.alt}`} aria-pressed={index === entryIndex}
                      onClick={() => selectSlide(entryIndex)}
                      className={cn("relative flex h-14 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        index === entryIndex && "border-foreground ring-1 ring-foreground")}>
                      {entry.type === "image" || entry.poster ? (
                        <Image src={entry.type === "image" ? entry.src : entry.poster!} alt="" width={160} height={112}
                          unoptimized draggable={false} className="h-full w-full object-cover object-top" />
                      ) : null}
                      {entry.type === "video" && <span className="absolute rounded-full bg-black/70 p-1.5 text-white"><Play className="size-4" aria-hidden="true" /></span>}
                    </button>
                  ))}
                </div>
              )}
            </footer>
          </div>
        )}
      </dialog>
    </>
  );
}
