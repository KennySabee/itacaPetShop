import Hero from "@/components/Hero2";
import Caracteristicas from "@/components/Caracteristicas";
import Productos from "@/components/Productos";
import Acabados from "@/components/Acabados";
import Dimensiones from "@/components/Dimensiones";
import Testimonios from "@/components/Testimonios";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import Footer from "@/components/Footer";
import BotonWp from "@/components/BotonWP";

export default function Home() {
  return (
    <>
      <Hero />
      <Caracteristicas />
      <Productos />
      <Acabados />
      <Dimensiones />
      <Testimonios />
      <PreguntasFrecuentes />
      <Footer />
      <BotonWp />
    </>
  );
}
