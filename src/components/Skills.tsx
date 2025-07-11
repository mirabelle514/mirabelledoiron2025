import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
}

const Skills = () => {
const skills: SkillGroup[] = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'MDX'], icon: 'Frontend' },
    { category: 'Backend & Data', items: ['SQL', 'Database Design', 'API Development', 'Data Modeling'], icon: 'Backend' },
    { category: 'Developer Tools', items: ['Workflow Optimization', 'Documentation Systems', 'Internal Tooling'], icon: 'Tools' },
    { category: 'Emerging Tech', items: ['iOS Development', 'AI Integration', 'Mobile Platforms'], icon: 'Mobile' }
  ];

  return (
    <div id="skills" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            return (
           <div key={index} className="rounded p-6" style={{ backgroundColor: '#193441', border: '1px solid #b9d6e2' }}>
              <div className="flex items-center mb-4">
                  <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 rounded text-sm font-medium" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;