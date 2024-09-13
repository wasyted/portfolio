import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <header className="mb-4">
        <div className='flex items-center justify-between gap-4 mb-3'>
          <h1 className="text-3xl font-bold mb-2 text-black">Matías Wasyluk</h1>
          <p className="text-gray-800 text-md">Fullstack Developer | Informatics Engineering student</p>
        </div>
        <p className="text-gray-600 text-md">Buenos Aires, Argentina</p>
        <p className="text-gray-600 text-md">matiasezequielwasyluk@gmail.com</p>
        <p className="text-gray-600 text-md">+54 011 35628327</p>
        <p className="text-gray-600 text-md">Portfolio: matiaswasyluk.vercel.app</p>
        <p className="text-gray-600 text-md">Linkedin: <a href='https://www.linkedin.com/in/matiaswasyluk/'>linkedin.com/in/matiaswasyluk</a></p>
      </header>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black mb-3">Perfil profesional</h2>
          <p className="text-gray-600">Informatics engineering student with a solid base in web developement and experience on self-managed projects. General understanding of programming and informatics concepts, with focus on good practices and interface design.<br /> Looking to expand knowledge in the web dev. area, applying effective communication, teamwork and problem-solving capabilites.</p>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black mb-3">Habilidades</h2>
        <ul className="list-disc list-inside text-sm">
          <li className="text-gray-600 mb-1">Soft skills: self-starter, proactive, team worker, communicative y receptive to learning and sharing good working practices.</li>
          <li className="text-gray-600 mb-1">Basis at QA: Software testing and debugging concepts, quality assurance methods.</li>
          <li className="text-gray-600 mb-1">Proficient in HTML5, CSS3 and JavaScript (ES6+)</li>
          <li className="text-gray-600 mb-1">Frontend experience with React.js, Next.js and Tailwind CSS</li>
          <li className="text-gray-600 mb-1">Backend knowledge with Node.js, Express.js and APIs RESTful</li>
          <li className="text-gray-600 mb-1">Familiarized with MongoDB, MySQL and database management.</li>
          <li className="text-gray-600 mb-1">Using Git, GitHub and version control.</li>
          <li className="text-gray-600 mb-1">Solid basis in web design and UI/UX principles.</li>
        </ul>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Education</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Ingeniería en informática</p>
          <p className="text-gray-600">Expected graduation: 2027 | Universidad Arturo Jauretche</p>
        </div>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">Fullstack Web Developement Certification</p>
          <p className="text-gray-600">Date of certification: december 2023 | The Odin Project</p>
        </div>
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
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Work experience</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Freelance web developement</p>
          <p className="text-gray-600">Since 2022</p>
          <p className="text-gray-600">Successfully developed and implemented web solutions for several clients, including a landing page for a window tint company, an ecommerce for a homemade bakery shop and a portfolio website for a filmmaker.</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold text-black text-end mt-3">Proyectos</h2>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">HurynWeb <span className='text-gray-500'>- Landing Page</span></p>
          <p className="text-gray-600">Designed and developed a landing-page for <span><a href="http://instagram.com/somos_huryn">@somos_huryn</a></span> using exclusively vanilla HTML, CSS and JavaScript, implemented and hosted with GitHub Pages.</p>
          <p className="text-gray-600">Repo: <a href="https://github.com/wasyted/hurynWeb">https://github.com/wasyted/hurynWeb</a></p>
          <p className="text-gray-600">Live demo: <a href="https://wasyted.github.io/hurynWeb">https://wasyted.github.io/hurynWeb</a></p>
        </div>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">noteblndr <span className='text-gray-500'>- Social network</span></p>
          <p className="text-gray-600">Full-stack social network prototype with user interaction through posts using ExpressJS, MongoDB, EJS y Tailwind CSS, implemented at Railway hosting.</p>
          <p className="text-gray-600">Repo: <a href="https://github.com/wasyted/auth-test-app">https://github.com/wasyted/auth-test-app</a></p>
          <p className="text-gray-600">Live demo: <a href="https://noteblndr.up.railway.app">https://noteblndr.up.railway.app</a></p>
        </div>
      </section>
    </div>
  );
};

export default Resume;