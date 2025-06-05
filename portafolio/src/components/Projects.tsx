import React from 'react';

import zapateriaImage from '../assets/zapatería.png';
import calculadoraImage from '../assets/calculadora.png';
import cssImage from '../assets/cssOnly.png';
import memoriaImage from '../assets/Memoria.png';
import chatImage from '../assets/chat.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Chat en javascript",
      image: chatImage,
      url: "https://hb.genserdev.space/JSonly/"
    },
    {
      id: 2,
      name: "Memoria en react", 
      image: memoriaImage,
      url: "https://hb.genserdev.space/Lab6/"
    },
    {
      id: 3,
      name: "Imagen utilzando css",
      image: cssImage,
      url: "https://hb.genserdev.space/cssOnly/"
    },
    {
      id: 4,
      name: "Calculadora en react",
      image: calculadoraImage,
      url: "https://hb.genserdev.space/dist/"
    },
    {
      id: 5,
      name: "Proyecto NutriFit",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
      url: "https://github.com/Hugo2049/MobilesProyectoFinal"
    },
    {
      id: 6,
      name: "Proyecto zapatería Genser",
      image: zapateriaImage,
      url: "https://github.com/JosFer720/GS-Stock-y-Facturacion-Frontend"
    }
    
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-6 tracking-wide">Mis Proyectos</h2>
          <div className="w-32 h-2 bg-amber-800 mx-auto rounded-full"></div>
          <p className="text-xl text-amber-700 mt-6 max-w-2xl mx-auto">
            Colección de proyectos desarrollados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-amber-100 border-4 border-amber-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-rotate-1 max-w-sm"
            >
              
              <div className="bg-amber-800 text-amber-50 px-4 py-2 text-center font-bold tracking-wider">
                Proyecto #{project.id.toString().padStart(2, '0')}
              </div>
              
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 sepia-0 group-hover:sepia-[0.3]"
                  />
                  
                  {/* Vintage overlay effect */}
                  <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-2 border-amber-200 border-b-0 border-r-0 opacity-50"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-2 border-amber-200 border-b-0 border-l-0 opacity-50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-amber-200 border-t-0 border-r-0 opacity-50"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-amber-200 border-t-0 border-l-0 opacity-50"></div>
                </div>
                
                <div className="p-6 bg-amber-50">
                  <h3 className="text-xl font-bold text-amber-900 text-center group-hover:text-amber-700 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <div className="mt-4 flex justify-center">
                    <span className="inline-block bg-amber-800 text-amber-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide group-hover:bg-amber-700 transition-colors duration-300">
                      Ver Proyecto →
                    </span>
                  </div>
                </div>
              </a>
              
              {/* Vintage stamp effect */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-amber-700 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;