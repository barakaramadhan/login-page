import { useContext } from "react";
import AboutContext from "./AboutContext";

function About() {
  // Ambil hanya properti 'title' dari object context
  const { title } = useContext(AboutContext);

  return (
    <div>
      <h1>About Title : {title}</h1>
    </div>
  );
}

export default About;