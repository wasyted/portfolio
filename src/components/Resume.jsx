import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <header className="mb-4">
        <div className='flex items-center justify-between gap-4 '>  
          <h1 className="text-3xl font-bold mb-2 text-black">Matías Wasyluk</h1>
          <p className="text-gray-800 text-lg">Web Developer | Programmer</p>
        </div>
        <p className="text-gray-600 text-md">Email: matiasezequielwasyluk@gmail.com</p>
        <p className="text-gray-600 text-md">Phone: +54 011 35628327</p>
        <p className="text-gray-600 text-md">Website: matiaswasyluk.vercel.app</p>
        <p className="text-gray-600 text-md">Location: Buenos Aires, Argentina</p>
      </header>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li className="text-gray-600">Proficient in HTML5, CSS3, and JavaScript (ES6+)</li>
          <li className="text-gray-600">Experienced with React.js, Next.js, and Tailwind CSS</li>
          <li className="text-gray-600">Skilled in Node.js, Express.js, and RESTful APIs</li>
          <li className="text-gray-600">Familiar with MongoDB, MySQL, and database management</li>
          <li className="text-gray-600">Knowledgeable in Git, GitHub, and version control</li>
          <li className="text-gray-600">Strong understanding of responsive web design and UI/UX principles</li>
          <li className="text-gray-600">Familiarized with object-oriented programming and C#</li>
          <li className="text-gray-600">Experienced in deploying web applications using various platforms</li>
        </ul>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Languages</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">English</p>
          <p className="text-gray-600">Advanced - Fluent</p>
        </div>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Spanish</p>
          <p className="text-gray-600">Native</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Education</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Ingeniería en informática</p>
          <p className="text-gray-600">Expected Graduation: 2027 | Universidad Arturo Jauretche</p>
        </div>
        <div className='text-sm mt-3'>
          <p className="font-semibold text-gray-800">Fullstack Web Developer Certification</p>
          <p className="text-gray-600">Completion Date: December 2023 | The Odin Project</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Experience</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Freelance Web Developer</p>
          <p className="text-gray-600">Since 2022</p>
          <p className="text-gray-600">Successfully delivered web solutions for clients, including a landing page for <span><a href="http://instagram.com/somos_huryn">@somos_huryn</a></span> to showcase their services and an e-commerce site for <span><a href="http://instagram.com/lalo.amasa">@lalo.amasa</a></span>, enabling order handling via WhatsApp integration.</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold text-black text-end mt-3">Projects</h2>
        <div className='text-sm mt-3'>
          <p className="font-semibold text-gray-800">HurynWeb <span className='text-gray-500'>- Landing page</span></p>
          <p className="text-gray-600">Designed and developed a professional landing page for <span><a href="http://instagram.com/somos_huryn">@somos_huryn</a></span> using HTML, CSS, and JavaScript, deployed on GitHub Pages.</p>
          <p className="text-gray-600">GitHub Repository: <a href="https://github.com/wasyted/hurynWeb">https://github.com/wasyted/hurynWeb</a></p>
          <p className="text-gray-600">Live Demo: <a href="https://wasyted.github.io/hurynWeb">https://wasyted.github.io/hurynWeb</a></p>
        </div>
        <div className='text-sm mt-3'>
          <p className="font-semibold text-gray-800">laloamasa <span className='text-gray-500'>- e-commerce</span></p>
          <p className="text-gray-600">Developed an e-commerce platform for <span><a href="http://instagram.com/lalo.amasa">@lalo.amasa</a></span> using React, SASS, and fetchAPI, enabling seamless order processing via WhatsApp, deployed on Google Firebase.</p>
          <p className="text-gray-600">GitHub Repository: <a href="https://github.com/wasyted/laloamasa">https://github.com/wasyted/laloamasa</a></p>
          <p className="text-gray-600">Live Demo: <a href="https://laloamasa.web.app">https://laloamasa.web.app</a></p>
        </div>
        <div className='text-sm mt-3'>
          <p className="font-semibold text-gray-800">noteblndr <span className='text-gray-500'>- Social Network</span></p>
          <p className="text-gray-600">Built a full-stack social network prototype featuring user and post interactions using ExpressJS, MongoDB, EJS, and Tailwind CSS, deployed on Railway.</p>
          <p className="text-gray-600">GitHub Repository: <a href="https://github.com/wasyted/auth-test-app">https://github.com/wasyted/auth-test-app</a></p>
          <p className="text-gray-600">Live Demo: <a href="https://noteblndr.up.railway.app">https://noteblndr.up.railway.app</a></p>
        </div>
      </section>
    </div>
  );
};

export default Resume;