"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mood } from "../types";
import { MoodSwitcher } from "../components/MoodSwitcher";
import { Background } from "../components/Background";
import { FeaturedProject } from "../components/FeaturedProject";

export default function HomePage() {
  const [mood, setMood] = useState<Mood>("hiring");

  // Layout base
  const baseContainer =
    "relative flex flex-col items-center justify-start min-h-screen overflow-hidden text-center px-6 sm:px-8 md:px-12";

  useEffect(() => {
    if (mood === "geek") {
      document.body.style.backgroundColor = "#001a1a"; // Geek default background
    } else {
      document.body.style.backgroundColor = "#8d8d8d"; // revert to default
    }
  }, [mood]);

  // About Me sections
  const aboutMe =
    mood === "geek" ? (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-yellow-200 space-y-4 text-justify font-mono"
      >
        <h1 className="text-5xl font-bold mb-4 text-yellow-400">
          Greetings, Fellow Traveler of the Code Galaxy 🌌
        </h1>
        <p>
          My programming journey started long ago, in a galaxy not so far away — 1984. I may not have built R2-D2, but I did successfully
          program my parents to feed me whenever I wanted. Years later, in the academy (high school), I explored <strong>Turbo Pascal</strong> and microcontroller programming.
        </p>
        <p>
          Since then, I’ve lived among machines — supporting complex systems, debugging errors that felt like glitches in the Matrix,
          and working side-by-side with developers (not just because they sat in the next room). I’ve configured ERP and WMS systems,
          maintained SQL servers, and written deployment scripts that could probably pass the Turing test on a good day.
        </p>
        <p>
          After years in technical support, my destiny has become clear — it’s time to switch from maintaining starships to <strong>building them</strong>.
          The code force runs strong, and my mission is to create, optimize, and evolve software that would make even Skynet proud (in a *non-apocalyptic* way).
        </p>
        <p>
          Whether we’re talking Starfleet precision, Jedi discipline, or Neo-like problem-solving — I’m ready to plug in and start coding.
          Live long and compile. 🖖
        </p>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-200 space-y-4 text-justify"
      >
        <h1 className="text-5xl font-bold mb-4 pb-6">
          <span className="block sm:inline">Hi,</span>{" "}
          <span className="block sm:inline">I’m Michal Sokirka</span>
        </h1>
        <p>
          Coding has been my constant curiosity and passion. In high school, I explored <strong>Turbo Pascal</strong> and
          <strong> microcontroller programming</strong>, and over the years, I’ve always stayed close to software development — even while
          working in IT support roles.
        </p>
        <p>
          After university, I spent over a decade <strong>refining my technical expertise</strong> in support positions, assisting users,
          troubleshooting complex systems, and collaborating closely with development teams. I’ve worked with ERP and WMS applications,
          managed SQL servers, automated deployments with PowerShell and Octopus Deploy, and resolved challenging integration issues across
          applications, databases, and OS. This experience has given me a solid foundation in understanding software from both technical and
          user perspectives.
        </p>
        <p>
          Now, it’s time for the next chapter: fully stepping into programming. My journey in support has not only strengthened my
          problem-solving skills and technical adaptability but also fueled my desire to create, optimize, and build software from the ground
          up. I’m eager to bring my decades of hands-on technical experience, curiosity, and persistence into a programmer role — combining
          practical insights with coding expertise to deliver high-quality solutions.
        </p>
      </motion.div>
    );

  const hardSkills = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="max-w-4xl text-gray-200 mt-16 w-full"
    >
      <h2 className="text-3xl font-semibold mb-8 text-cyan-400 text-center">Hard Skills</h2>

      {/* Modern Development */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-cyan-300 mb-3">💻 Modern Development</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300">
          <li className="hover:text-cyan-400 transition-colors">TypeScript</li>
          <li className="hover:text-cyan-400 transition-colors">Next.js</li>
          <li className="hover:text-cyan-400 transition-colors">React</li>
          <li className="hover:text-cyan-400 transition-colors">TailwindCSS</li>
          <li className="hover:text-cyan-400 transition-colors">Node.js</li>
          <li className="hover:text-cyan-400 transition-colors">Prisma</li>
          <li className="hover:text-cyan-400 transition-colors">NestJS</li>
          <li className="hover:text-cyan-400 transition-colors">PostgreSQL</li>
          <li className="hover:text-cyan-400 transition-colors">GitHub</li>
        </ul>
        <p className="text-sm text-gray-400 mt-8 italic">
          (Actively learning & applying these technologies — building full-stack projects.)
        </p>
      </div>

      {/* IT & DevOps Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-cyan-300 mb-3">⚙️ IT & DevOps Expertise</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-300">
          <li className="hover:text-cyan-400 transition-colors">MS Windows Server (administration)</li>
          <li className="hover:text-cyan-400 transition-colors">Linux (basics)</li>
          <li className="hover:text-cyan-400 transition-colors">MS SQL Server (basic admin)</li>
          <li className="hover:text-cyan-400 transition-colors">SQL scripting (basics)</li>
          <li className="hover:text-cyan-400 transition-colors">IIS (advanced)</li>
          <li className="hover:text-cyan-400 transition-colors">PC Hardware (advanced)</li>
          <li className="hover:text-cyan-400 transition-colors">PowerShell scripting (skillful)</li>
          <li className="hover:text-cyan-400 transition-colors">Windows Batch scripting (skillful)</li>
          <li className="hover:text-cyan-400 transition-colors">Octopus Deploy (skillful)</li>
          <li className="hover:text-cyan-400 transition-colors">Computer Networking (basics)</li>
        </ul>
      </div>
    </motion.div>
  );

  const softSkills = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="max-w-4xl text-gray-200 mt-16 w-full"
    >
      <h2 className="text-3xl font-semibold mb-8 text-green-400 text-center">Soft Skills</h2>
      <div className="mb-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
          <li className="hover:text-green-400 transition-colors">Problem-solving & Analytical Thinking</li>
          <li className="hover:text-green-400 transition-colors">Adaptability & Learning Agility</li>
          <li className="hover:text-green-400 transition-colors">Collaboration & Teamwork</li>
          <li className="hover:text-green-400 transition-colors">Communication Skills</li>
          <li className="hover:text-green-400 transition-colors">Time Management & Prioritization</li>
          <li className="hover:text-green-400 transition-colors">Attention to Detail</li>
          <li className="hover:text-green-400 transition-colors">Empathy & User-focus</li>
          <li className="hover:text-green-400 transition-colors">Resilience & Perseverance</li>
        </ul>
      </div>
    </motion.div>
  );  


  const contact = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-gray-200 space-y-4 pb-20"
    >
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>
        Find me on{" "}
        <a href="https://github.com/sokimiso" className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        or connect on{" "}
        <a
          href="https://www.linkedin.com/in/michalsokirka/"
          className="text-cyan-400 underline" target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>

      {/* CV download button */}
      <a
        href="/cv/Michal_Sokirka_CV_(EN).pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 hover:from-purple-400 hover:to-cyan-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4m0-8V4m0 0l-4 4m4-4l4 4" />
        </svg>
        Download CV
      </a>      
    </motion.div>
  );

  const aiJoke = (
    <div className="flex flex-col justify-center h-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-cyan-400 text-2xl sm:text-3xl font-mono tracking-wide glow"
      >
        This site contains 3 hidden dots [.]
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-purple-400 text-xl sm:text-2xl mt-4 font-mono tracking-wide glow"
      >
        If you find them, you can keep them
      </motion.p>
    </div>
  );

  const barbra = (
    <div className="flex flex-col h-full text-pink-300 text-7xl font-bold">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Really?
      </motion.p>
    </div>
  );

  return (
    <div className={baseContainer}>
      {/* Animated Background */}
      <Background mood={mood} />

      {/* Mood Selector */}
      <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-md z-50 top-4 ">
        <MoodSwitcher mood={mood} onChange={setMood} />
      </div>

      {/* Page content */}
      <div className="mt-20 w-full flex flex-col items-center">
        {/* Unified max width container */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-16">
          {(mood === "hiring" || mood === "geek") && (
            <>
              {aboutMe}
              <FeaturedProject />
              {hardSkills}
              {softSkills}
              {contact}
            </>
          )}
          {mood === "ai" && aiJoke}
          {mood === "barbra" && barbra}
        </div>
      </div>
    </div>
  );
}
