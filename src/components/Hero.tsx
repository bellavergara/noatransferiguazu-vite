import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroCataratas from "@/assets/hero-cataratas.jpg";

const Hero = () => {
  const whatsappNumber = "5493757000000";
  const whatsappMessage = encodeURIComponent("Hola! Quiero reservar un traslado.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCataratas}
          alt="Cataratas del Iguazú"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white pt-20">
        <div
  className="
    max-w-3xl mx-auto
    relative
    px-8 sm:px-12
    py-8 sm:py-10
    rounded-3xl

    bg-[rgba(245,241,235,0.18)]
    backdrop-blur-xl

    border border-transparent
    bg-clip-padding

    shadow-[0_10px_40px_rgba(0,0,0,0.18)]
    transition-all duration-700 ease-out

    hover:shadow-[0_0_45px_rgba(139,94,60,0.35)]
    hover:scale-[1.015]

    animate-hero-frame
  "
>
  {/* MARCO PRO */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      rounded-3xl
      border
      border-[#8B5E3C]/80

      before:absolute
      before:inset-0
      before:rounded-3xl
      before:border
      before:border-transparent
      before:bg-gradient-to-r
      before:from-[#8B5E3C]/40
      before:before:via-transparent
      before:to-[#8B5E3C]/40
      before:opacity-60
    "
  />

          <div className="flex items-center justify-center gap-2 mb-6 opacity-90">
            <MapPin className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium tracking-wide">
              Puerto Iguazú, Misiones, Argentina
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tu viaje por las maravillas
            <br />
            <span className="text-water-light">de Iguazú</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Traslados seguros y confiables al aeropuerto, hoteles, 
            Parque Nacional, y tours exclusivos por Argentina, Brasil y Paraguay.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="xl"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                Reservar ahora
              </a>
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              asChild
            >
              <a href="#servicios">
                Ver servicios
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
