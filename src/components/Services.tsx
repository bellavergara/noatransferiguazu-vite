import { useEffect, useRef } from "react";
import {
  Plane,
  Building2,
  TreePine,
  ShoppingBag,
  Globe,
  Camera,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Plane,
    title: "Aeropuerto",
    description:
      "Traslados desde y hacia el Aeropuerto Internacional de Iguazú con puntualidad garantizada.",
  },
  {
    icon: Building2,
    title: "Hoteles",
    description:
      "Conectamos hoteles y alojamientos en toda la ciudad de forma cómoda y segura.",
  },
  {
    icon: TreePine,
    title: "Parque Nacional",
    description:
      "Viajes al Parque Nacional Iguazú para que disfrutes sin preocupaciones.",
  },
  {
    icon: Globe,
    title: "Foz de Iguazú",
    description:
      "Excursiones al lado brasileño de las cataratas y principales atracciones.",
  },
  {
    icon: ShoppingBag,
    title: "Ciudad del Este",
    description:
      "Tours de compras a Paraguay con una experiencia organizada y confiable.",
  },
  {
    icon: Camera,
    title: "Tours por Misiones",
    description:
      "San Ignacio, Minas de Wanda y otros destinos imperdibles de la región.",
  },
];

const destinations = [
  "Cataratas Argentinas",
  "Cataratas Brasileñas",
  "Ciudad del Este",
  "Foz de Iguazú",
  "Minas de Wanda",
  "Ruinas de San Ignacio",
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappNumber = "5493757589868";
  const whatsappMessage = encodeURIComponent(
    "Hola! Quiero consultar por un traslado."
  );

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-subtle"
    >
      <div className="container space-y-28">

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Servicios pensados para que disfrutes tu viaje
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            En <span className="font-medium text-foreground">Noa Transfer Iguazú</span> nos ocupamos de cada detalle
            de tu traslado para que empieces tu experiencia con tranquilidad,
            seguridad y atención personalizada.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                reveal
                opacity-0 translate-y-8
                transition-all duration-700 delay-100
                glass
                rounded-2xl
                p-8
                border-2 border-[#8B5E3C]/60
                shadow-soft
                hover:shadow-[0_0_35px_rgba(139,94,60,0.35)]
                hover:-translate-y-1
              "
            >
              <div className="
                w-14 h-14 rounded-xl
                flex items-center justify-center mb-6
                bg-secondary
                transition-all duration-300
                hover:bg-[#8B5E3C] hover:text-white
              ">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* DESTINOS */}
        <div className="text-center max-w-4xl mx-auto space-y-10 reveal opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">
            Destinos más elegidos
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-2
                  px-5 py-2 rounded-full
                  border border-[#8B5E3C]/50
                  bg-background/80
                  backdrop-blur
                  text-sm font-medium
                  shadow-soft
                "
              >
                <MapPin className="w-4 h-4 text-[#8B5E3C]" />
                {dest}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6">
            ¿Listo para organizar tu traslado?
          </h3>

          <Button size="xl" variant="whatsapp" asChild>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Services;
