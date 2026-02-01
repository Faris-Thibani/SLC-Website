'use client';

import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { MdOutlineLightbulb } from "react-icons/md";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <ReactLenis root>
      <div className="bg-slate-950">
        <Nav />
        <Hero />
        <Products />
      </div>
    </ReactLenis>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <div className="flex items-center gap-2">
        <MdOutlineLightbulb className="text-3xl text-amber-400" />
        <span className="text-xl font-bold">SLC Manufacturing</span>
      </div>
      <button
        onClick={() => {
          document.getElementById("products-section")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
      >
        OUR PRODUCTS <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-950/0 to-slate-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1581092162562-40038d87c0a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Modern street lighting installation"
        start={-200}
        end={200}
        className="w-1/3 rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1581092162562-40038d87c0a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Street light pole infrastructure"
        start={200}
        end={-250}
        className="mx-auto w-2/3 rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1604593686803-dc4c4eb05d00?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Industrial manufacturing process"
        start={-200}
        end={200}
        className="ml-auto w-1/3 rounded-lg shadow-lg"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1586124299649-e551d138c9e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Quality street lighting poles"
        start={0}
        end={-500}
        className="ml-24 w-5/12 rounded-lg shadow-lg"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Products = () => {
  return (
    <section
      id="products-section"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-slate-50"
      >
        Our Products
      </motion.h1>
      <ProductItem
        title="Standard Steel Poles"
        specs="Height: 20-50ft"
        location="All Regions"
      />
      <ProductItem
        title="High-Performance LED Fixtures"
        specs="Output: 50-400W"
        location="Nationwide"
      />
      <ProductItem
        title="Solar-Powered Street Lights"
        specs="Battery: 200-500Ah"
        location="All Regions"
      />
      <ProductItem
        title="Smart Traffic Control Systems"
        specs="IoT Integration Available"
        location="Premium Markets"
      />
      <ProductItem
        title="Decorative Architectural Poles"
        specs="Custom Designs"
        location="Urban Centers"
      />
      <ProductItem
        title="Concrete Foundation Solutions"
        specs="Load Rating: 10-50 Ton"
        location="Nationwide"
      />
      <ProductItem
        title="Custom Maintenance Services"
        specs="24/7 Support Available"
        location="Service Area"
      />
    </section>
  );
};

const ProductItem = ({ title, specs, location }: any) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-slate-700 px-3 pb-9 hover:border-amber-500 transition-colors"
    >
      <div>
        <p className="mb-1.5 text-xl text-slate-50">{title}</p>
        <p className="text-sm uppercase text-slate-400">{specs}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-slate-400 hover:text-amber-400 transition-colors">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
