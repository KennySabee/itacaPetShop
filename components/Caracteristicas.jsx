import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Diseño Único',
    description: 'Estilo único, elegancia para tu hogar, confort para tu mejor amigo.',
  },
  { name: 'Calidad Garantizada al 100%', description: 'Los mejores materiales y hecho en Ecuador.' },
  {
    name: 'Reseñas Positivas',
    description: 'Descubre por qué nuestros clientes están encantados con nuestras camas de madera para perros a través de reseñas positivas que son un testimonio de la satisfacción y felicidad de sus mascotas..',
  },
  {
    name: 'No requiere ensamblado',
    description: 'Simplifica tu vida con nuestras camas de madera para perros. Llegan a tu puerta completamente ensambladas, listas para que tu peludo amigo se relaje sin demoras..',
  },
  {
    name: 'Fácil Aseo',
    description: ' Mantener la limpieza es pan comido con nuestras camas de madera para perros. Diseñadas para ser de fácil aseo, garantizan un ambiente higiénico y cómodo para tu mascota..',
  },
  {
    name: 'Cojines de espuma y delcron siliconizado.',
    description: 'Tu perro merece lo mejor, por eso nuestras camas incluyen cojines de espuma premium y una capa de plumón para brindarle una experiencia de descanso verdaderamente lujosa..',
  },
  
  
  
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eleva el encanto de tu hogar y cuida a tu mejor amigo</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Con nuestro toque de elegancia premium. No tienes que comprometer la sofisticación al tener una mascota. Nuestros productos crean un ambiente acogedor para ti y tu peludo compañero.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
