import React from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]">
      <div className="relative w-full h-[200px] sm:h-[230px]">
        <div className="    relative w-full flex justify-center p-0 m-0" onClick={() => window.open(source_code_link, "_blank")}>
  <img
    src={image}
    alt={name}
    className="block max-w-full h-[200px] rounded-xl bg-black"
    loading="lazy"
  />
</div>


         
      </div>

      <div className=" ">
        <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[13px] ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to  each website.
        </p>
      </div>

      {/* 🔥 Mobile-friendly grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
