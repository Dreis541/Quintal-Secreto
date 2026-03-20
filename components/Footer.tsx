export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 md:py-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-serif text-2xl font-semibold text-primary">
          Quintal Secreto
        </div>

        <p className="text-on-surface-variant text-sm tracking-wide text-center">
          © {new Date().getFullYear()} Quintal Secreto. Seu refúgio particular.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Termos</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}
