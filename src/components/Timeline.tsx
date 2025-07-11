import React from 'react';

interface TimelineItem {
  year: string;
  company: string;
  role: string;
  skills: string[];
}

const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2015-2016",
      company: "Quantum",
      role: "Email & Web Developer",
      skills: ["HTML/CSS", "Mentoring", "Design", "E-Commerce Innovation"]
    },
    {
      year: "2017-2021",
      company: "AAA",
      role: "Email Developer/Designer",
      skills: ["HTML/CSS", "Salesforce", "AMPscripting", "A/B Testing", "ADA Compliance"]
    },
    {
      year: "2021-2025",
      company: "Indeed",
      role: "Software Engineer/UX Developer",
      skills: ["React", "HTML/CSS", "TypeScript", "JavaScript", "GitLab", "CI/CD", "Markdown", "iOS", "Swift", "AI Integration"]
    }
  ];

  return (
    <div id="timeline" className="py-20 px-6" style={{ backgroundColor: '#193441' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>
          Career <span style={{ color: '#b9d6e2' }}>Timeline</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#b9d6e2' }}></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 rounded-full border-2" style={{ backgroundColor: '#193441', borderColor: '#b9d6e2', transform: 'translateX(-50%)' }}></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="rounded p-6" style={{ backgroundColor: '#193441', border: '1px solid #b9d6e2' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded" style={{ backgroundColor: '#b9d6e2', color: '#193441' }}>
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>{item.company}</h3>
                  </div>
                  
                  <h4 className="text-md font-semibold mb-3" style={{ color: '#b9d6e2' }}>{item.role}</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#242434', color: '#ffffff', border: '1px solid #b9d6e2' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 