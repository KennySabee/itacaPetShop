import React, { useState } from "react";
import BotonWpPersonalizado from "./ButtonWp";; // Asegúrate de importar el componente BotonWpPersonalizado

export default function ButtonWithSizes() {
  const [selectedSize, setSelectedSize] = useState("Small");
  const [price, setPrice] = useState(110) // Define selectedSize y su estado

  // Define una función para manejar la selección de tamaño y actualizar el precio
  const handleSizeChange = (selected) => {
    // Define los ajustes de precio para cada tamaño
    const sizePrices = {
      Small: 105,
      Medium: 135,
      Large: 155, 
    };

    // Actualiza el precio en función de la elección del usuario
    const updatedPrice = sizePrices[selected];
    setPrice(updatedPrice);
    setSelectedSize(selected);
  };

  return (
    <div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-600">Selecciona el tamaño:</h3>
        <div className="mt-2">
          <div className="flex items-center space-x-4">
            <label className="text-sm">
              <input
                type="radio"
                name="size"
                value="Small"
                checked={selectedSize === "Small"}
                onChange={() => handleSizeChange("Small")}
                className="mr-2"
              />
              Pequeño
            </label>
            <label className="text-sm">
              <input
                type="radio"
                name="size"
                value="Medium"
                checked={selectedSize === "Medium"}
                onChange={() => handleSizeChange("Medium")}
                className="mr-2"
              />
              Mediano
            </label>
            <label className="text-sm">
              <input
                type="radio"
                name="size"
                value="Large"
                checked={selectedSize === "Large"}
                onChange={() => handleSizeChange("Large")}
                className="mr-2"
              />
              Grande
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="space-y-6 text-base text-gray-700">Precio:</h3>
        <p className="text-3xl tracking-tight text-gray-900">
          ${price}
        </p>
      </div>
      <div>
        <BotonWpPersonalizado
          selectedSize={selectedSize}
          selectedPrice={price} // Pasamos el precio en lugar de handleSizeChange(selectedSize)
        />
      </div>
    </div>
  );
}
