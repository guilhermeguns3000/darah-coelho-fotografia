import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Darah Coelho Fotografia, Fotógrafa em Goiânia";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#c9a96e",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            fontSize: 14,
            color: "#444",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          darahcoelhofotografia.com.br
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#c9a96e",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Fotógrafa em Goiânia
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              fontSize: 80,
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Darah Coelho
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 80,
              fontWeight: 400,
              color: "#c9a96e",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Fotografia
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#888",
            maxWidth: 600,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Moda · Casamento · Gestante · Newborn · E-commerce
        </div>
      </div>
    ),
    { ...size }
  );
}
