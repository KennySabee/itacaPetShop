// BotonWpPersonalizado.js
import React from "react";

export default function BotonWpPersonalizado({ selectedSize, selectedPrice }) {
  // Define una función para generar un mensaje de WhatsApp basado en el tamaño y el precio seleccionados
  const generateWhatsAppMessage = () => {
    // Define el número de WhatsApp al que se enviará el mensaje
    const numeroWhatsApp = "+593992597590"; // Reemplaza con tu número de WhatsApp

    // Crea una plantilla de mensaje basada en el tamaño y el precio seleccionados
    const mensaje = `Hola, estoy interesado en la Cama premium para perro en tamaño ${selectedSize} que cuesta ${selectedPrice}. ¿Puedes proporcionarme más información?`;

    // Genera un enlace de WhatsApp con el mensaje
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Puedes abrir el enlace de WhatsApp o manejarlo según sea necesario

    return enlaceWhatsApp;
  };

  return (
    <div className="mt-6">
      <a
        href={generateWhatsAppMessage()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-950 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
