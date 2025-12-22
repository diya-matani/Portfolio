// src/pages/Skills.tsx
import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaCode,
  FaToolbox,
  FaServer,
  FaLaptopCode,
  FaChartBar,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
} from "react-icons/si";
import { Skill } from "../types";

/**
 * Polished and readable skills list for Diya Matani.
 * Categories ordered for recruiters: Languages -> Web & Backend -> Data & ML -> Databases & Tools -> Others
 */

const skillsData: Skill[] = [
  // Languages
  { name: "Python", description: "General Purpose Language", icon: "FaPython", category: "Languages" },
  { name: "C++", description: "Competitive Programming", icon: "SiCplusplus", category: "Languages" },
  { name: "SQL", description: "Relational Database Querying", icon: "FaDatabase", category: "Languages" },

  // AI & ML
  { name: "Machine Learning", description: "Predictive Modeling", icon: "SiScikitlearn", category: "AI & ML" },
  { name: "GenAI", description: "LLMs & RAG", icon: "FaChartBar", category: "AI & ML" },
  { name: "Scikit-learn", description: "ML Algorithms", icon: "SiScikitlearn", category: "AI & ML" },
  { name: "Pandas", description: "Data Analysis", icon: "SiPandas", category: "AI & ML" },
  { name: "NumPy", description: "Numerical Computing", icon: "SiNumpy", category: "AI & ML" },

  // Backend & Web
  { name: "Flask", description: "Backend Framework", icon: "FaServer", category: "Backend & Web" },
  { name: "Streamlit", description: "Data Apps", icon: "FaLaptopCode", category: "Backend & Web" },
  { name: "React", description: "Frontend Library", icon: "FaReact", category: "Backend & Web" },

  // Databases
  { name: "PostgreSQL", description: "Advanced RDBMS", icon: "SiPostgresql", category: "Databases" },
  { name: "MySQL", description: "Standard RDBMS", icon: "SiMysql", category: "Databases" },

  // Tools
  { name: "Git & GitHub", description: "Version Control", icon: "FaGitAlt", category: "Tools" },
  { name: "VS Code", description: "Development Environment", icon: "SiVisualstudiocode", category: "Tools" },
];

const iconMap: { [key: string]: JSX.Element } = {
  FaReact: <FaReact aria-hidden />,
  FaNodeJs: <FaNodeJs aria-hidden />,
  FaGitAlt: <FaGitAlt aria-hidden />,
  FaPython: <FaPython aria-hidden />,
  SiCplusplus: <SiCplusplus aria-hidden />,
  SiMysql: <SiMysql aria-hidden />,
  SiPandas: <SiPandas aria-hidden />,
  SiNumpy: <SiNumpy aria-hidden />,
  SiScikitlearn: <SiScikitlearn aria-hidden />,
  SiTensorflow: <SiTensorflow aria-hidden />,
  SiPytorch: <SiPytorch aria-hidden />,
  SiHtml5: <SiHtml5 aria-hidden />,
  SiCss3: <SiCss3 aria-hidden />,
  SiVisualstudiocode: <SiVisualstudiocode aria-hidden />,
  FaChartBar: <FaChartBar aria-hidden />,
  FaServer: <FaServer aria-hidden />,
  FaLaptopCode: <FaLaptopCode aria-hidden />,
  FaToolbox: <FaToolbox aria-hidden />,
  FaCode: <FaCode aria-hidden />,
  FaDatabase: <FaDatabase aria-hidden />,
  TbBrandVscode: <SiVisualstudiocode aria-hidden />, // Map Tb to SiVis since it's available
};

const Skills: React.FC = () => {
  const orderedCategories = [
    "Languages",
    "AI & ML",
    "Backend & Web",
    "Databases",
    "Tools"
  ];

  const grouped: Record<string, Skill[]> = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <main className="skills-container" aria-labelledby="skills-heading">
      <h1 id="skills-heading" className="skills-heading">Skills</h1>

      {orderedCategories.map((category) => {
        const items = grouped[category];
        if (!items || items.length === 0) return null;

        return (
          <section className="skill-category" key={category} aria-labelledby={`cat-${category}`}>
            <h2 id={`cat-${category}`} className="category-title">{category}</h2>
            <div className="skills-grid" role="list">
              {items.map((skill, idx) => (
                <article
                  role="listitem"
                  aria-label={`${skill.name} — ${skill.description}`}
                  className="skill-card"
                  key={skill.name}
                >
                  <div className="icon" aria-hidden>
                    {iconMap[skill.icon] || <FaCode />}
                  </div>

                  <h3 className="skill-name">
                    {skill.name.split("").map((letter, i) => (
                      <span
                        key={i}
                        className="skill-letter"
                        style={{ animationDelay: `${i * 0.03}s` }} // slightly faster animation
                      >
                        {letter}
                      </span>
                    ))}
                  </h3>

                  <p className="skill-description">{skill.description}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Skills;
