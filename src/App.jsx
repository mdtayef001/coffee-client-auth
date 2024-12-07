import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";
import Nav from "./Components/Nav";

function App() {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="mt-20">
        <h1
          className="text-3xl text-center
         font-bold underline"
        >
          coffee {coffees.length}
        </h1>
        <div className="mt-20 grid grid-cols-2 gap-6 container mx-auto p-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
