import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    description: "",
    youtube_handle: "",
    twitter_handle: "",
    instagram_handle: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        alert("Failed to load creator data");
      } else {
        setFormData(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update(formData)
      .eq("id", id);

    if (error) {
      alert("Error updating creator");
      console.error(error);
    } else {
      navigate(`/creators`);
    }
  };

  if (loading) return <p>Loading creator...</p>;

  return (
    <main className="container">
      <article style={{
        backgroundColor: "#909EBE",
        width: "800px"
      }}>
        <form onSubmit={handleSubmit}>
        <header>
          <h2>Edit Creator</h2>
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
            <small>The display name of the content creator.</small>
          </label>

          <label>
            Image URL
            <input
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
            <small>A direct link to the creator's image.</small>
          </label>

          <label>
            Description
            <textarea
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
            />
            <small>A full description of the creator.</small>
          </label>

          <label>
            YouTube
            <input
              type="text"
              name="youtube_handle"
              value={formData.youtube_handle}
              onChange={handleChange}
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
            />
            <small>Instagram handle without @</small>
          </label>

          <footer style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button type="submit" style={{width: "200px"}}>Save Changes</button>
            <button
              type="button"
              style={{width: "200px"}}
              className="secondary"
              onClick={() => navigate(`/delete/${id}`)}
            >
              Delete
            </button>
          </footer>
        </form>
      </article>
    </main>
  );
}