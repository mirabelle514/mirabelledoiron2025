import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <div id="hero" className="pt-24 pb-20 px-6" style={{ backgroundColor: '#242434' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            FULL STACK <span style={{ color: '#991818' }}>ENGINEER</span>
          </h1>
                                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#b9d6e2' }}>
              Specializing in developer tools and data-driven user experiences. 
              Passionate about AI integration and creating intelligent solutions.
            </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="p-3 rounded hover:opacity-80 transition-opacity" style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}>
              Mobile
            </a>
            <a href="#projects" className="p-3 rounded hover:opacity-80 transition-opacity" style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}>
              Portfolio
            </a>
            <a href="mailto:mirabelle.doiron@gmail.com?subject=Portfolio%20Inquiry%20-%20Frontend%20Engineer%20Opportunity" className="p-3 rounded hover:opacity-80 transition-opacity" style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}>
              Email
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded hover:opacity-80 transition-opacity font-medium"
            style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}>
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;