import Image from "next/image";

const featuredTestimonial = {
  body: "La cama grande de Itaca ha cambiado la vida de mi Husky Siberiano, Luna. Desde que tenemos esta cama, Luna duerme profundamente y se despierta más feliz que nunca. La calidad y el diseño de la cama son impresionantes. ¡Esta cama realmente es una joya para cualquier dueño de mascotas en departamentos!",
  author: {
    name: "Elena R.",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    
  },
};
const testimonials = [
  [
    [
      {
        body: "Mi perro nunca ha dormido tan bien como en su cama Itaca. La calidad y el estilo son impresionantes. ¡Una compra que no me arrepiento!",
        author: {
          name: "Alejandro S.",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
      },
      {
        body: "La cama mediana de Itaca es perfecta para mi Cocker Spaniel. Le encanta y se ve genial en mi sala de estar..",
        author: {
          name: " Laura P.",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      },
      {
        body: "La madera de la cama pequeña de Itaca es simplemente espectacular. Mi Yorkshire Terrier, Bella, se ve tan elegante en su nueva cama. La calidad de la madera es evidente y le da un toque de sofisticación a nuestro espacio.",
        author: {
          name: "Xavier H. ",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1540289327268-c149bdfd7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Nuestra cama pequeña de Itaca es simplemente adorable. Mi Chihuahua la adora, y yo también.",
        author: {
          name: "Lindsay W.",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      },
      {
        body: "Mi Pastor Alemán tiene mucho espacio en la cama grande de Itaca. Está tan cómodo que a veces me gustaría tener una igual.",
        author: {
          name: " María J. ",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "La madera de la cama de Itaca es lo que más me impresiona. Es sólida y hermosa. Mi Pug, Toby, parece sentirse como un rey en su cama de madera. ¡Una obra maestra de artesanía!",
        author: {
          name: "Natalia L.",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1685703217788-6709c752f567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      },
      {
        body: "Nuestra cama grande de Itaca ha elevado la comodidad de nuestro Dálmata, Luna. Es espaciosa y duradera, lo que es crucial para una raza activa como la suya. ¡Estamos muy contentos con nuestra compra!",
        author: {
          name: "Leslie A.",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1685703206888-3af4781ad83f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        },
      },
    ],
    [
      {
        body: "La cama pequeña de Itaca es el refugio perfecto para nuestro Bichón Frisé, Bella. La calidad y el diseño son excepcionales. Bella la adora, y nosotros también. Sin duda, una inversión que vale la pena.",
        author: {
          name: "Leonardo K.",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1517308883849-ceac3c24681e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
        },
      },
      {
        body: "Mi Bulldog Francés, Coco, nunca había tenido una cama tan cómoda como la de Itaca. La calidad de construcción es excepcional. ¡Gracias, Itaca!",
        author: {
          name: "Marcos R.",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
        },
      },
      {
        body: "La calidad de la madera de la cama de Itaca es realmente excepcional. La elegante madera natural se ve y se siente increíble. Mi Border Collie, Max, sabe apreciar el buen material, y esta cama definitivamente cumple con sus estándares. ¡Estamos encantados!",
        author: {
          name: " Lucía S.",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1519733833087-3b1ceb8d56c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1929&q=80",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative isolate bg-white  pt-7 sm:pt-14 ">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-950">
          Lo que Nuestros Clientes Dicen
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sus mascotas no pueden tener suficiente de la comodidad que ofrecen. 
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image height={50} width={50}
                className="h-10 w-10 flex-none rounded-full bg-gray-50 object-cover"
                src={featuredTestimonial.author.imageUrl}
                alt="testimonio"
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                
              </div>
              
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image height={50} width={50}
                          className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                          src={testimonial.author.imageUrl}
                          alt="testimonios"
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
