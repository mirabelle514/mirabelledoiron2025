import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#ffffff' }}>About Me</h2>
        <div className="text-lg space-y-6" style={{ color: '#ffffff' }}>
          <p>
            I'm a Full Stack Engineer with 4 years of experience transforming how teams interact with data and internal tools. 
            My journey at Indeed took me from Email/UX Developer to iOS development, with significant focus on AI integration initiatives.
          </p>
          <p>
            I solve complex technical problems with intuitive user experiences, specializing in building tools that make other developers more productive. 
            My expertise spans the full stack - from React/TypeScript frontends to SQL databases and data processing systems.
          </p>
          <p>
            What drives me is creating leverage for others and improving user experiences, particularly in data management and developer tooling. 
            I thrive in environments with ambiguity and am passionate about learning new technologies to solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;