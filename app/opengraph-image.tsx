import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Elemental Episodes — Supreme Basics";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><g fill="#D7DAE1"><rect x="24" y="31" width="10" height="74"/><rect x="24" y="31" width="48" height="10"/><rect x="24" y="63" width="42" height="10"/><rect x="24" y="95" width="48" height="10"/><rect x="48" y="15" width="10" height="74"/><rect x="48" y="15" width="48" height="10"/><rect x="48" y="47" width="42" height="10"/><rect x="48" y="79" width="48" height="10"/></g></svg>`;

export default function OpengraphImage() {
  const logo = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 0%, #1a1b22 0%, #0b0b0d 60%)",
          color: "#eef0f4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={128} height={128} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 60,
            letterSpacing: 16,
            textTransform: "uppercase",
          }}
        >
          Elemental Episodes
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 24,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#82868f",
          }}
        >
          Supreme Basics
        </div>
      </div>
    ),
    { ...size },
  );
}
