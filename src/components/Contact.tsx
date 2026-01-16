import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5493757589868";
  const whatsappMessage = encodeURIComponent("Hola! Me gustaría hacer una consulta sobre sus servicios de transporte.");
  const instagramHandle = "remisiguazu";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu próximo viaje?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto">
              Contáctanos por WhatsApp para reservar tu traslado o solicitar información sobre nuestros servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ubicación</h3>
                <p className="text-sm text-primary-foreground/70">
                  Puerto Iguazú, Misiones
                  <br />Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horario</h3>
                <p className="text-sm text-primary-foreground/70">
                  Disponible las 24 horas
                  <br />todos los días
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Contacto</h3>
                <p className="text-sm text-primary-foreground/70">
                  WhatsApp disponible
                  <br />Respuesta inmediata
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                Seguinos en Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
