import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";
export const alt = "Sanchit Arora — Software Engineer, AI systems and developer tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px", background: "#fafafa", color: "#171717", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 24, color: "#525252" }}>Software Engineer · Seattle</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: -3 }}>{DATA.name}</div>
        <div style={{ display: "flex", fontSize: 36 }}>AI systems &amp; developer tools</div>
        <div style={{ display: "flex", fontSize: 27, color: "#525252" }}>TestSprite · UBS · University of Washington</div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#525252" }}>sanchitarora.me</div>
    </div>, size
  );
}
