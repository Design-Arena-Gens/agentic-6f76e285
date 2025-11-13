export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "radial-gradient(1000px 600px at 50% 30%, #14181b 0%, #0b0e10 60%, #050607 100%)",
        color: "#e5e7eb",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          padding: 24,
          borderRadius: 16,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 48, margin: 0, letterSpacing: -1 }}>DS</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>Deployed on Vercel ? Next.js 14</p>
        <a
          href="https://nextjs.org"
          style={{
            marginTop: 12,
            color: "#60a5fa",
            textDecoration: "none",
            borderBottom: "1px dashed rgba(96,165,250,0.4)",
          }}
        >
          Learn Next.js
        </a>
      </section>
    </main>
  );
}
