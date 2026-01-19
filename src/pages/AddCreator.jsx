import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

export default function AddCreator() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    description: "",
    youtube_handle: "",
    twitter_handle: "",
    instagram_handle: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("creators").insert([formData]);

    if (!error) {
      navigate("/");
    } else {
      alert("Error adding creator");
    }
  }

  return (
    <main className="container" style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}>
      <article style={{
        backgroundColor: "#909EBE",
        width: "800px"
      }}>
        <form onSubmit={handleSubmit}>
        <header>
          <h2>Add a New Creator</h2>
          <p>Fill out the information below to add a content creator.</p>
        </header>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Image URL
            <input
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            <small>A direct link to the creator’s profile image.</small>
          </label>

          <label>
            Description
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description"
            />
            <small>A short description of the creator and their content.</small>
          </label>

          <label>
            YouTube
            <input
              type="text"
              name="youtube_handle"
              value={formData.youtube_handle}
              onChange={handleChange}
              placeholder="@youtubeHandle or full URL"
            />
            <small>YouTube handle without @</small>
          </label>

          <label>
            Twitter
            <input
              type="text"
              name="twitter_handle"
              value={formData.twitter_handle}
              onChange={handleChange}
              placeholder="@twitterHandle"
            />
            <small>Twitter handle without @</small>
          </label>

          <label>
            Instagram
            <input
              type="text"
              name="instagram_handle"
              value={formData.instagram_handle}
              onChange={handleChange}
              placeholder="@instagramHandle"
            />
            <small>Instagram handle without @</small>
          </label>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <button type="submit" style={{width: "200px"}}>Submit</button>
            <button type="button" style={{width: "200px"}} className="secondary" onClick={() => navigate("/")}> 
              Cancel
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}
