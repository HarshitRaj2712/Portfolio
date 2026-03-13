import { useEffect } from "react";
import { animate, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import flower from "../assets/flower.png";

export default function FlowerSection() {
  const MotionImg = motion.img;
  const { scrollY } = useScroll();

  const introRotate = useMotionValue(-42);
  const rotate = useTransform(scrollY, [0, 1500], [0, 100]);
  const combinedRotate = useTransform(() => rotate.get() + introRotate.get());
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);

  useEffect(() => {
    const controls = animate(introRotate, 0, {
      duration: 1.9,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [introRotate]);

  return (
    <section className="relative h-[50vh] bg-black flex items-center justify-center overflow-hidden">

      <MotionImg
        src={flower}
        alt="metal flower"
        style={{ rotate: combinedRotate, opacity }}
        className="w-[400px]  brightness-125
        contrast-125
        saturate-110
        drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      />

      {/* Dark gradient bottom */} 
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />

    </section>
  );
}