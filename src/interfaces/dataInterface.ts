export interface Project {
    id: string;
    title: string;
    category: 'Residencial' | 'Comercial' | 'Interiorismo' | 'Restauración';
    location: string;
    year: string;
    area: string;
    image: string;
    gallery: string[];
    summary: string;
    details: string;
    highlights: string[];
}