import { useState } from "react";
import Search from "./Search"; 
import PlantList from "./PlantList"; 
import NewPlantForm from "./NewPlantForm"; 

function PlantPage({ plants, onAddPlant }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
    <div>c
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm onAddPlant={onAddPlant} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default PlantPage;
