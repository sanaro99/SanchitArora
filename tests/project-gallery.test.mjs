import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { JSDOM } from "jsdom";
import { act, createElement } from "react";

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
for (const name of ["window", "document", "HTMLElement", "HTMLDialogElement", "HTMLMediaElement", "Event", "MouseEvent", "KeyboardEvent"]) {
  globalThis[name] = dom.window[name];
}
Object.defineProperty(globalThis, "navigator", { value: dom.window.navigator, configurable: true });
globalThis.self = dom.window;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom does not implement the browser's native dialog or media playback.
// Real focus trapping, Escape and playback are also checked in the browser.
HTMLDialogElement.prototype.showModal = function () { this.open = true; };
HTMLDialogElement.prototype.close = function () {
  this.open = false;
  this.dispatchEvent(new Event("close"));
};
HTMLMediaElement.prototype.pause = function () {};

const { createRoot } = await import("react-dom/client");
const { ProjectCard } = await import("../src/components/project-card.tsx");
const media = [
  { type: "image", src: "/tracker.png", alt: "Application tracker", caption: "Fictional demo data." },
  { type: "image", src: "/board.png", alt: "Kanban board", caption: "Application stages." },
  { type: "video", src: "/walkthrough.webm", alt: "Demo walkthrough", poster: "/tracker.png", caption: "Simulated AI responses." },
];
let root;
beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
  document.body.style.overflow = "auto";
  root = createRoot(document.getElementById("root"));
});
afterEach(() => act(() => root.unmount()));

function render(overrides = {}) {
  act(() => root.render(createElement(ProjectCard, {
    title: "Demo project", href: "https://example.com", description: "A demo.",
    dates: "2026", tags: [], image: "/tracker.png", imageAlt: "Application tracker",
    media, ...overrides,
  })));
}
function click(element) {
  assert.ok(element, "The gallery control exists");
  // Suppress jsdom's unsupported navigation while testing the old image link.
  if (element.tagName === "A") element.addEventListener("click", event => event.preventDefault(), { once: true });
  act(() => element.click());
}
function openGallery() {
  click([...document.querySelectorAll("a, button")].find(el => el.textContent.trim() === "View image"));
  const dialog = document.querySelector("dialog");
  assert.ok(dialog?.open, "View image opens the project gallery in place");
  return dialog;
}
function control(label) { return document.querySelector(`button[aria-label="${label}"]`); }
function count() { return document.querySelector('[role="status"]').textContent; }

test("View image opens an in-page gallery and the visible close button dismisses it", () => {
  render();
  const dialog = openGallery();
  assert.ok(dialog.querySelector('img[alt="Application tracker"]'));
  assert.match(dialog.textContent, /Fictional demo data/);
  assert.equal(document.body.style.overflow, "hidden");
  click(control("Close gallery"));
  assert.equal(dialog.open, false);
  assert.equal(document.body.style.overflow, "auto");
});

test("next and previous wrap through images and video, and thumbnails select a screen", () => {
  render();
  const dialog = openGallery();
  assert.equal(count(), "1 of 3");
  click(control("Previous media"));
  assert.equal(count(), "3 of 3");
  const video = dialog.querySelector("video");
  assert.equal(video.getAttribute("src"), "/walkthrough.webm");
  assert.equal(video.controls, true);
  assert.equal(video.autoplay, false);
  click(control("Next media"));
  assert.equal(count(), "1 of 3");
  assert.equal(dialog.querySelector("video"), null, "Inactive video is removed");
  click(control("Show image 2: Kanban board"));
  assert.equal(count(), "2 of 3");
  assert.ok(dialog.querySelector('img[alt="Kanban board"]'));
});

test("keyboard arrows navigate, and a cancel event closes and resets the gallery", () => {
  render();
  const dialog = openGallery();
  act(() => dialog.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })));
  assert.equal(count(), "2 of 3");
  act(() => dialog.dispatchEvent(new Event("cancel", { cancelable: true })));
  assert.equal(dialog.open, false);
  openGallery();
  assert.equal(count(), "1 of 3");
});

test("video arrow keys stay available for native playback controls", () => {
  render();
  const dialog = openGallery();
  click(control("Previous media"));
  act(() => dialog.querySelector("video").dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true })));
  assert.equal(count(), "3 of 3");
  click(control("Close gallery"));
  assert.equal(dialog.querySelector("video"), null, "Closing unloads the video");
});

test("horizontal swipe changes the slide while vertical scrolling and short drags do not", () => {
  render();
  const dialog = openGallery();
  const stage = dialog.querySelector('[aria-roledescription="slide"]');
  function swipe(start, end) {
    for (const [type, point] of [["pointerdown", start], ["pointerup", end]]) {
      const event = new MouseEvent(type, { clientX: point[0], clientY: point[1], bubbles: true });
      Object.defineProperties(event, { pointerType: { value: "touch" }, pointerId: { value: 1 }, isPrimary: { value: true } });
      act(() => stage.dispatchEvent(event));
    }
  }
  swipe([250, 100], [100, 105]);
  assert.equal(count(), "2 of 3");
  swipe([100, 100], [95, 250]);
  assert.equal(count(), "2 of 3");
  swipe([100, 100], [120, 100]);
  assert.equal(count(), "2 of 3");
});

test("a single legacy image still opens without unnecessary carousel controls", () => {
  render({ media: undefined });
  const dialog = openGallery();
  assert.ok(dialog.querySelector('img[alt="Application tracker"]'));
  assert.equal(control("Next media"), null);
  assert.equal(control("Previous media"), null);
  assert.equal(count(), "1 of 1");
});

test("a project without media offers no empty gallery", () => {
  render({ image: undefined, media: undefined });
  assert.equal(document.querySelector("dialog"), null);
  assert.equal(control("Demo project: View media gallery"), null);
});
