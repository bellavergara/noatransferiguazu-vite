import { useEffect, useRef } from "react";
import { Plane, TreePine, Building2 } from "lucide-react";
import aeropuertoImg from "@/assets/images/aeropuerto.jpg";
import excursionesImg from "@/assets/images/excursiones.jpg";
import cityImg from "@/assets/images/city.jpg";

const services = [
  {
    icon: Plane,
    image: aeropuertoImg,
    title: "Traslados al Aeropuerto",
    description:
      "Conectamos tu llegada y salida desde el Aeropuerto Internacional de Iguazú con puntualidad y confort.",
  },
  {
    icon: TreePine,
    image: excursionesImg,
    title: "Excursiones Turísticas",
    description:
      "Descubrí las maravillas de Iguazú: Cataratas, Minas de Wanda y más, con guías locales expertos y transporte cómodo y seguro.",
  },
  {
    icon: Building2,
    image: cityImg,
    title: "City Tours Personalizados",
    description:
      "Explorá la ciudad a tu ritmo. Experiencias únicas y flexibles, diseñadas según tus horarios y preferencias.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-subtle"
    >
      <div className="container">
        {/* 🟢 MARCO VERDE */}
        <div className="border-2 border-foreground rounded-3xl px-6 py-12 md:px-12 md:py-16">
          
          {/* INTRO */}
          <div className="text-center mb-16 reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block text-[#8B5E3C] text-sm uppercase tracking-widest mb-3 font-medium">
              Nuestros Servicios
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu traslado seguro y cómodo comienza aquí
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              En{" "}
              <span className="font-semibold text-[#8B5E3C]">
                Noa Transfer Iguazú
              </span>{" "}
              nos encargamos de cada detalle para que disfrutes tu viaje desde el
              primer momento, sin preocupaciones.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="reveal opacity-0 translate-y-6 transition-all duration-700
                           bg-card p-8 rounded-xl
                           border-2 border-[#8B5E3C]/40
                           hover:border-[#8B5E3C]
                           hover:shadow-[0_10px_30px_rgba(139,94,60,0.25)]
                           hover:-translate-y-1
                           group"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* ICONO ARRIBA + IMAGEN */}
                <div className="relative mb-8">
                  
                  {/* ICONO OUTLINE */}
                  <div
                    className="absolute -top-6 left-5 z-10
                               w-12 h-12 rounded-xl
                               flex items-center justify-center
                               border-2 border-[#8B5E3C]
                               bg-background/80 backdrop-blur
                               transition-all duration-300
                               group-hover:rotate-6
                               group-hover:scale-110"
                  >
                    <service.icon
                      className="w-5 h-5 text-[#8B5E3C]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* IMAGEN */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
