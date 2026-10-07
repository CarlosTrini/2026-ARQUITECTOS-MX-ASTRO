import { useEffect, useState } from 'react';
import { Layers, MapPin, Maximize2, X, ArrowUpRight } from 'lucide-react';
import { categories } from '../../content/dataStatic/data';
import type { Project } from '../../interfaces/dataInterface';
import ImageGrid from './ImageGrid';



export default function ProjectGallery({ initialCategory = 'Todos', projects = [] }: { initialCategory?: string, projects?: unknown[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<any[]>(projects || []); //TODO: ARREGLAR EL ANY TEMPORAL...

  useEffect(() => {
    setFilteredProjects(() => {
      return selectedCategory == 'Todos' ? projects : projects.filter((p: any) => p.category === selectedCategory)
    })
  }, [projects, selectedCategory])

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };



  return (
    <div className="w-full space-y-8">
      {/* Category Filter Pills */}
      <div className=" flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-sm text-xs sm:text-sm  transition-all duration-300 ${isSelected
                ? 'bg-tertiary text-dark shadow-md shadow-tertiary/25 scale-105 font-bold'
                : 'bg-secondary/80 text-light/80 border border-primary/40 hover:text-tertiary hover:border-tertiary/60 font-semibold'
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="group relative bg-secondary/50  overflow-hidden border border-primary/40 hover:border-tertiary/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer flex flex-col"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-dark">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-dark/80 backdrop-blur-md text-tertiary border border-tertiary/30">
                {project.category}
              </span>

              {/* Quick View Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark/80 backdrop-blur-md text-light flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4 text-tertiary" />
              </div>

              {/* Meta tags overlay at bottom of image */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-light/90 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-tertiary" />
                  {project.location.split(',')[0]}
                </span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-tertiary" />
                  {project.area}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold text-light group-hover:text-tertiary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-tertiary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs sm:text-sm text-light/70 mt-1.5 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-primary/30 flex items-center justify-between text-xs text-light/60">
                <span>Año: <strong className="text-light font-semibold">{project.year}</strong></span>
                <span className="text-tertiary font-bold group-hover:underline">Ver ficha técnica →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 ">
          <div
            className="fixed inset-0 bg-dark/85 backdrop-blur-md transition-opacity"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-5xl md:max-w-[95%]   lg:max-w-250 max-h-[90vh] overflow-y-hidden bg-secondary border border-primary/60 rounded-2xl z-10 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 bg-secondary/95 backdrop-blur-md px-6 py-4 border-b border-primary/40 flex items-center justify-between z-20">
              <div>
                <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
                  {activeProject.category} • {activeProject.year}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-light">{activeProject.title}</h2>
                <p className='mt-2 text-light/50 text-sm '>{activeProject.summary}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-primary/40 hover:bg-tertiary hover:text-dark text-light transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 ">
              {/* Main Image & Mini Gallery Selector */}
              <ImageGrid images={[...activeProject.gallery, activeProject.image]}
                classContainer='max-h-100 flex-col flex-col-reverse md:flex-row'
                classThumbsContainer='md:flex-col'
              />

              {/* Specs Bar */}
              <div className="grid grid-cols-1 md:grid-cols-2  gap-3 p-3 rounded-xl bg-primary/30  border border-primary/40 text-center">
                <div>
                  <span className="text-xs text-light/60 block">Ubicación</span>
                  <span className="text-sm font-bold text-light">{activeProject.location}</span>
                </div>
                <div>
                  <span className="text-xs text-light/60 block">Superficie</span>
                  <span className="text-sm font-bold text-tertiary">{activeProject.area}</span>
                </div>
                {/* <div>
                  <span className="text-xs text-light/60 block">Año de Entrega</span>
                  <span className="text-sm font-bold text-light">{activeProject.year}</span>
                </div>
                <div>
                  <span className="text-xs text-light/60 block">Tipología</span>
                  <span className="text-sm font-bold text-light">{activeProject.category}</span> 
                </div>*/}
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-primary/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a href='/contacto' className="text-xs text-light/70 text-center sm:text-left hover:scale-102 transition-transform cursor-pointer">
                  ¿Te interesa un proyecto con características similares? <span className='text-tertiary font-bold underline'> Contáctanos</span>
                </a>
                <a
                  href={`/proyectos/${activeProject.id}`}
                  // onClick={closeModal}
                  className="animate-pulse hover:animate-none flex items-center gap-2 px-6 py-2.5 rounded-full bg-tertiary text-dark font-bold text-sm hover:bg-quinary transition-colors shadow-lg shadow-tertiary/20"
                >
                  Más sobre este proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
