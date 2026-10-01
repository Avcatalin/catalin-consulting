import { ImageResponse } from "next/og";
export const alt =
  "Catalin Avarvarei — HubSpot CMS, CRM and practical RevOps support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "#12202f",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, color: "#c2f2d9", marginBottom: 40 }}>
        CATALIN AVARVAREI
      </div>
      <div
        style={{
          fontSize: 72,
          lineHeight: 1.1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        A better website.
        <br />A clearer CRM.
      </div>
      <div style={{ fontSize: 36, color: "#c2f2d9", marginTop: 32 }}>
        HubSpot CMS · CRM · RevOps support
      </div>
    </div>,
    size,
  );
}
