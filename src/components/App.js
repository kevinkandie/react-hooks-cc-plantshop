import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]); 
  }

  return (
    <div>
      <Header />
      <PlantPage 
        plants={plants} 
        onAddPlant={handleAddPlant} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
    </div>
  );
}

export default App;
