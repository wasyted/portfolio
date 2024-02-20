// pages/index.js
import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Header navEntryList={[{href: '/resume', name: 'resume'}]}></Header>
        <div className='text-2xl flex justify-center items-center mt-28 gap-2 min-h-full flex-col'>
          <h1 className='text-center sm:text-justify text-white'>Elige el lenguaje para el curriculum - Choose the resume&apos;s language.</h1>
          <div className='text-2xl flex justify-center items-center mt-28 gap-4 min-h-full'>
            <a href='/resume/spanish' className="text-center rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-zinc-50 to-zinc-400 text-white hover:from-white hover:to-zinc-100 dark:text-black transition ease-in-out delay-500">
              Español
            </a>
            <a href='/resume/english' className="text-center rounded-lg font-bold p-1.5 w-32 bg-gradient-to-br from-zinc-50 to-zinc-400 text-white hover:from-white hover:to-zinc-100 dark:text-black transition ease-in-out delay-500">
              English
            </a>
          </div>
        </div>
      </main>

      <footer>
        {/* Your footer content here */}
      </footer>
    </div>
  );
}