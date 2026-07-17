import { ImageResponse } from "next/og";

export const alt = "SocialMediaMarketing.VIP - real people behind your brand";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #f8fbff 0%, #ddf5ff 52%, #fff7dc 100%)",
          color: "#1b2b3d",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(32, 161, 113, 0.18)",
            right: -80,
            top: -100
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: 999,
            background: "rgba(255, 133, 102, 0.20)",
            left: -110,
            bottom: -120
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 82px",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 28,
              fontWeight: 800,
              color: "#1d73c8"
            }}
          >
            <span
              style={{
                display: "flex",
                padding: "13px 20px",
                borderRadius: 999,
                color: "white",
                background: "#1d73c8"
              }}
            >
              SMM
            </span>
            SocialMediaMarketing.VIP
          </div>
          <div style={{ display: "flex", marginTop: 42, fontSize: 68, lineHeight: 1.04, fontWeight: 900, maxWidth: 930 }}>
            Social media management for local businesses
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 31, color: "#31506c" }}>
            Real people behind your brand. Based in Maryland.
          </div>
        </div>
      </div>
    ),
    size
  );
}
