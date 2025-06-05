import React from 'react';

import pythonImage from '../assets/python.jpg';
import javascriptImage from '../assets/javascript.jpg';
import dockerImage from '../assets/docker.png';
import postgresImage from '../assets/postgres.png';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import gitImage from '../assets/git.png';
import kotlinImage from '../assets/kotlin.png';


const Knowledge: React.FC = () => {
  const skills = [
    {
      name: "Python",
      image: pythonImage
    },
    {
      name: "JavaScript", 
      image: javascriptImage
    },
    {
      name: "Docker",
      image: dockerImage
    },
    {
      name: "PostgreSQL",
      image: postgresImage
    },
    {
      name: "HTML",
      image: htmlImage
    },
    {
      name: "CSS",
      image: cssImage
    },
    {
      name: "Git",
      image: gitImage
    },
    {
      name: "Kotlin",
      image: kotlinImage
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-900 mb-6 tracking-wide">Conocimiento en Tecnologías</h2>
          <div className="w-32 h-2 bg-amber-800 mx-auto rounded-full"></div>
          <p className="text-xl text-amber-700 mt-6 max-w-2xl mx-auto">
            Tecnologías que he utilizado en los proyectos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-amber-100 border-4 border-amber-800 rounded-lg p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:rotate-3 w-full max-w-[200px]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Vintage label-style header */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-800 text-amber-50 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                SKILL
              </div>
              
              <div className="text-center">
                <div className="relative mb-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto rounded-full border-3 border-amber-700 object-cover group-hover:sepia-[0.3] transition-all duration-300"
                  />
                  
                  {/* Vintage corner accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-2 border-amber-700 border-b-0 border-r-0"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-amber-700 border-b-0 border-l-0"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-2 border-amber-700 border-t-0 border-r-0"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-2 border-amber-700 border-t-0 border-l-0"></div>
                </div>
                
                <h3 className="text-lg font-bold text-amber-900 group-hover:text-amber-700 transition-colors duration-300 tracking-wide">
                  {skill.name}
                </h3>
                
                {/* Vintage stamp effect */}
                <div className="mt-3 flex justify-center">
                  <div className="w-6 h-1 bg-amber-800 rounded-full group-hover:w-8 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Background texture effect */}
              <div className="absolute inset-0 bg-amber-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-amber-800 text-amber-50 px-8 py-3 rounded-lg font-bold tracking-wider shadow-lg">
                                                                 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
