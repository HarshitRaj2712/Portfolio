import { motion, useScroll, useTransform } from "framer-motion";
import flower from "../assets/flower.png";

export default function FlowerSection() {
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, [0, 1500], [0, 360]);
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);

  return (
    <section className="relative h-[80vh] bg-black flex items-center justify-center overflow-hidden">

      <motion.img
        src={flower}
        alt="metal flower"
        style={{ rotate, opacity }}
        className="w-[500px] opacity-90"
      />

    </section>
  );
}