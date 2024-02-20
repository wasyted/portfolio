// pages/index.js
import Head from 'next/head';
import Resume from '/src/components/Resume';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='print:hidden'>
          <Header navEntryList={[{href: '/resume', name: 'resume'},{href: '/resume/english', name: 'english'}]}></Header>
        </div>
        <div className='mt-28 print:mt-0'>
          <Resume />
        </div>
      </main>

      <footer>
        {/* Your footer content here */}
      </footer>
    </div>
  );
}