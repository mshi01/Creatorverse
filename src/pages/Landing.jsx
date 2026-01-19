import universeImg from '../assets/universe.jpg';

export default function Landing() {
  return (
    <main style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${universeImg})`,
      backgroundSize: "cover",
      minHeight: "100vh"
    }}>
      <section style={{ textAlign: "center", paddingTop: "30vh" }}>
        <h1 style={{ 
          fontSize: "clamp(3rem, 10vw, 5rem)", 
          fontWeight: "900",
          color: "white"}}
        >Creatorverse</h1>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "3rem"}}>
          <a href="/creators" role="button" style={{width: "200px"}}>View All Creators</a>
          <a href="/add" role="button" style={{width: "200px"}} className="secondary">Add a Creator</a>
        </div>
      </section>
    </main>
  )
}