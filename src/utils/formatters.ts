/**
 * ¿Qué cosas se pueden agregar aquí (src/utils/)?
 * 
 * Funciones de utilidad puras, reutilizables y sin efectos secundarios:
 * 1. Formateadores de fecha y hora localizados usando Intl.DateTimeFormat (ej: formatDate).
 * 2. Formateadores numéricos y de moneda (ej: formatCurrency).
 * 3. Manipulación de texto y cadenas: generadores de slugs (slugify), truncado de texto, cálculo de tiempo de lectura (readingTime).
 * 4. Helpers de colecciones: ordenamiento, filtrado y agrupación por categorías/tags.
 * 5. Validadores de formato (email, teléfono, URLs) y sanitizadores de texto.
 */

/**
 * Formatea una fecha a formato legible localizado en español
 */
export function formatDate(date: Date | string, locale: string = 'es-ES'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Formatea un valor numérico como moneda
 */
export function formatCurrency(amount: number, currency: string = 'MXN', locale: string = 'es-MX'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Convierte un título en un slug amigable para URLs
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
