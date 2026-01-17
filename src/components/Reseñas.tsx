import resena1 from "@/assets/images/resena1.jpg";
import resena2 from "@/assets/images/resena2.jpg";
import resena3 from "@/assets/images/resena3.jpg";
import resena4 from "@/assets/images/resena4.jpg";
import resena5 from "@/assets/images/resena5.jpg";
import resena6 from "@/assets/images/resenas6.jpg";


const reviews = [
  resena1,
  resena2,
  resena3,
  resena4,
  resena5,
  resena6,
];


const Testimonials = () => {
  return (
    <section id="reseñas" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* HEADER / INFO GOOGLE STYLE */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block text-sm uppercase tracking-widest text-[#8B5E3C] mb-3">
            Reseñas reales
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Noa Transfer Iguazú
          </h2>

          <div className="flex items-center justify-center gap-2 text-lg font-medium mb-2">
            <span className="text-[#8B5E3C]">5,0</span>
            <span>🌟🌟🌟🌟🌟</span>
            <span className="text-muted-foreground text-sm">(239)</span>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Servicio de lanzadera
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Mirá lo que dicen nuestros clientes después de viajar con nosotros.
            Opiniones reales de personas que confiaron en{" "}
            <span className="font-semibold text-[#8B5E3C]">
              Noa Transfer Iguazú
            </span>.
          </p>
        </div>

        {/* GRID DE CAPTURAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-border bg-muted"
            >
              <img
                src={img}
                alt={`Reseña cliente ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
