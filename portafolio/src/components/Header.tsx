import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'knowledge', label: 'Tecnologías' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b-4 border-amber-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex justify-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-6 py-3 text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 ${
                activeSection === item.id
                  ? 'text-amber-900 bg-amber-200 rounded-lg shadow-md'
                  : 'text-amber-800 hover:text-amber-900 hover:bg-amber-100 rounded-lg'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-800 rounded-full"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
