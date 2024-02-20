// pages/index.js
import Head from 'next/head';
import Header from '@/components/Header';
import ResumeSpanish from '@/components/ResumeSpanish';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='print:hidden'>
          <Header navEntryList={[{href: '/resume', name: 'curriculum vitae'},{href: '/resume/spanish', name: 'español'}]}></Header>
        </div>
        <div className='mt-28 print:mt-0'>
          <ResumeSpanish />
        </div>
      </main>

      <footer>
        {/* Your footer content here */}
      </footer>
    </div>
  );
}