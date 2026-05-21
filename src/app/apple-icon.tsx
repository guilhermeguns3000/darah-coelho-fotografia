import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 400,
            color: "#c9a96e",
            letterSpacing: "0.05em",
            lineHeight: 1,
          }}
        >
          DC
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#666",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Fotografia
        </div>
      </div>
    ),
    { ...size }
  );
}
