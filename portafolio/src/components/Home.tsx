import React from 'react';

import hbImage from '../assets/achebe.jpg';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="border-4 border-amber-800 bg-amber-100 p-8 rounded-lg shadow-2xl relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-800 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-800 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-800 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-amber-800 rounded-full"></div>
              
              <h1 className="text-5xl font-bold text-amber-900 mb-6 text-center tracking-wide">
                Bienvenido a mi portafolio
              </h1>
              
              <div className="space-y-6 text-amber-800">
                <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-300">
                  <h2 className="text-2xl font-bold mb-4 text-amber-900">Sobre mí</h2>
                  <p className="text-lg leading-relaxed">
                    Soy Hugo Barillas, estudiante de Ciencias de la Computación en mi tercer año de carrera, me gusta el desarrollo de software, para 
                    proyectos de la universidad he trabajado con diversas herramientas y lenguajes como Java, Python, Kotlin, PostgreSQL, Git, CSS, HTML,
                     JavaScript y Docker
                  </p>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-300">
                  <h3 className="text-xl font-bold mb-3 text-amber-900">Intereses</h3>
                  <p className="text-lg leading-relaxed">
                    Me interesa el campo de la ciberseguridad, donde busco especializarme a futuro. Mi curiosidad 
                    por la ciberseguridad, en parte, gracias a series como Mr. Robot,  
                    Desde entonces, he querido aprender más sobre protección de datos, vulnerabilidades y pentesting
                  </p>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-300">
                  <h3 className="text-xl font-bold mb-3 text-amber-900">Estudios</h3>
                  <p className="text-lg leading-relaxed">
                    Universidad del Valle de Guatemala, Ingeniería en Ciencias de la Computación y Tecnologías de la Información
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-amber-200 border-8 border-amber-800 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <div className="w-80 h-96 bg-amber-200 border-8 border-amber-800 rounded-lg shadow-2xl overflow-hidden">
                    <img
                      src={hbImage}
                      alt="Foto personal"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </div>
              
              {/* Vintage corner decorations */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-amber-800 border-b-0 border-r-0"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-4 border-amber-800 border-b-0 border-l-0"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-4 border-amber-800 border-t-0 border-r-0"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-4 border-amber-800 border-t-0 border-l-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
