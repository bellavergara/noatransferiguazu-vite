import { Star, Quote, User } from "lucide-react";

import fotoMaria from "@/assets/testimonios/logo-noa.png";
// import fotoCarlos from "@/assets/testimonios/carlos.jpg";


const testimonials = [
  {
    name: "Mariano Saenz",
    photo: fotoMaria,
    rating: 5,
    text: "Mejor imposible el servicio y cordialidad de Cristian. Lo usaría otra vez sin ninguna duda. Super recomendable.",
  },
  {
    name: "Catalina Puppo",
    photo: undefined as string | undefined,
    rating: 5,
    text: "Excelente servicio, muy copado Cristian",
  },
  {
    name: "Zoe Ferreira",
    photo: fotoMaria,
    rating: 5,
    text: "Excelente servicio, super atento y amable. Impecable todo 100% recomendable.",
  },
  {
    name: "Lucas Villalba",
    photo: fotoMaria,
    rating: 5,
    text: "Excelente servicio! Buen precio, atento, puntual. Recomendable!",
  },
  {
    name: "Jubert Quiao",
    photo: fotoMaria,
    rating: 5,
    text: "excelente atención, super amables, en mi experiencia fui con 2 personas con movilidad reducidas y cristian un genio, super atento y solo palabras de agradecimiento porque hizo nuestro viaje más ameno, nos consiguió transporte para volver de foz de iguazú rápido evitando las filas de la aduana, y siempre a disposición ya sea para viajes o aclarar dudas turísticas, como guía de compras en ciudad del este.10/10",
  },
  {
    name: "Karla Vivar",
    photo: fotoMaria,
    rating: 5,
    text: "Excelente servicio, amabilidad y puntualidad.",
  },
  {
    name: "Giorgia Gaviglio",
    photo: fotoMaria,
    rating: 5,
    text: "Servicio excelente! Nuestro conductor Cristian fue siempre muy amable y siempre estuvo dispuesto a ayudarnos con cualquier necesidad.",
  },
];

const Testimonials = () => {
  return (
    <section id="Reseñas" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reseñas reales de turistas que confiaron en nuestro servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card p-8 rounded-xl shadow-soft border border-border/50"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  {testimonial.photo ? (
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
