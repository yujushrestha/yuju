import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AankhaNet — yuju shrestha",
  description: "AI-driven network threat detection and visualization platform with a mobile SOC companion for SMEs.",
}

export default function AankhaNet() {
  return (
    <main style={{ padding: "10rem 2rem 6rem", maxWidth: "740px" }}>

      <Link
        href="/#work"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--terminal-green)",
          opacity: 0.5,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          display: "block",
          marginBottom: "4rem",
        }}
      >
        back to work
      </Link>

      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        color: "var(--terminal-green)",
        opacity: 0.5,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: "1.5rem",
      }}>
        2025 — present · capstone NIT3003/NIT3004
      </p>

      <h1 style={{
        fontFamily: "var(--font-awe)",
        fontSize: "clamp(2.5rem, 7vw, 5rem)",
        fontWeight: 300,
        color: "var(--journal-page)",
        lineHeight: 1.0,
        letterSpacing: "-0.02em",
        marginBottom: "0.5rem",
      }}>
        AankhaNet
      </h1>

      <p style={{
        fontFamily: "var(--font-awe)",
        fontSize: "1.2rem",
        fontStyle: "italic",
        color: "var(--bruised-gold)",
        marginBottom: "4rem",
        opacity: 0.8,
      }}>
        detect · monitor · protect
      </p>

      <div style={{ borderTop: "0.5px solid var(--near-black)", marginBottom: "4rem" }} />

      <section style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          the problem
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
        }}>
          Small and medium businesses face the same cyber threats as enterprises but operate with a fraction of the resources. Existing network detection tools cost tens of thousands annually, require dedicated SOC analysts, and were not built for organisations running pfSense and a team of five.
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
          marginTop: "1.5rem",
        }}>
          Australian SMBs lose an average of AUD 49,615 per cyber incident. The tools to prevent that were priced out of their reach.
        </p>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          the approach
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
        }}>
          We built AankhaNet — a cloud-enabled, AI-driven NDR platform deployable for under AUD 100/month. The system ingests Syslog, NetFlow v9, and pcap data from common SMB firewalls, processes it through a Kafka pipeline, runs an ensemble of Isolation Forest, autoencoder, and XGBoost models, maps detections to MITRE ATT&amp;CK, and generates LLM narratives that explain threats in plain language.
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
          marginTop: "1.5rem",
        }}>
          The mobile SOC companion built in React Native gives IT administrators biometric login, push alerts, and offline triage from their phone. No SOC analysts required.
        </p>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          key decisions
        </p>

        {[
          {
            decision: "Kafka over direct DB writes",
            reason: "throughput. we needed to handle 5,000+ events/sec without the ingestion layer becoming the bottleneck. Kafka gave us parallel consumer groups and a dead-letter queue for malformed packets."
          },
          {
            decision: "ensemble ML over single model",
            reason: "no single model caught everything. Isolation Forest found anomalies. the autoencoder caught reconstruction errors. XGBoost classified attack families. together they achieved 90%+ detection accuracy on CICIDS2017."
          },
          {
            decision: "React Native over Flutter",
            reason: "shared TypeScript types with the web frontend. faster iteration via OTA updates. the team already knew the ecosystem. same functionality, less context switching."
          },
          {
            decision: "Railway + Vercel over AWS",
            reason: "reduced monthly costs from ~$90 to under $20 during development. AWS migration path is documented in Architecture Decision Records for production scale."
          },
        ].map((item) => (
          <div
            key={item.decision}
            style={{
              borderTop: "0.5px solid var(--near-black)",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "2rem",
            }}
          >
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--journal-page)",
              opacity: 0.5,
              letterSpacing: "0.06em",
              lineHeight: 1.6,
            }}>
              {item.decision}
            </p>
            <p style={{
              fontFamily: "var(--font-awe)",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "var(--still-lake)",
              lineHeight: 1.8,
              opacity: 0.7,
            }}>
              {item.reason}
            </p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {[
            "Python", "TypeScript", "React", "React Native",
            "Expo", "Kafka", "PostgreSQL", "InfluxDB",
            "Redis", "Docker", "FastAPI", "Vercel", "Railway"
          ].map(tech => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--journal-page)",
                opacity: 0.4,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "0.5px solid currentColor",
                padding: "0.3rem 0.6rem",
                borderRadius: "2px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "4rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          outcome
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
        }}>
          All 13 functional requirements met. Live on production hosting. 124 commits. Detection latency under 5 seconds at p95. Dashboard response under 250ms. Mobile triage works offline. The system costs under AUD 100/month to run.
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
          marginTop: "1.5rem",
        }}>
          We built enterprise-grade network detection accessible to a business that cannot afford enterprise-grade anything.
        </p>
      </section>

      <section style={{ marginBottom: "5rem" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--bleeder-red)",
          opacity: 0.7,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          what i learned
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
        }}>
          That the hardest problems are not technical. Kafka and XGBoost have documentation. Deciding what a generalist IT administrator actually needs at 2am when an alert fires — that required thinking differently about who you are building for.
        </p>
        <p style={{
          fontFamily: "var(--font-awe)",
          fontSize: "1.1rem",
          fontStyle: "italic",
          color: "var(--still-lake)",
          lineHeight: 1.9,
          opacity: 0.85,
          marginTop: "1.5rem",
        }}>
          Also: stream processing is humbling until it is not.
        </p>
      </section>

      <div style={{
        borderTop: "0.5px solid var(--near-black)",
        paddingTop: "2rem",
        display: "flex",
        gap: "2rem",
      }}>
        <a
          href="https://aankhanet.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--terminal-green)",
            opacity: 0.6,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "0.5px solid currentColor",
            paddingBottom: "2px",
          }}
        >
          live site
        </a>
        <a
          href="https://github.com/iambnishant07/aankhanet"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--still-lake)",
            opacity: 0.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderBottom: "0.5px solid currentColor",
            paddingBottom: "2px",
          }}
        >
          github
        </a>
      </div>

    </main>
  )
}
