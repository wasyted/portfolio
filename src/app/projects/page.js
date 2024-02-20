'use client'

import Header from "@/components/Header";
import Projects from "@/components/Projects/ProjectsSection";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header navEntryList={[{href: '/projects', name: 'projects'},]}></Header>
      <div className="mt-16">
        <Projects></Projects>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )}