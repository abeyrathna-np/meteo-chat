const logos = [
  "/logos/FastAPI.png",
  "/logos/groq.png",
  "/logos/mcp.png",
  "/logos/supabase-logo-icon.png",
  "/logos/Vercel.png"]

export default function PoweredBy() {
  return (
    <div className="logo-scroller">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img src={logo} alt="logo" className="logo" key={index} />
        ))}
      </div>
    </div>
  );
}
