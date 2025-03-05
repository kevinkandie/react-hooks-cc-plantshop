import { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false);

  function toggleSoldOut() {
    const updatedSoldOut = !isSoldOut;
    setIsSoldOut(updatedSoldOut);

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ soldOut: updatedSoldOut }),
    }).catch((error) => console.error("Error updating sold out status:", error));
  }

  return (
    <div className="plant-card" data-testid="plant-item">
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} width="100" />
      <p>Price: ${plant.price}</p>
      <button onClick={toggleSoldOut}>
        {isSoldOut ? "Sold Out" : "Available"}
      </button>
    </div>
  );
}

export default PlantCard;
