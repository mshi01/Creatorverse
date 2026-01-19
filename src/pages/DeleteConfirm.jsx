import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../client"

export default function DeleteConfirm() {
  const { id } = useParams()
  const navigate = useNavigate()

  async function handleDelete() {
    await supabase.from("creators").delete().eq("id", id)
    navigate("/creators")
  }

  return (
    <main className="container">
      <article>
        <h2>⚠️ Confirm Deletion</h2>

        <p>Are you sure you want to delete this creator?</p>

        <footer style={{ display: "flex", gap: "1rem" }}>
          <button className="contrast" onClick={handleDelete}>
            Yeah, totally sure
          </button>

          <button className="secondary" onClick={() => navigate(-1)}>
            Nah, never mind
          </button>
        </footer>
      </article>
    </main>
  )
}
