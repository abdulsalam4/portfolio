"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Instagram,
  Linkedin,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export default function BentoGrid() {
  const progressData = [
    {
      title: "Active Project",
      desc: "Building high performance Mobile & Web solutions that scale with your business growth.",
    },
    {
      title: "Cross Platform",
      desc: "Crafting seamless experiences that work perfectly across Android, iOS, and all modern web browsers.",
    },
    {
      title: "Future Proof",
      desc: "Using the latest tech stacks to ensure your project remains relevant and maintainable for years to come.",
    },
    {
      title: "Commitment",
      desc: "Delivering clean code and intuitive UI for Android, iOS, and Web platforms on every sprint.",
    },
    {
      title: "Performance",
      desc: "Optimizing app loading speeds and implementing iron clad security for your data driven applications.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const icons = [
    "/icons/html.svg",
    "/icons/laravel.svg",
    "/icons/livewire.svg",
    "/icons/mysql.svg",
    "/icons/nodejs.svg",
    "/icons/nextjs.svg",
    "/icons/react.svg",
    "/icons/android.svg",
    "/icons/ios.svg",
    "/icons/firebase.svg",
    "/icons/supabase.svg",
    "/icons/javascript.svg",
    "/icons/typescript.svg",
    "/icons/php.svg",
    "/icons/tailwind.svg",
    "/icons/css.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % progressData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [progressData.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
      <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-8 flex flex-col justify-center relative group hover:border-blue-500/50 transition-all duration-500">
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={16} className="text-blue-500" />
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.4em]">
            Welcome to my space
          </span>
        </div>

        <h1 className="text-xl md:text-3xl font-bold italic text-white leading-tight flex flex-wrap items-center gap-2">
          Hi, I&apos;m
          <span className="text-blue-500">
            <Typewriter
              options={{
                strings: ["Abdul Salam", "a Developer", "a Creator"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="text-zinc-300 mt-4 mb-4 text-xs md:text-sm leading-relaxed max-w-[90%]">
          Full Stack Web &{" "}
          <span className="text-blue-500 font-medium">Mobile Developer</span>{" "}
          (Android/iOS) with expertise in creating dynamic
          <span className="text-white font-semibold"> Web Applications</span>.
        </p>

        <div className="absolute bottom-6 right-6 flex gap-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-blue-500"
          >
            <Sparkles size={14} />
          </motion.div>
        </div>
      </div>

      <div className="col-span-1 row-span-1 rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden relative">
        <img
          src="/images/doel.jpg"
          alt="Profile"
          className="w-full h-full object-center"
        />
      </div>

      <div className="col-span-1 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-500">
        <h2 className="text-2xl font-bold uppercase tracking-tighter leading-none text-zinc-200 flex flex-col gap-1">
          <span>
            I <span className="text-blue-500">CRAFT</span>
          </span>
          <span>
            AND <span className="text-blue-500">BUILD</span>
          </span>
          <span>STUFF</span>
        </h2>

        <div className="flex items-center gap-2">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">
            Been assigned to multiple projects
          </p>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <CheckCircle2 size={14} className="text-blue-500" />
          </motion.div>
        </div>
      </div>

      <div className="col-span-1 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-3 flex flex-col h-full overflow-hidden hover:border-blue-500/50 transition-all duration-500">
        <div className="flex justify-between items-center mb-2 px-1 shrink-0">
          <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">
            Latest Projects
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>

        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-1.5 min-h-0">
          <AppShortcut
            src="/projects/jdih.png"
            alt="JDIH Kabupaten Lebak"
            href="https://jdih.lebakkab.go.id/"
          />
          <AppShortcut
            src="/projects/silayum.png"
            alt="SILAYUM Setda Lebak"
            href="https://silayum.lebakkab.go.id/"
          />
          <AppShortcut
            src="/projects/sptwijaya.png"
            alt="SPT Wijaya Subang"
            href="https://sptwijaya.com/"
          />
          <AppShortcut
            src="/projects/siwasdin.png"
            alt="SIWASDIN Kabupaten Lebak"
            href="https://siwasdin.com/"
          />
          <AppShortcut
            src="/projects/situpai.png"
            alt="SITUPAI Dindik Lebak"
            href="https://situpai.dindiklebak.com/"
          />
          <AppShortcut
            src="/projects/simsarpras.png"
            alt="SIMSARPRAS Dindik Lebak"
            href="https://simsarpras.dindiklebak.com/"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-8 flex flex-col justify-center relative group hover:border-blue-500/50 transition-all duration-500">
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-3">
          About
        </span>
        <p className="text-sm md:text-lg font-medium leading-snug text-zinc-300">
          I&apos;m a passionate developer focused on building high performance
          <span className="text-blue-500"> Web and Mobile applications</span>. I
          strive to create beautiful digital solutions that make a difference in
          people&apos;s lives.
        </p>
        <div className="absolute bottom-6 right-8 opacity-30 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="col-span-1 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 flex flex-col items-center justify-center group hover:border-blue-500/50 transition-all duration-500">
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-baseline">
          <span className="text-7xl font-bold text-blue-500 tracking-tighter">
            4
          </span>
          <span className="text-4xl font-bold text-blue-500 ml-1">+</span>
        </motion.div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 group-hover:text-zinc-300 transition-colors">
          Years Experience
        </p>
      </div>

      <div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-blue-500/50 transition-all duration-500">
        <div className="relative h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-2 text-sm uppercase tracking-wider ">
                {progressData[currentIndex].title}
              </h3>
              <p className="text-sm text-zinc-300 leading-snug max-w-sm font-medium">
                {progressData[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 items-center">
          {progressData.map((_, index) => (
            <motion.div
              key={index}
              className="rounded-full bg-zinc-700"
              animate={{
                width: currentIndex === index ? 24 : 6,
                height: 6,
                backgroundColor: currentIndex === index ? "#3b82f6" : "#3f3f46",
              }}
              transition={{ duration: 0.4 }}
            >
              {currentIndex === index && (
                <motion.div
                  className="w-full h-full bg-blue-400 rounded-full opacity-50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="col-span-1 row-span-1 rounded-3xl bg-[#111] border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-blue-500/50 transition-all duration-500">
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">
          Stack I Use
        </span>

        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...icons, ...icons].map((src, index) => (
              <StackIcon key={index} src={src} />
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#111] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#111] to-transparent z-10" />
        </div>

        <p className="text-[11px] text-zinc-500 leading-tight italic border-l border-zinc-800 pl-3">
          "Transforming complex ideas into{" "}
          <span className="text-zinc-300">seamless digital reality.</span>"
        </p>
      </div>

      <a
        href="mailto:abdulsalam.rks4@gmail.com?subject=Halo&body=Saya tertarik bekerja sama..."
        className="col-span-1 row-span-1 rounded-3xl bg-blue-600 p-8 flex flex-col items-center justify-center text-center hover:bg-blue-500 transition-all cursor-pointer group decoration-none"
      >
        <Mail className="w-10 h-10 mb-3 text-white group-hover:scale-110 transition-transform" />
        <p className="text-xs font-bold text-white uppercase tracking-tighter">
          Have a project? <br /> Contact me!
        </p>
      </a>
    </div>
  );
}

function AppShortcut({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-[#dedede] border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
    >
      <div className="w-full h-full p-2 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
        <span className="text-[10px] text-white font-bold uppercase tracking-tighter leading-tight">
          {alt}
        </span>
      </div>
    </a>
  );
}

function StackIcon({ src }: { src: string }) {
  return (
    <div className="w-8 h-8 flex-shrink-0 relative grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
      <Image src={src} alt="tech" fill className="object-contain" />
    </div>
  );
}
