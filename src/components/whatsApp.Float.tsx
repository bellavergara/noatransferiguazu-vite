import whatsappIcon from "@/assets/images/whatsapp.png";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5493757589868"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 w-16 h-16 rounded-full overflow-hidden
                 shadow-xl flex items-center justify-center
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:-translate-y-1
                 hover:shadow-[0_0_25px_rgba(37,211,102,0.55)]"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full object-contain scale-125"
      />
    </a>
  );
};

export default WhatsAppFloat;
