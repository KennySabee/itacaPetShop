import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div id="galeria" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Productos
          </h2>
          <a
            href="/#dimensiones"
            className="hidden text-sm font-semibold text-gray-950 hover:text-gray-700 sm:block"
          >
            Dimensiones
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:gap-y-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 mb-7">
            <Image
              src="https://res.cloudinary.com/kennysabee/image/upload/v1696355455/itacaPetShop/galeriaPortada/itacaGaleria.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center "
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full mb-7">
            <Image
              src="https://res.cloudinary.com/kennysabee/image/upload/v1696351032/itacaPetShop/galeriaPortada/luaPortada.jpg"
              alt="Comprar Ya."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />

            <div className="flex sm:items-end p-6 absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="/productos/perros/camas">
                    <span className="absolute inset-0" />
                    Camas de madera
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Comprar ya
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src="https://res.cloudinary.com/kennysabee/image/upload/v1696355454/itacaPetShop/galeriaPortada/perroGaleria.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-bottom   group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="/productos/perros/camas">
                    <span className="absolute inset-0" />
                    Accessorios
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Comprar ya
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="/#dimensiones"
            className="block text-sm font-semibold text-gray-950 hover:text-gray-700"
          >
            Dimensiones
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
