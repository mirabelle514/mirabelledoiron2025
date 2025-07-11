import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6" style={{backgroundColor: '#242434'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {/* Indeed Experience */}
          <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#193441', border: '1px solid #b9d6e2'}}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineer / UX Developer</h3>
                <p className="font-medium" style={{color: '#b9d6e2'}}>Indeed</p>
              </div>
              <span className="font-medium" style={{color: '#ffffff'}}>July 2021 - July 2025 • 4 years</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2" style={{color: '#ffffff'}}>Email/UX Development (First 3.5+ years)</h4>
                <ul className="space-y-2" style={{color: '#ffffff'}}>
                  <li>• Developed and maintained email templates and user experience interfaces using React and Velocity templating</li>
                  <li>• Built responsive frontend components with HTML, CSS, JavaScript, and MDX</li>
                  <li>• Implemented frontend development workflows and toolchain optimizations</li>
                  <li>• Collaborated on user interface design and user experience optimization initiatives</li>
                  <li>• Actively contributed to user education initiatives by creating documentation and guidance on product features, while fostering strong team collaboration and serving as a reliable team player across cross-functional projects</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2" style={{color: '#ffffff'}}>iOS Mobile Development (Last 3 months)</h4>
                <ul className="space-y-2" style={{color: '#ffffff'}}>
                  <li>• Transitioned to iOS mobile application development, working on native mobile experiences</li>
                  <li>• Currently pursuing Apple certification to advance mobile development expertise</li>
                  <li>• Applied frontend development knowledge to mobile platform development</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2" style={{color: '#ffffff'}}>AI Integration Initiatives (Fall 2024 - Present)</h4>
                <ul className="space-y-2" style={{color: '#ffffff'}}>
                  <li>• Participated in Claude Pilot program, gaining hands-on experience with AI implementations</li>
                  <li>• Integrated AI-powered features into applications and user interfaces</li>
                  <li>• Engaged in continuous learning opportunities focused on AI technologies and applications</li>
                  <li>• Contributed to AI-driven development initiatives across multiple projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AAA Experience */}
          <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#193441', border: '1px solid #b9d6e2'}}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Email Developer / Designer</h3>
                <p className="font-medium" style={{color: '#b9d6e2'}}>AAA</p>
              </div>
              <span className="font-medium" style={{color: '#ffffff'}}>April 2017 - July 2021 • 4+ years</span>
            </div>
            
            <div className="space-y-4">
              <ul className="space-y-2" style={{color: '#ffffff'}}>
                <li>• Designed and coded HTML emails using CSS, CSS3, HTML and HTML5 for all Marketing Products</li>
                <li>• Implemented A/B tests to optimize email performance and user engagement</li>
                <li>• Ensured ADA compliance in all email designs and implementations</li>
                <li>• Utilized Adobe Photoshop for email design and asset creation</li>
                <li>• Created best-practices standards and documentation for team use</li>
                <li>• Managed workload to ensure timely delivery of marketing assets</li>
                <li>• Collaborated with marketing teams to develop effective email campaigns</li>
              </ul>
            </div>
          </div>

          {/* Quantum Experience */}
          <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#193441', border: '1px solid #b9d6e2'}}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Email & Web Developer & Designer</h3>
                <p className="font-medium" style={{color: '#b9d6e2'}}>Quantum</p>
              </div>
              <span className="font-medium" style={{color: '#ffffff'}}>November 2015 - December 2016 • 1+ year</span>
            </div>
            
            <div className="space-y-4">
              <ul className="space-y-2" style={{color: '#ffffff'}}>
                <li>• Acted as mentor for Junior Developers, providing guidance and technical support</li>
                <li>• Collaborated with creative team to push boundaries on innovative email designs</li>
                <li>• Assisted in developing strategy and tactics for optimal email marketing programs</li>
                <li>• Provided recommendations to improve email development processes and quality</li>
                <li>• Managed and created HTML templates for Marketing team use</li>
                <li>• Oversaw complete email processes: setup, testing, QA, live previews, and deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;