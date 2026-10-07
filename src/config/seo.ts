/**
 * ¿Qué cosas se pueden agregar aquí (src/config/)?
 * 
 * Configuraciones globales y constantes centralizadas de la aplicación:
 * 1. Configuración de SEO y metadatos del sitio (siteConfig, SEOProps).
 * 2. Variables de entorno públicas procesadas y validadas con Zod.
 * 3. Configuración de analíticas, scripts de terceros o tags de seguimiento.
 * 4. Ajustes de internacionalización (i18n), idiomas soportados y rutas por defecto.
 * 5. Parámetros de paginación y límites de consultas para Content Collections.
 */

export interface SiteConfig {
  name: string;
  title: string;
  titleTemplate: string;
  description: string;
  url: string;
  author: string;
  locale: string;
  themeColor: string;
  defaultOgImage: string;
  twitter: {
    handle: string;
    site: string;
    cardType: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
  organization: {
    name: string;
    logo: string;
    url: string;
    sameAs: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: 'Arquitectos MX',
  title: 'Arquitectos MX | Despacho de Arquitectura, Diseño & Construcción',
  titleTemplate: '%s | Arquitectos MX',
  description: 'Despacho de arquitectura en Oaxaca de Juárez y todo México. Especialistas en diseño residencial contemporáneo, comercial, interiorismo y supervisión integral de obra.',
  url: 'https://arquitectosmx.com',
  author: 'Arquitectos MX',
  locale: 'es_MX',
  themeColor: '#0d1310',
  defaultOgImage: 'https://picsum.photos/seed/arquitectos-mx-og/1200/630',
  twitter: {
    handle: '@arquitectosmx',
    site: '@arquitectosmx',
    cardType: 'summary_large_image',
  },
  organization: {
    name: 'Arquitectos MX - Despacho de Arquitectura',
    logo: 'https://arquitectosmx.com/assets/images/logotipo.webp',
    url: 'https://arquitectosmx.com',
    sameAs: [
      'https://instagram.com',
      'https://facebook.com',
      'https://linkedin.com',
    ],
  },
};

export interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  canonical?: string | URL;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  keywords?: string[];
  locale?: string;
  themeColor?: string;
  publishDate?: Date | string;
  modifiedDate?: Date | string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
    section?: string;
  };
  schema?: Record<string, any> | Record<string, any>[];
}

export function generateDefaultSchemas(pageUrl: string, seoProps: SEOProps) {
  const schemas: Record<string, any>[] = [];

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: seoProps.description || siteConfig.description,
    inLanguage: seoProps.locale || siteConfig.locale,
  });

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: siteConfig.organization.logo,
    sameAs: siteConfig.organization.sameAs,
  });

  if (seoProps.ogType === 'article' && seoProps.article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: seoProps.title || siteConfig.title,
      description: seoProps.description || siteConfig.description,
      image: seoProps.image ? new URL(seoProps.image, siteConfig.url).toString() : new URL(siteConfig.defaultOgImage, siteConfig.url).toString(),
      datePublished: seoProps.article.publishedTime,
      dateModified: seoProps.article.modifiedTime || seoProps.article.publishedTime,
      author: {
        '@type': 'Person',
        name: seoProps.article.author || seoProps.author || siteConfig.author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.organization.name,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.organization.logo,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    });
  }

  if (seoProps.schema) {
    if (Array.isArray(seoProps.schema)) {
      schemas.push(...seoProps.schema);
    } else {
      schemas.push(seoProps.schema);
    }
  }

  return schemas;
}
