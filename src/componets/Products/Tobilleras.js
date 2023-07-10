import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";

const callouts = [
  {
    name: 'Doble ',
    description: '',
    imageSrc: 'https://image.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2022/4/22/1517406903402106880/Nueva-Tobillera-De-Aleaci-n-Bohemia-De-Doble-C-rculo-De-Moda-De-Color-Borla-De-Diamante-Multi-capa-Adornos-De-Pie.jpg',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Colgantes',
    description: '',
    imageSrc: 'https://image.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2022/4/22/1517406876785053696/Nueva-Tobillera-De-Aleaci-n-Bohemia-De-Doble-C-rculo-De-Moda-De-Color-Borla-De-Diamante-Multi-capa-Adornos-De-Pie.jpg',
    imageAlt: '.',
    href: '#',
  },
  {
    name: 'de hilo',
    description: '',
    imageSrc: 'https://image.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2022/3/21/1505796711954649088/Accesorios-Para-Pies-Simples-Tobillera-Tejida-De-Color-De-Contraste-Bohemio.jpg',
    imageAlt: '',
    href: '#',
  },
]


const Tobilleras= () => {
return (

  <div>
      <div className="fixed w-full z-20 top-0 left-0 bg-white">
          <Navbar/>
      </div>

      <div className="bg-white-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-48 sm:py-48 lg:max-w-none lg:py-48">
        <h2 className="text-2xl font-bold text-gray-900">Tobilleras</h2>

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

export default Tobilleras;