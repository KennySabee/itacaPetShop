import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ítaca",
  description:
    "Ítaca ofrece inmuebles para tu mascota, tanto para gatos y perros son realizados en madera de calidad por profesionales altamente capacitados, los muebles son adaptados a tu tamaño y necesidades de tu mascota. Dale a tu perro o gato la comodidad y elegancia con nuestros muebles de cama para perros y comederos para gatos estamos ubicados en Quito y realizamos envios a todo el Ecuador ",
  keywords: ["muebles", "mascotas", "perros", "gato", "cama", "comedero"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
