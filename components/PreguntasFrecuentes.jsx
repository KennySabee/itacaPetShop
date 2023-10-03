"use client"
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " ¿Cuáles son los tamaños disponibles de las camas para perros de Itaca?",
    answer:
      "Ofrecemos tres tamaños: pequeño, mediano y grande. El tamaño que elijas dependerá del tamaño de tu perro y del espacio disponible en tu hogar.",
  },{
    question: "¿Puedo personalizar el acabado de la cama para que coincida con la decoración de mi hogar?",
    answer:
      "¡Por supuesto! Ofrecemos una variedad de acabados para que puedas personalizar la cama y asegurarte de que se adapte perfectamente a tu estilo de decoración.",
  },
  {
    question: " ¿Cuál es el proceso de limpieza y mantenimiento de las camas de Itaca?",
    answer:
      "Las camas de Itaca son fáciles de limpiar. Puedes simplemente pasar un paño húmedo para eliminar el polvo o las manchas menores. Los materiales de alta calidad resisten el desgaste y son duraderos.",
  },
  {
    question: "¿Las camas de Itaca son adecuadas para perros grandes y pesados?",
    answer:
      "Sí, ofrecemos camas grandes que son perfectas para razas grandes y pesadas. Están diseñadas para proporcionar un soporte robusto y duradero.",
  },
  {
    question: "¿Hacen envíos a otras ciudades además de Quito, Ecuador?",
    answer:
      " Sí, realizamos envíos a otras ciudades de Ecuador. Ponte en contacto con nuestro equipo de atención al cliente para obtener detalles sobre el envío a tu ubicación.",
  },
  {
    question: "¿Cuál es el tiempo de entrega estimado para las camas de Itaca?",
    answer:
      "El tiempo de entrega estimado puede variar según la ubicación, pero generalmente entregamos dentro de los 5-7 días laborables después de confirmar tu pedido.",
  },
  {
    question: "¿Las camas de Itaca vienen ensambladas o requieren montaje?",
    answer:
      "Nuestras camas se entregan listas para usar, por lo que no necesitas preocuparte por el montaje. Solo tienes que colocarla en el lugar que prefieras.",
  },
  {
    question: " ¿Ofrecen garantía en sus camas para perros?",
    answer:
      "Sí, ofrecemos una garantía de calidad en nuestras camas. Si tienes algún problema con tu cama, ponte en contacto con nuestro equipo de atención al cliente para que te ayuden a resolverlo.",
  },
  {
    question: "¿Qué materiales se utilizan en la fabricación de las camas de Itaca?",
    answer:
      "Utilizamos madera triplex de alta calidad y acabados resistentes para garantizar la durabilidad y la comodidad de nuestras camas para perros.",
  },
]

export default function Example() {
  return (
    <div id='faqs' className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-center text-gray-900">¿Tienes preguntas sobre nuestras camas para perros? </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
