import { Plane, Building2, TreePine, ShoppingBag, Globe, Camera } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Aeropuerto",
    description: "Traslados desde y hacia el Aeropuerto Internacional de Iguazú. Puntualidad garantizada.",
  },
  {
    icon: Building2,
    title: "Hoteles",
    description: "Servicio de traslado entre hoteles y alojamientos en toda la ciudad.",
  },
  {
    icon: TreePine,
    title: "Parque Nacional",
    description: "Tours al Parque Nacional Iguazú, una de las Maravillas Naturales del Mundo.",
  },
  {
    icon: Globe,
    title: "Foz de Iguazú",
    description: "Excursiones al lado brasileño de las cataratas y atracciones de Foz.",
  },
  {
    icon: ShoppingBag,
    title: "Ciudad del Este",
    description: "Tour de compras a Paraguay con la mejor experiencia y seguridad.",
  },
  {
    icon: Camera,
    title: "Tours Misiones",
    description: "Recorridos por las Ruinas de San Ignacio, Minas de Wanda y más.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos traslados seguros y cómodos por toda la triple frontera. 
            Conoce nuestros destinos más populares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
