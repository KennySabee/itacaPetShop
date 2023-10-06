
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <div className="bg-white" id="inicio">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-5 sm:pt-10 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 pt-32 pb-16 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Descubre nuestra exclusiva gama de muebles. 
                    <a href="/#caracteristicas" scroll={false}  className="whitespace-nowrap font-semibold text-gray-950">
                      <span className="absolute inset-0" aria-hidden="true" />
                       Para perros. <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl text-center sm:text-left font-bold tracking-tight text-gray-950 sm:text-6xl">
                ¡Hagamos que tu hogar sea su hogar!
                </h1>
                <p className="mt-6 text-lg text-center sm:text-left leading-8 text-gray-600">
                Bienvenido a Ítaca, donde el confort y el estilo se unen para
              mimar a tus adoradas mascotas.
                </p>
                <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
                  <a
                    href="/#galeria"
                    scroll={false}
                    className="rounded-md bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                  >
                    Ver Productos
                    
                  </a>
                  <a href="/#dimensiones" scroll={false} className="text-sm font-semibold leading-6 text-gray-950">
                  Dimensiones <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://res.cloudinary.com/kennysabee/image/upload/v1696355366/itacaPetShop/hero.jpg"
            alt="fondoHero"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
