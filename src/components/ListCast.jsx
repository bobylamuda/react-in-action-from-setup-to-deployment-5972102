import { useState, useEffect } from "react";

function ListCast({ onChoice, onTouchMove }) {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
      gap: "1px",
      marginBottom: "1rem",
      backgroundColor: "blanchedalmond"
    }}>
      {
        cast.map(member => (
          <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}

export default ListCast;