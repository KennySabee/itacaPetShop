import {BsInstagram, BsWhatsapp, BsTiktok, BsFacebook} from "react-icons/bs"
const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61552266422912',
    icon: BsFacebook
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/itaca.ec/',
    icon: BsInstagram
    
  },
  {
    name: 'TikTok',
    href: '#',
    icon: BsTiktok
  },
  
  {
    name: 'WhatsApp',
    href: 'https://wa.link/hrpvvt',
    icon: BsWhatsapp
  },
]

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Ítaca, Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
