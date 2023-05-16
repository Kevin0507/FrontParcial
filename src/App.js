import React from "react";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);


  return (
    <div className="p-4 mx-auto max-w-7xl">
      <input
        className="border p-2 border-neutral-300 w-[300px]"
        placeholder="Buscar por nombre o direccion"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
        <div
          className="cursor-pointer shadow-md p-2 rounded-md flex flex-col"
          onClick={() =>
            setSelectedRestaurant({
              name: "Test",
            })
          }
        >
          <span className="font-bold text-lg">Nombre del restaurante</span>
          <span>Ubicacion</span>
        </div>
        <div
          className="cursor-pointer shadow-md p-2 rounded-md flex flex-col"
          onClick={() =>
            setSelectedRestaurant({
              name: "Test",
            })
          }
        >
          <span className="font-bold text-lg">Nombre del restaurante</span>
          <span>Ubicacion</span>
        </div>
      </div>

      {selectedRestaurant ? (
        <form className="shadow-sm border border-neutral-400 rounded-lg mt-4 p-4 lg:w-[300px]">
          <div className="flex flex-col mb-2">
            <label className="font-semibold">Nombre del restaurante</label>
            <span className="text-lg">{selectedRestaurant.name}</span>
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold">Fecha</label>
            <input
              className="border  p-2 border-neutral-300"
              style={{}}
              type="date"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold">Hora</label>
            <input
              className="border  p-2 border-neutral-300"
              style={{}}
              type="time"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold">Numero de personas</label>
            <input className="border p-2 border-neutral-300" type="number" />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-700 font-bold text-white py-2 px-3 rounded-md
            "
            >
              RESERVAR
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default App;
