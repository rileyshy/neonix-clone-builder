
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileArchive, FileImage, FileAudio } from 'lucide-react';

const resources = [
  {
    name: "GFX Design Pack",
    description: "Professional templates for logos, banners, and graphics",
    icon: <FileImage className="text-neon-purple" size={32} />,
    size: "156 MB",
    format: "ZIP"
  },
  {
    name: "Chain Pack Templates",
    description: "Premium templates to create your own custom chains",
    icon: <FileArchive className="text-neon-blue" size={32} />,
    size: "89 MB",
    format: "RAR"
  },
  {
    name: "Sound Effects Pack",
    description: "High-quality audio effects for content creation",
    icon: <FileAudio className="text-neon-cyan" size={32} />,
    size: "45 MB",
    format: "ZIP"
  }
];

const DownloadSection = () => {
  return (
    <section id="downloads" className="py-20 bg-neon-darker relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-neon-cyan/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full"></div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free <span className="neon-text-cyan">Downloads</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get started with our free resources and templates
          </p>
        </div>
        
        {/* Downloads grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <div key={index} className="glass-card p-6 hover-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-neon-darkgray/80 rounded-lg flex items-center justify-center mr-4">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{resource.name}</h3>
                  <p className="text-sm text-gray-400">
                    {resource.size} • {resource.format}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {resource.description}
              </p>
              
              <Button className="neon-button w-full flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Download Now
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Join our Discord for even more free resources and premium content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
