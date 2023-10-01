const features = [
  { name: "Pequeña ", description: "Ideal para Razas Pequeñas" },
  {
    name: "Razas Ideales para la Cama Pequeña",
    description:
      "Chihuahua, Yorkshire Terrier,Pomerania, Caniche Toy, Bichón Frisé,  Maltese",
  },
  {
    name: "Dimensiones",
    description: "60 cm largo x 40 cm ancho x 15 cm alto",
  },
  { name: "Mediana", description: "Ideal para Razas Medianas" },
  {
    name: "Razas Ideales para la Cama Mediana",
    description:
      "Beagle, Bulldog Francés, Cocker Spaniel, Shiba Inu, Schnauzer, Corgi",
  },
  {
    name: "Dimensiones",
    description: "80 cm largo x 60 cm ancho x 15 cm alto.",
  },
  { name: "Grande", description: "Ideal para Razas Medianas" },
  {
    name: "Razas Ideales para la Cama Grande",
    description:
      "Labrador Retriever, Golden Retriever, Pastor Alemán, Husky Siberiano, Boxer, Dálmata",
  },
  {
    name: "Dimensiones",
    description: "100 cm largo x 60 cm ancho x 15 cm alto.",
  },
];

export default function Example() {
  return (
    <div id="dimensiones" className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Encuentra el Tamaño Perfecto
          </h2>
          <p className="mt-4 text-gray-500">
            Cada perro es especial, y en Itaca tenemos el tamaño perfecto para
            cada uno. Desde camas pequeñas acogedoras hasta lujosas camas
            grandes, aseguramos que tu mascota descanse como se merece, incluso
            en los espacios más reducidos de tu departamento.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl gap-x-6 gap-y-10 grid-cols-3 text-center sm:text-left sm:gap-y-16 lg:max-w-none lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
