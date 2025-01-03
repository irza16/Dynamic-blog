import React from 'react';

const About = () => {
  return (
    <div className="p-4 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700">
          Hi! My name is <span className="font-semibold">Irza</span>. I am a front-end developer. I created this blog using <span className="font-semibold">Next.js</span> and <span className="font-semibold">Sanity</span>. I hope you like it.
        </p>
      </div>
    </div>
  );
};

export default About;
