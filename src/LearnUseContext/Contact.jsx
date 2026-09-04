import { useContext } from "react";
import AboutContext from "./AboutContext";

function Contact() {
  // Ambil hanya properti 'title' dari object context
  const { title } = useContext(AboutContext);

  return (
    <div>
      <p>Contact Title : {title}</p>
    </div>
  );
}

export default Contact;