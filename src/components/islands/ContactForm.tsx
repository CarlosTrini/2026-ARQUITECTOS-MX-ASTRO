import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Sparkles, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoProyecto: 'Diseño Residencial (Casa Habitación)',
    presupuesto: '$100,000 MXN - $300,000 MXN',
    ubicacion: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // simular envio backend + reCAPTCHA v3 verification
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div className="w-full bg-secondary/80 border border-primary/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md">
      {status === 'success' ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-tertiary/20 border-2 border-tertiary text-tertiary flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-light">¡Mensaje Recibido con Éxito!</h3>
          <p className="text-sm text-light/80 max-w-md mx-auto leading-relaxed">
            Gracias por contactar a <strong className="text-tertiary">Arquitectos MX</strong>. Un arquitecto especialista de nuestro equipo revisará los requerimientos de tu proyecto y se comunicará contigo en menos de 24 horas.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  nombre: '',
                  email: '',
                  telefono: '',
                  tipoProyecto: 'Diseño Residencial (Casa Habitación)',
                  presupuesto: '$1,000,000 MXN - $3,000,000 MXN',
                  ubicacion: 'Oaxaca de Juárez / Valles Centrales',
                  mensaje: '',
                });
              }}
              className="px-6 py-2.5 rounded-full bg-primary/50 border border-primary text-light text-sm font-semibold hover:bg-primary transition-colors"
            >
              Enviar otro mensaje
            </button>
            <a
              href={`https://wa.me/525555555555?text=Hola%20Arquitectos%20MX,%20acabo%20de%20enviar%20un%20formulario%20y%20me%20gustar%C3%ADa%20atenci%C3%B3n%20inmediata.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-whatsapp text-white text-sm font-bold hover:bg-whatsapp-dark transition-colors flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
            >
              <Phone className="w-4 h-4" />
              Contactar por WhatsApp Directo
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-tertiary uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Cotización & Asesoría Arquitectónica
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-light">
              Cuéntanos sobre tu próximo proyecto
            </h3>
            <p className="text-xs sm:text-sm text-light/70">
              Completa los datos para asignarte al director de proyecto adecuado y preparar una propuesta personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Nombre */}
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-xs font-semibold text-light/90">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Arq. Rodrigo Méndez"
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary placeholder:text-light/40 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-light/90">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rodrigo@ejemplo.com"
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary placeholder:text-light/40 transition-all"
              />
            </div>

            {/* Teléfono */}
            <div className="space-y-1.5">
              <label htmlFor="telefono" className="text-xs font-semibold text-light/90">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+52 951 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary placeholder:text-light/40 transition-all"
              />
            </div>

            {/* Tipo de Proyecto */}
            <div className="space-y-1.5">
              <label htmlFor="tipoProyecto" className="text-xs font-semibold text-light/90">
                Tipo de proyecto *
              </label>
              <select
                id="tipoProyecto"
                name="tipoProyecto"
                value={formData.tipoProyecto}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
              >
                <option value="Diseño Residencial (Casa Habitación)">Diseño Residencial (Casa Habitación)</option>
                <option value="Arquitectura Comercial / Restaurante / Hotel">Arquitectura Comercial / Restaurante / Hotel</option>
                <option value="Remodelación & Interiorismo Integral">Remodelación & Interiorismo Integral</option>
                <option value="Proyecto Ejecutivo & Trámite de Licencias">Proyecto Ejecutivo & Trámite de Licencias</option>
                <option value="Construcción & Gerencia de Obra">Construcción & Gerencia de Obra</option>
                <option value="Restauración Patrimonial (INAH)">Restauración Patrimonial (INAH)</option>
              </select>
            </div>

            {/* Presupuesto estimado */}
            <div className="space-y-1.5">
              <label htmlFor="presupuesto" className="text-xs font-semibold text-light/90">
                Presupuesto estimado de inversión
              </label>
              <select
                id="presupuesto"
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
              >
                <option value="Menos de $300,000 MXN">Menos de $300,000 MXN</option>
                <option value="$300,000 MXN - $600,000 MXN">$300,000 MXN - $600,000 MXN</option>
                <option value="$600,000 MXN - $1,200,000 MXN">$600,000 MXN - $1,200,000 MXN</option>
                <option value="Más de $1,200,000 MXN">Más de $1,200,000 MXN</option>
                <option value="Por definir en conjunto con el despacho">Por definir en conjunto con el despacho</option>
              </select>
            </div>

            {/* Ubicación del predio */}
            <div className="space-y-1.5">
              <label htmlFor="ubicacion" className="text-xs font-semibold text-light/90">
                Ubicación del predio o inmueble
              </label>
              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleChange}
                placeholder="Ej. Oaxaca Centro, Huatulco, CDMX..."
                className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary placeholder:text-light/40 transition-all"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="space-y-1.5">
            <label htmlFor="mensaje" className="text-xs font-semibold text-light/90">
              Detalles adicionales o requerimientos clave *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos brevemente si ya cuentas con terreno, número de recámaras, metros cuadrados deseados o estilo arquitectónico preferido..."
              className="w-full px-4 py-3 rounded-xl bg-dark/60 border border-primary/50 text-light text-sm focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary placeholder:text-light/40 transition-all resize-none"
            ></textarea>
          </div>

          {/* reCAPTCHA v3 simulation badge + Submit button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-light/60">
              <ShieldCheck className="w-4 h-4 text-tertiary shrink-0" />
              <span>Protegido por reCAPTCHA v3 & Privacidad garantizada</span>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3 rounded-lg animate-pulse bg-tertiary text-dark font-bold text-sm hover:bg-quinary transition-all duration-300 shadow-lg shadow-tertiary/25 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Enviando solicitud...</span>
                </>
              ) : (
                <>
                  <span>Enviar Consulta de Proyecto</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
