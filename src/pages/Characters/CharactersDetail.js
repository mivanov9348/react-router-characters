import { useOutletContext } from "react-router-dom";
import "./CharactersDetail.css";

export default function Characters() {
  const characters = useOutletContext();
  console.log(`outletcontext: ${characters}`);

  return (
    <div className="card-container">
      {characters.map((ch) => (
        <div className="card" key={ch.id}>
          <img src="../images/Bella.png" alt={ch.name} />
          <hr />
          <p>name: {ch.name}</p>
          <p>class: {ch.class}</p>
          <p>age: {ch.age}</p>
        </div>
      ))}
    </div>
  );
}
