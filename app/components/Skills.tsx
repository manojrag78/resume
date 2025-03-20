import React from "react";

import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandGit,
} from "@tabler/icons-react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <IconBrandJavascript size={40} />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript size={40} />,
      color: "#3178C6",
    },
    { name: "React", icon: <IconBrandReact size={40} />, color: "#61DAFB" },
    { name: "Next.js", icon: <IconBrandNextjs size={40} />, color: "#000000" },
    { name: "Node.js", icon: <IconBrandNodejs size={40} />, color: "#339933" },
    { name: "HTML5", icon: <IconBrandHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS3", icon: <IconBrandCss3 size={40} />, color: "#1572B6" },
    {
      name: "Tailwind CSS",
      icon: <IconBrandTailwind size={40} />,
      color: "#38B2AC",
    },
    { name: "MongoDB", icon: <IconBrandMongodb size={40} />, color: "#47A248" },
    { name: "Git", icon: <IconBrandGit size={40} />, color: "#F05032" },
  ];

  return (
    <section id="skills" className="bg-white p-10 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <hr className="w-16 border-2 border-blue-900 mb-4 mx-auto md:mx-0" />

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(145deg, ${skill.color}20, #ffffff)`,
                border: `1px solid ${skill.color}20`,
              }}
            >
              <div style={{ color: skill.color }} className="mb-4">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
