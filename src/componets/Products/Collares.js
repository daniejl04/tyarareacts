import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";

const callouts = [
  {
    name: 'Cadenas',
    description: '',
    imageSrc: 'https://mariatjoyeria.com/cdn/shop/products/IMG_20220728_210359.jpg?v=1682005817&width=990',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Collar',
    description: '',
    imageSrc: 'https://www.pialu.pe/cdn/shop/files/image00038.jpg?v=1683119523&width=2142',
    imageAlt: '.',
    href: '#',
  },
  {
    name: 'Gargantilla',
    description: '',
    imageSrc: 'https://m.media-amazon.com/images/I/41dCRKAOFUL.jpg',
    imageAlt: '',
    href: '#',
  },
]


const Collares= () => {
return (

  <div>
      <div className="fixed w-full z-20 top-0 left-0 bg-white">
          <Navbar/>
      </div>

      <div className="bg-white-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-48 sm:py-48 lg:max-w-none lg:py-48">
        <h2 className="text-2xl font-bold text-gray-900">Collares</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

      <div>
          <Footer/>
      </div>
  </div>
);
};

export default Collares;