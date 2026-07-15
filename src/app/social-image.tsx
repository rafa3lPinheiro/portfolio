export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

export const socialImageAlt = "Preview do portfólio de Rafael Pinheiro";

const highlights = ["+4 anos", "arquiteto de soluções", "engenharia de produto"];

type SocialImageCardProps = {
  heroSrc: string;
};

export function SocialImageCard({ heroSrc }: SocialImageCardProps) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#730c1e",
        color: "#fff3ef",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "linear-gradient(135deg, rgba(33,2,7,0.14) 0%, rgba(12,11,12,0) 42%, rgba(12,11,12,0.3) 100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "96px 72px 64px",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 690,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.82,
              letterSpacing: "-0.06em",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 116,
                fontWeight: 900,
                color: "#fff3ef",
              }}
            >
              Rafael
            </span>
            <span
              style={{
                fontSize: 116,
                fontWeight: 900,
                color: "#140f17",
              }}
            >
              Pinheiro
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "lowercase",
              color: "#fff1eb",
              marginBottom: 28,
            }}
          >
            desenvolvedor full stack
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 620,
              fontSize: 28,
              lineHeight: 1.35,
          color: "rgba(255, 241, 235, 0.92)",
          marginBottom: "auto",
        }}
          >
            Uso IA como parte de um processo de engenharia, não como atalho.
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 36,
            }}
          >
            {highlights.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255, 237, 230, 0.18)",
                  background: "rgba(20, 15, 23, 0.26)",
                  fontSize: 20,
                  color: "#f8eee8",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            alignSelf: "stretch",
            width: 360,
            borderRadius: 48,
            background:
              "linear-gradient(180deg, rgba(72,4,21,0.16) 0%, rgba(20,15,23,0.32) 100%)",
            border: "1px solid rgba(255, 237, 230, 0.12)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top, rgba(255,243,239,0.12), transparent 42%)",
            }}
          />
          <img
            src={heroSrc}
            alt=""
            style={{
              position: "relative",
              width: "112%",
              height: "112%",
              objectFit: "contain",
              objectPosition: "bottom center",
              filter: "drop-shadow(0 22px 60px rgba(0,0,0,0.42))",
              transform: "translate(6%, 8%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
