import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
       
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
         
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Software Engineer with a strong interest in Cybersecurity. I build efficient, user-friendly applications while focusing on secure coding practices and system protection. I enjoy solving problems, learning new technologies, and creating solutions that are both functional and secure. My goal is to continuously grow my skills and contribute to building reliable and secure digital systems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
