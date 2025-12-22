import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails,SiCplusplus, SiTypescript, SiPostgresql, SiMysql, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas } from 'react-icons/si';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { name: "HTML&CSS", description: "Web Markup and Styling", icon: "SiHtml5", category: "Frontend" },
  { name: "JavaScript", description: "Scripting Language", icon: "FaNodeJs", category: "Frontend" },
  { name: "React", description: "Frontend Framework", icon: "FaReact", category: "Frontend" },

  { name: "MySQL", description: "Relational Database", icon: "SiMysql", category: "Databases" },
  { name: "PostgreSQL", description: "Relational Database", icon: "SiPostgresql", category: "Databases" },


  { name: "Java", description: "Object-Oriented Programming Language", icon: "FaJava", category: "Backend" },
  { name: "SpringBoot", description: "Java Framework", icon: "SiSpringboot", category: "Backend" },
  { name: "Node.js", description: "Backend Runtime", icon: "FaNodeJs", category: "Backend" },

  { name: "Python", description: "General Purpose Language", icon: "FaPython", category: "Languages" },
  { name: "C++", description: "General Purpose Language", icon: "Sicplusplus", category: "Languages" },

  { name: "TensorFlow", description: "Deep Learning Framework", icon: "SiTensorflow", category: "AI & ML" },
  { name: "PyTorch", description: "Machine Learning Library", icon: "SiPytorch", category: "AI & ML" },
  { name: "scikit-learn", description: "ML Algorithms", icon: "SiScikitlearn", category: "AI & ML" },
  { name: "NumPy", description: "Scientific Computing", icon: "SiNumpy", category: "AI & ML" },
  { name: "Pandas", description: "Data Analysis", icon: "SiPandas", category: "AI & ML" },
];

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  FaPython: <FaPython />,
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  SiScikitlearn: <SiScikitlearn />,
  SiNumpy: <SiNumpy />,
  SiPandas: <SiPandas />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  Sicpluslus:<SiCplusplus />
};

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
