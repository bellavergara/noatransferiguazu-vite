import whatsappIcon from "@/assets/images/whatsapp.png";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5493757589868?text=Hola%2C%20buenas%20tardes%20%F0%9F%98%8A%20Me%20gustar%C3%ADa%20consultar%20y%20cotizar%20un%20traslado.%20%C2%A1Muchas%20gracias!"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50
                 w-16 h-16 rounded-full overflow-hidden
                 shadow-xl flex items-center justify-center
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:-translate-y-1
                 hover:shadow-[0_0_25px_rgba(37,211,102,0.55)]"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse / titineo */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="relative w-full h-full object-contain scale-125"
      />
    </a>
  );
};

export default WhatsAppFloat;
