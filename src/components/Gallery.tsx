import { Camera } from "lucide-react";

// Importá tus imágenes aquí cuando las subas:
import auto from "@/assets/gallery/auto.jpeg";
import bar from "@/assets/gallery/bar.jpeg";
import cataratas from "@/assets/gallery/cataratas.jpeg";
import lagartija from "@/assets/gallery/lagartija.jpeg";
import mariposa from "@/assets/gallery/mariposa.jpeg";
import mina from "@/assets/gallery/mina.jpeg";

const Gallery = () => {
  // Cuando subas las fotos, reemplazá estos placeholders con las imágenes importadas
  const photos = [
    { id: 1, alt: "Lavadero de auto Iguazú", placeholder: auto },
    { id: 2, alt: "Bar de Hielo", placeholder: bar },
    { id: 3, alt: "Selfie Garganta del Diablo", placeholder: cataratas },
    { id: 4, alt: "Lagartija en Cataratas", placeholder: lagartija },
    { id: 5, alt: "Mariposa 88", placeholder: mariposa },
    { id: 6, alt: "Mina de Wanda", placeholder: mina },
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Galería
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nuestros Destinos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conocé algunos de los increíbles lugares que podés visitar con nuestro servicio de traslados
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="aspect-[4/3] rounded-xl overflow-hidden bg-muted relative group cursor-pointer"
            >
              {photo.placeholder ? (
                <img
                  src={photo.placeholder}
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm">
                  {photo.alt}
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
