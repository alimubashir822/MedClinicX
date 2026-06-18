import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Med Clinic X — AI-Powered Healthcare Digital Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 50%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Background glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.25)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#00d4ff",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ✦ AI-Powered Healthcare Technology
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          Med Clinic{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00d4ff, #6366f1)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            X
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 780,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          AI Patient Portals · Clinical Automation · Telemedicine · HIPAA-Compliant Websites
        </div>

        {/* Feature pills row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["🔒 HIPAA Compliant", "🤖 AI-Powered", "⚡ High Performance", "🏥 Built for Healthcare"].map(
            (pill) => (
              <div
                key={pill}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontSize: 16,
                  color: "#e5e7eb",
                  fontWeight: 600,
                }}
              >
                {pill}
              </div>
            )
          )}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 18,
            color: "rgba(255,255,255,0.3)",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          medclinicx.com
        </div>
      </div>
    ),
    { ...size }
  );
}
