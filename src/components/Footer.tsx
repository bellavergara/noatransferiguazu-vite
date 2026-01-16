const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/70">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} NOA Transfer Iguazú. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Puerto Iguazú, Misiones, Argentina 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
