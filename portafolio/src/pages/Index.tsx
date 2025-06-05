import React, { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'knowledge':
        return <Knowledge />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative">
        {renderActiveSection()}
        
        {/* Vintage texture overlay */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grain%22%20width%3D%22100%22%20height%3D%22100%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%20fill%3D%22%23D2B48C%22%20opacity%3D%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22url(%23grain)%22/%3E%3C/svg%3E')] opacity-30 pointer-events-none z-10"></div>
      </main>
    </div>
  );
};

export default Index;
