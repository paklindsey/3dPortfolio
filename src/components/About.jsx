import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* soptions are for Tilt -> providing to card */}
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt
        ornare massa eget. Cursus in hac habitasse platea dictumst quisque
        sagittis purus sit. Viverra justo nec ultrices dui sapien eget mi proin
        sed. Blandit turpis cursus in hac habitasse platea dictumst. Ut ornare
        lectus sit amet est. Id neque aliquam vestibulum morbi blandit cursus
        risus at. Adipiscing elit ut aliquam purus. Urna et pharetra pharetra
        massa massa ultricies. Duis ut diam quam nulla porttitor massa id.
        Tortor at risus viverra adipiscing at in tellus integer feugiat. Morbi
        tristique senectus et netus et. Eget velit aliquet sagittis id.
        Tincidunt id aliquet risus feugiat in ante metus dictum. Urna cursus
        eget nunc scelerisque viverra mauris in aliquam. Adipiscing bibendum est
        ultricies integer quis.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// wrapping our section in SectionWrapper (which is our higher order component)
export default SectionWrapper(About, "about");
