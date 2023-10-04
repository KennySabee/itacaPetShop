import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <>
     
      <main className="relative isolate min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1524111890967-20e856be04d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"
          alt="fondoNotFound"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          height={800}
          width={800}
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-gray-950 mt-44">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">Página no encontrada</h1>
          <p className="mt-4 text-base text-gray-700 sm:mt-6">Disculpa, no podemos encontrar la página que estas buscando.</p>
          <div className="mt-10 flex justify-center">
            <Link href="/#inicio" scroll={false} className="text-2xl font-semibold leading-7 text-gray-950">
              <span aria-hidden="true">&larr; Regresar a inicio</span> 
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
