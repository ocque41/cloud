import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "sans-serif",
          background: "#171717",
          color: "#deddd9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <span style={{ textTransform: "uppercase", letterSpacing: "0.4em", fontSize: 18, color: "#454443" }}>
          Cumulus
        </span>
        <h1 style={{ fontSize: 82, lineHeight: 0.95, marginTop: 32 }}>
          Personalized product builds for teams that need a custom fit.
        </h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
