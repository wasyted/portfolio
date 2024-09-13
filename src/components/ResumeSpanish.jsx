import React from 'react';

const ResumeSpanish = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <header className="mb-4">
        <div className='flex items-center justify-between gap-4 mb-3'>
          <h1 className="text-3xl font-bold mb-2 text-black">Matías Wasyluk</h1>
          <p className="text-gray-800 text-md">Desarrollador Web | Estudiante de Ingeniería Informática</p>
        </div>
        <p className="text-gray-600 text-md">Buenos Aires, Argentina</p>
        <p className="text-gray-600 text-md">matiasezequielwasyluk@gmail.com</p>
        <p className="text-gray-600 text-md">+54 011 35628327</p>
        <p className="text-gray-600 text-md">Sitio web: matiaswasyluk.vercel.app</p>
        <p className="text-gray-600 text-md">Linkedin: <a href='https://www.linkedin.com/in/matiaswasyluk/'>linkedin.com/in/matiaswasyluk</a></p>
      </header>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black mb-3">Perfil profesional</h2>
          <p className="text-gray-600">Estudiante de Ingeniería en Informática con una sólida base en desarrollo web y experiencia en proyectos de programación. Posee conocimientos generales de informática y programación, con un enfoque en buenas practicas de programación y diseño de interfaces.<br /> Busca expandir su experiencia en el área de desarrollo web, aplicando habilidades de comunicación efectiva, trabajo en equipo y capacidad de análisis y resolución de problematicas.</p>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black mb-3">Habilidades</h2>
        <ul className="list-disc list-inside text-sm">
          <li className="text-gray-600 mb-1">Habilidades blandas: self-starter, proactividad, trabajo en equipo, predispuesto, comunicativo y receptivo a aprender.</li>
          <li className="text-gray-600 mb-1">Conocimientos básicos de QA: concepto de pruebas de software, debugging y metodologías de calidad</li>
          <li className="text-gray-600 mb-1">Proficiente en HTML5, CSS3 y JavaScript (ES6+)</li>
          <li className="text-gray-600 mb-1">Experiencia Frontend con React.js, Next.js y Tailwind CSS</li>
          <li className="text-gray-600 mb-1">Conocimientos Backend en Node.js, Express.js y APIs RESTful</li>
          <li className="text-gray-600 mb-1">Familiarizado con MongoDB, MySQL y gestión de bases de datos</li>
          <li className="text-gray-600 mb-1">Conocimientos de Git, GitHub y control de versiones</li>
          <li className="text-gray-600 mb-1">Entendimiento sólido de diseño web receptivo y principios de UI/UX</li>
        </ul>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Educación</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Ingeniería en informática</p>
          <p className="text-gray-600">Graduación esperada: 2027 | Universidad Arturo Jauretche</p>
        </div>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">Certificación de Desarrollador Web Fullstack</p>
          <p className="text-gray-600">Fecha de finalización: diciembre de 2023 | The Odin Project</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Idiomas</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Inglés</p>
          <p className="text-gray-600">Avanzado - Fluído</p>
        </div>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Español</p>
          <p className="text-gray-600">Nativo</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Experiencia</h2>
        <div className='text-sm'>
          <p className="font-semibold text-gray-800">Desarrollador Web Freelance</p>
          <p className="text-gray-600">Desde 2022</p>
          <p className="text-gray-600">Entregué exitosamente soluciones web para clientes, incluyendo una landing-page para @Huryn la cual expone sus servicios ademas de un e-commerce para @laloamasa, permitiendo el procesamiento de pedidos a través de WhatsApp.</p>
        </div>
      </section>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold text-black text-end mt-3">Proyectos</h2>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">HurynWeb <span className='text-gray-500'>- Landing Page</span></p>
          <p className="text-gray-600">Diseñé y desarrollé una landing page profesional para <span><a href="http://instagram.com/somos_huryn">@somos_huryn</a></span> utilizando HTML, CSS y JavaScript, implementado en GitHub Pages.</p>
          <p className="text-gray-600">Repositorio en GitHub: <a href="https://github.com/wasyted/hurynWeb">https://github.com/wasyted/hurynWeb</a></p>
          <p className="text-gray-600">Demo en vivo: <a href="https://wasyted.github.io/hurynWeb">https://wasyted.github.io/hurynWeb</a></p>
        </div>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">David Basile <span className='text-gray-500'>- Portfolio de artista</span></p>
          <p className="text-gray-600">Un portafolio para un filmmaker, muestra y promociona sus proyectos, programado en NextJS, Tailwind CSS, e implementado en Vercel.</p>
          <p className="text-gray-600">Repositorio en Github: <a href="https://github.com/wasyted/davidbasile-portfolio">https://github.com/wasyted/davidbasile-portfolio</a></p>
          <p className="text-gray-600">Demo en vivo: <a href="https://davidbasile-portfolio.vercel.app">https://davidbasile-portfolio.vercel.app</a></p>
        </div>
      </section>
    </div>
  );
};

export default ResumeSpanish;