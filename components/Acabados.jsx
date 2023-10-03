import Image from "next/image";


export default function Acabados() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-20  sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-gray-950 ">
              Personaliza la Elegancia
              </h2>
              <p className="mt-7">Ofrecemos una variedad de acabados para que tu cama para perros se adapte a tu estilo y espacio. Crea una cama que refleje tu buen gusto y haga que tus amigos y familiares admiren tu elección.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-2 ">
              
                <div className="text-center  lg:block lg:text-center">
                  <div className="">
                    <h3 className=" font-medium text-gray-950">Acabados madera</h3>
                    <p className="mt-2 text-gray-600">It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
                  </div>
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <Image className="mx-auto object-cover mt-4" width={600} height={600}  src="https://res.cloudinary.com/kennysabee/image/upload/v1696264531/itacaPetShop/acabadosCamas.jpg" alt="coloresMadera" />
                    </div>
                  </div>
                </div>
                <div className="text-center  lg:block lg:text-center">
                  <div className="">
                    <h3 className="font-medium text-gray-950">Acabados colchon</h3>
                    <p className="mt-2 lg:mb-9 text-gray-600">It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
                  </div>
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <Image className="mx-auto object-cover mt-4 lg:mt-0" width={842} height={234}  src="https://res.cloudinary.com/kennysabee/image/upload/v1696264531/itacaPetShop/acabadosColchones.jpg" alt="coloresColchon" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
