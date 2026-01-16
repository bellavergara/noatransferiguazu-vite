import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logo from "@/assets/logo/logo-noa.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const whatsappNumber = "5493757589868";
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa consultar por sus servicios de traslados."
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        glass
        transition-all duration-300
        ${!scrolled ? "border-b-4 border-[#8B5E3C]/90" : "border-b-0"}
      `}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Remis Iguazú" className="h-10 w-auto" />
          <span className="font-display text-xl md:text-2xl font-semibold text-primary">
            NOA Transfer Iguazu
          </span>
        </div>

       {/* NAV */}
<nav className="hidden md:flex items-center gap-8">
  {[
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Reseñas", href: "#reseñas" },
    { label: "Contacto", href: "#contacto" },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="relative group text-sm font-medium text-muted-foreground transition-colors"
    >
      <span className="transition-colors duration-300 group-hover:text-[#8B5E3C]">
        {item.label}
      </span>

      <span
        className="
          absolute left-0 -bottom-1
          h-[2px] w-0
          bg-[#8B5E3C]
          transition-all duration-300
          group-hover:w-full
        "
      />
    </a>
  ))}
</nav>


        {/* BOTÓN WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-soft text-sm font-medium"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
