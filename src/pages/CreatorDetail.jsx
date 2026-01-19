import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Youtube, Twitter, Instagram } from "lucide-react";
import { supabase } from "../client";

export default function CreatorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setCreator(data);
    }

    fetchCreator();
  }, [id]);

  if (!creator) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <main className="container" >
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2rem",
          alignItems: "start",
          backgroundColor: "#B0B9D0"
        }}
      >
        {/* Left: Image */}
        <img
          src={creator.image_url}
          alt={creator.name}
          style={{
            width: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        {/* Right: Info */}
        <div>
          <h2 style={{ marginBottom: "0.5rem" }}>{creator.name}</h2>

          <p style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
            {creator.description}
          </p>

          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
            {creator.youtube_handle && (
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href={`https://youtube.com/@${creator.youtube_handle}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Youtube color="#017FC0" />
                  @{creator.youtube_handle}
                </a>
              </li>
            )}

            {creator.twitter_handle && (
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href={`https://x.com/${creator.twitter_handle}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Twitter color="#017FC0" />
                  @{creator.twitter_handle}
                </a>
              </li>
            )}

            {creator.instagram_handle && (
              <li>
                <a
                  href={`https://instagram.com/${creator.instagram_handle}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Instagram color="#017FC0" />
                  @{creator.instagram_handle}
                </a>
              </li>
            )}
          </ul>

          {/* Actions */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <button width="300px" onClick={() => navigate(`/edit/${creator.id}`)}>
              Edit
            </button>
            <button 
              width="300px"
              className="secondary"
              onClick={() => navigate(`/delete/${creator.id}`)}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
