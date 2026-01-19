import Landing from "../pages/Landing";
import AllCreators from "../pages/AllCreators";

export default function Home() {
  return (
    <>
      <Landing />
      <div
  style={{
    height: "6px",
    background: "linear-gradient(90deg, transparent, #017FC0, transparent)",
  }}
/>
      <AllCreators />
    </>
  );
}