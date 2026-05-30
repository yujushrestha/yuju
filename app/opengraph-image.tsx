import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "yuju shrestha"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0f0c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* ambient orb */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #c8a96e22 0%, transparent 70%)",
          }}
        />

        {/* overline */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "18px",
            color: "#00c853",
            opacity: 0.6,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          developer / creative
        </div>

        {/* name */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: 300,
            color: "#e8e0d0",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          yuju
        </div>
        <div
          style={{
            fontSize: "120px",
            fontWeight: 300,
            color: "#c8a96e",
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "60px",
          }}
        >
          shrestha
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#7a8fa0",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          seeking something missing. missing something left behind.
        </div>

        {/* url */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "80px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#00c853",
            opacity: 0.4,
            letterSpacing: "0.1em",
          }}
        >
          yuju-psi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}