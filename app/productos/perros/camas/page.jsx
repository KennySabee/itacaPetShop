"use client";

"use client";
import { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


import ButtonWithSizes from "./ButtonWithSizes";

const product = {
  name: "Cama premium perro",
  price: " $110",
  rating: 5,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1696955655/itacaPetShop/camas/luaNogal.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1696955655/itacaPetShop/camas/luaWengue.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1696955654/itacaPetShop/camas/luaNegro.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1696955794/itacaPetShop/camas/itacaNogal.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1697479980/itacaPetShop/tallas/tallaS.jpg",
      alt: "Talla S.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1697479980/itacaPetShop/tallas/tallaM.jpg",
      alt: "Talla M.",
    },
    ,
    {
      id: 1,
      name: "Angled view",
      src: "https://res.cloudinary.com/kennysabee/image/upload/v1697479979/itacaPetShop/tallas/tallaL.jpg",
      alt: "Talla L.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-900",
      selectedColor: "ring-gray-700",
    },
    {
      name: "White",
      bgColor: "bg-orange-950",
      selectedColor: "ring-orange-900",
    },
    {
      name: "Washed Gray",
      bgColor: "bg-orange-900",
      selectedColor: "ring-orange-800",
    },
  ],
  size: [
    {
      name: "Small",
      bgColor: "bg-gray-900",
      selectedColor: "ring-gray-700",
      colorText: "white",
      text: "S",
    },
    {
      name: "Medium",
      bgColor: "bg-orange-950",
      selectedColor: "ring-orange-900",
      colorText: "white",
      text: "S",
    },
    {
      name: "Large",
      bgColor: "bg-orange-900",
      selectedColor: "ring-orange-800",
      colorText: "white",
      text: "S",
    },
  ],
  description: `
    <p> Eleva el descanso de tu mascota con la cama de madera de Itaca. Hecha a mano con madera de alta calidad, esta cama combina estilo y durabilidad. Disponible en tres tamaños para adaptarse a tu perro, es fácil de limpiar y ofrece envíos a todo Ecuador. Brinda a tu mascota un refugio cómodo y elegante. ¡Descubre el lujo y la calidad con la cama de Itaca!</p>
  `,
  details: [
    {
      name: "Lo que nos hace únicos",
      items: [
        "- Madera de Alta Calidad",
        "- Acabados Personalizables",
        "- Tamaños para Cada Mascota",
        "- Fácil de Limpiar",
        "- Envíos en Todo Ecuador",
      ],
    },

    {
      name: "Pago Seguro",
      items: [
        "- Transferencia Bancaria (Pichincha, Produbanco, Guayaquil)",
        "- Efectivo",
        "- PayPal",
        "- Si deseas utilizar otro sistema de pago ponte en contacto a través de mensaje.",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl  px-4 py-16 sm:px-6 sm:py-24  lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 mt-14">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <Image
                            height={300}
                            width={300}
                            src={image.src}
                            alt="camas"
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-gray-950" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <Image
                    height={300}
                    width={300}
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-32">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-gray-950"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
                </RadioGroup>
              </div>
              <div>
                <ButtonWithSizes />
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-gray-950" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
    </div>
  );
}
