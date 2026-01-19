import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export default function AllCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }

      setLoading(false);
    }

    fetchCreators();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading creators...</p>;
  }

  return (
    <section
      id="creators"
      style={{
        backgroundColor: "#D8D0F1", 
        padding: "3rem 0",
      }}
    >
    <main className="container" >
      <section className="grid" style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
        {creators.length === 0 ? (
          <p>No creators added yet.</p>
        ) : (
          creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))
        )}
      </section>
    </main>
    </section>
  );
}
