import ProductosItems from "@/components/ProductosItems";

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
        <div className="grid sm:grid-cols-2 gap-8 mt-7">
          <ProductosItems
            img="https://res.cloudinary.com/kennysabee/image/upload/v1696355455/itacaPetShop/galeriaPortada/itacaGaleria.jpg"
            title="Camas de madera"
            useWith="Comprar"
            url="/productos/perros/camas"
          />
          <ProductosItems
            img="https://res.cloudinary.com/kennysabee/image/upload/v1696351032/itacaPetShop/galeriaPortada/luaPortada.jpg"
            title="Accesorios"
            useWith="Comprar"
            url="/productos/perros/camas"
          />
          
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
