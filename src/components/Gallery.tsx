import { Camera } from "lucide-react";

// Nuevas imágenes
import cataratas from "@/assets/images/cataratas.jpg";
import ruinas from "@/assets/images/ruinas.jpg";
import paraguay from "@/assets/images/paraguay.jpg";
import guiraoga from "@/assets/images/guiraoga.jpg";
import catamaran from "@/assets/images/catamaran.jpg";
import barDeHielo from "@/assets/images/bardehielo.jpg";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      image: cataratas,
      alt: "Cataratas del Iguazú",
      description: "Una de las maravillas naturales del mundo, rodeada de selva y energía única.",
    },
    {
      id: 2,
      image: ruinas,
      alt: "Ruinas Jesuíticas",
      description: "Un viaje a la historia y cultura de la región, patrimonio de la humanidad.",
    },
    {
      id: 3,
      image: paraguay,
      alt: "Compras en Paraguay",
      description: "Cruzá la frontera y disfrutá de un día de compras y paseo.",
    },
    {
      id: 4,
      image: guiraoga,
      alt: "Guirá Oga",
      description: "Refugio de animales silvestres y conexión con la naturaleza.",
    },
    {
      id: 5,
      image: catamaran,
      alt: "Paseo en Catamarán",
      description: "Una experiencia relajante navegando el río al atardecer.",
    },
    {
      id: 6,
      image: barDeHielo,
      alt: "Bar de Hielo",
      description: "Una experiencia única bajo cero en el corazón de Iguazú.",
    },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Galería
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nuestros Destinos
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubrí algunos de los lugares y experiencias que podés disfrutar con nuestros traslados.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-[4/3] rounded-xl overflow-hidden bg-muted relative group"
            >
              {photo.image ? (
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                  <Camera className="w-8 h-8 text-muted-foreground/50 mb-2" />
                  <span className="text-xs text-muted-foreground/50">
                    {photo.alt}
                  </span>
                </div>
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              flex flex-col justify-end p-4">
                <span className="text-white font-semibold text-sm">
                  {photo.alt}
                </span>
                <span className="text-white/80 text-xs mt-1 leading-snug">
                  {photo.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
