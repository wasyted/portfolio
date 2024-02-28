import React from 'react';

const ResumeSpanish = () => {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 bg-white">
      <header className="mb-4">
        <div className='flex items-center justify-between gap-4'>
          <h1 className="text-3xl font-bold mb-2 text-black">Matías Wasyluk</h1>
          <p className="text-gray-800 text-md">Desarrollador Web | Programador</p>
        </div>
        <p className="text-gray-600 text-md">Email: matiasezequielwasyluk@gmail.com</p>
        <p className="text-gray-600 text-md">Teléfono: +54 011 35628327</p>
        <p className="text-gray-600 text-md">Sitio web: matiaswasyluk.vercel.app</p>
        <p className="text-gray-600 text-md">Ubicación: Buenos Aires, Argentina</p>
      </header>
      <hr />
      <section className='mb-3'>
        <h2 className="text-xl font-semibold mt-3 text-end text-black">Habilidades</h2>
        <ul className="list-disc list-inside text-sm">
          <li className="text-gray-600">Experto en HTML5, CSS3 y JavaScript (ES6+)</li>
          <li className="text-gray-600">Experiencia con React.js, Next.js y Tailwind CSS</li>
          <li className="text-gray-600">Conocimientos en Node.js, Express.js y APIs RESTful</li>
          <li className="text-gray-600">Familiarizado con MongoDB, MySQL y gestión de bases de datos</li>
          <li className="text-gray-600">Conocimientos de Git, GitHub y control de versiones</li>
          <li className="text-gray-600">Entendimiento sólido de diseño web receptivo y principios de UI/UX</li>
          <li className="text-gray-600">Familiarizado con programación orientada a objetos y C#</li>
          <li className="text-gray-600">Experiencia en implementar aplicaciones web usando diversas plataformas</li>
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
          <p className="text-gray-600">Entregué exitosamente soluciones web para clientes, incluyendo una página de aterrizaje para @Huryn para mostrar sus servicios y un sitio de comercio electrónico para @laloamasa, permitiendo el procesamiento de pedidos a través de WhatsApp.</p>
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
          <p className="font-semibold text-gray-800">laloamasa <span className='text-gray-500'>- e-commerce</span></p>
          <p className="text-gray-600">Desarrollé una plataforma de comercio electrónico para <span><a href="http://instagram.com/lalo.amasa">@lalo.amasa</a></span> utilizando React, SASS y fetchAPI, permitiendo un procesamiento de pedidos a través de WhatsApp, implementado en Google Firebase.</p>
          <p className="text-gray-600">Repositorio en GitHub: <a href="https://github.com/wasyted/laloamasa">https://github.com/wasyted/laloamasa</a></p>
          <p className="text-gray-600">Demo en vivo: <a href="https://laloamasa.web.app">https://laloamasa.web.app</a></p>
        </div>
        <div className='mt-3 text-sm'>
          <p className="font-semibold text-gray-800">noteblndr <span className='text-gray-500'>- Red social</span></p>
          <p className="text-gray-600">Construí un prototipo de red social full-stack con interacciones de usuario y publicaciones utilizando ExpressJS, MongoDB, EJS y Tailwind CSS, implementado en Railway.</p>
          <p className="text-gray-600">Repositorio en GitHub: <a href="https://github.com/wasyted/auth-test-app">https://github.com/wasyted/auth-test-app</a></p>
          <p className="text-gray-600">Demo en vivo: <a href="https://noteblndr.up.railway.app">https://noteblndr.up.railway.app</a></p>
        </div>
      </section>
    </div>
  );
};

export default ResumeSpanish;