import React from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import "./CharactersLayout.css";

const characters = [
  { name: "Elias", age: 22, class: "Rogue" },
  { name: "Mari", age: 32, class: "Mage" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
  { name: "Uri", age: 33, class: "Rogue" },
];

export default function CharactersLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const classFilter = searchParams.get("class");

  const displayCharacters = classFilter
    ? characters.filter(
        (ch) => ch.class.toLowerCase() === classFilter.toLowerCase()
      )
    : characters;

  console.log(displayCharacters);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <>
      <div className="container">
        <nav>
          <button onClick={() => handleFilterChange("class", null)}>
            All Characters
          </button>
          <button onClick={() => handleFilterChange("class", "warrior")}>
            Warriors
          </button>
          <button onClick={() => handleFilterChange("class", "mage")}>
            Mages
          </button>
          <button onClick={() => handleFilterChange("class", "rogue")}>
            Rogues
          </button>
          <button onClick={() => handleFilterChange("class", "ranger")}>
            Rangers
          </button>
        </nav>

        <main>
          <Outlet context={displayCharacters} />
        </main>
      </div>
    </>
  );
}
