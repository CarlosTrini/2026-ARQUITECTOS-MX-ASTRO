import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proceso', href: '/proceso' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Hamburguer Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 border border-quaternary text-light hover:text-tertiary hover:border-tertiary transition-colors flex items-center justify-center"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-secondary border-l border-quaternary z-50 p-6 flex flex-col justify-between shadow-2xl shadow-dark transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-quaternary/60">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-light">Arquitectos <span className="text-tertiary font-extrabold">MX</span></span>
              <span className="text-[11px] text-light/70 uppercase tracking-wider">Innovación y Diseño</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 border border-quaternary text-light/80 hover:text-tertiary hover:border-tertiary transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex flex-col" aria-label="Móvil">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-baseline gap-4 py-3.5 border-b border-quaternary/40 text-light/90 hover:text-tertiary transition-colors"
              >
                <span className="font-mono text-[11px] text-quinary">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-2xl font-light flex-1">{item.name}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Details */}
        <div className="pt-6 space-y-5">
          <a
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 px-4 bg-tertiary text-dark font-mono text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-3 hover:bg-light transition-colors"
          >
            <span>Cotizar proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="text-xs text-light/70 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-tertiary" />
              <span>+52 5555 5555 55</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-tertiary" />
              <span>arquitectosMx@arquitectos.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-tertiary" />
              <span>Oaxaca de Juárez, Oax.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
