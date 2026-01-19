import { Link } from "react-router-dom";
import { Youtube, Twitter, Instagram, Info, Pencil } from "lucide-react";

export default function CreatorCard({ creator }) {
  return (
    <article
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        background: "linear-gradient(135deg, #5D6B89, #333C4E)",
        color: "white",
      }}
    >
      {/* Image section */}
      <div
        style={{
          height: "180px",
          backgroundImage: `url(${creator.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div style={{ padding: "1.25rem" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "1.3rem", color: "#e5e7eb"}}>
            {creator.name}
          </h3>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link to={`/creators/${creator.id}`}>
              <Info size={20} color="#e5e7eb" />
            </Link>
            <Link to={`/edit/${creator.id}`}>
              <Pencil size={20} color="#e5e7eb" />
            </Link>
          </div>
        </header>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
          {creator.youtube_handle && (
            <a href={`https://youtube.com/@${creator.youtube_handle}`} target="_blank">
              <Youtube size={24} color="#017FC0" />
            </a>
          )}
          {creator.twitter_handle && (
            <a href={`https://x.com/${creator.twitter_handle}`} target="_blank">
              <Twitter size={24} color="#017FC0" />
            </a>
          )}
          {creator.instagram_handle && (
            <a href={`https://instagram.com/${creator.instagram_handle}`} target="_blank">
              <Instagram size={24} color="#017FC0" />
            </a>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            color: "#e5e7eb",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {creator.description}
        </p>
      </div>
    </article>
  );
}
