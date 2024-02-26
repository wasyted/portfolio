import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header navEntryList={[{href: '/projects', name: 'projects'},{href: '/projects/laloamasa', name: 'laloamasa'}]}></Header>
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-white text-black p-4 pt-10 dark:bg-slate-800 dark:text-zinc-300">
        <div className="text-center p-4 rounded-lg">
          <div className="flex items-center justify-start flex-wrap mt-5 gap-4"> 
            <div className="text-justify mt-5">
              <h1 className="mb-3 font-bold text-4xl h-max bg-gradient-to-br text-transparent bg-clip-text from-black to-slate-500 dark:from-white dark:to-zinc-300">
                laloamasa
              </h1>
              <p className="text-md max-w-md mt-3">
                Welcome to laloamasa, an e-commerce prototype for a home bakery crafted with React and fetchApi. It facilitates seamless checkout by leveraging the WhatsApp API for custom message handling, allowing clients to manage payments and shipping conveniently from their phones.
              </p>
              <h3 className="text-lg font-bold mt-3">
                Features
              </h3>
              <ul role='list' className="text-start text-md max-w-md list-inside list-disc">
                <li>Mobile-first design approach.</li>
                <li>Responsive layout for enhanced user experience.</li>
                <li>Reusable styled components for consistency.</li>
                <li>Integrated cart interaction using the local storage API.</li>
                <li>Real-time cart interaction notifications.</li>
                <li>Efficient product categorization and search functionality.</li>
              </ul>
              <h3 className="text-lg font-bold mt-3">
                Built with
              </h3>
              <ul role='list' className="text-start text-md max-w-md list-inside list-disc">
                <li>React for dynamic user interface.</li>
                <li>SCSS for customizable styling.</li>
                <li>fetchAPI and WhatsApp API for seamless communication.</li>
              </ul>
              <div className="flex justify-center items-center gap-4 p-2 pb-0 mt-3">
                <a href="https://laloamasa.web.app" target="_blank"  className="text-sm text-center rounded-lg font-bold p-1.5 w-32 bg-black text-white dark:bg-white dark:text-black transition ease-in-out delay-500">
                  Live version ↗
                </a>
                <a href="https://www.github.com/wasyted/laloamasa" className="text-sm p-1.5 w-32">
                  Code ↗
                </a>
              </div>
            </div>
            <div className="overflow-hidden p-2 flex flex-col items-center justify-center h-auto max-w-96">
              <Image priority width={446} height={900} className="rounded-lg" src="/laloamasa/laloamasa.gif"></Image>
              <p className="text-sm max-w-md text-gray-500 mt-3 dark:text-zinc-300">
                Demonstrating category browsing and product addition to cart.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}