import { lazy, Suspense } from 'react';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import BlurBlob from './components/BlurBlob';
import Seo from './components/Seo';

// Lazy load heavy components to reduce initial JS bundle size
const Skills = lazy(() => import('./components/Skills/Skills'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Work = lazy(() => import('./components/Work/Work'));
const Education = lazy(() => import('./components/Education/Education'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const App = () => {
  return (
    <>
      <Seo
        title="Piyush Mishra - Fullstack Developer Portfolio"
        description="Portfolio of Piyush Mishra, a fullstack developer specializing in MERN stack, React, Node.js, and modern web technologies. Explore my projects and skills."
        canonical="https://piyush-portfolio-website-dx18.vercel.app"
        image="https://piyush-portfolio-website-dx18.vercel.app/src/assets/profile2.png"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Piyush Mishra',
          jobTitle: 'Fullstack Developer',
          url: 'https://piyush-portfolio-website-dx18.vercel.app',
          sameAs: [
            'https://github.com/Piyush200516',
            'https://www.linkedin.com/in/piyush-mishra-495391260'
          ],
          knowsAbout: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Fullstack Development']
        }}
      />
      <div className="bg-[#050414]">

         <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Work />
          </Suspense>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Education />
          </Suspense>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <Footer />
          </Suspense>
        </div>

      </div>
    </>
  );
};

export default App;
