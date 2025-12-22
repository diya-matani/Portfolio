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
  { name: "Python", description: "AI/ML, Scripting, Backend Development", icon: "FaPython", category: "Languages" },
  { name: "SQL", description: "Database querying and management", icon: "FaDatabase", category: "Languages" },

  // AI / ML / GenAI
  { name: "Machine Learning", description: "Model training, evaluation & explainable AI", icon: "SiScikitlearn", category: "AI & ML" },
  { name: "GenAI", description: "Gemini Pro API, Prompt Engineering, RAG", icon: "FaChartBar", category: "AI & ML" },
  { name: "Feature Engineering", description: "Data transformation for predictive modeling", icon: "FaToolbox", category: "AI & ML" },

  // Libraries
  { name: "Scikit-learn", description: "Standard ML algorithms & pipelines", icon: "SiScikitlearn", category: "Libraries" },
  { name: "LightGBM", description: "Gradient boosting framework", icon: "FaChartBar", category: "Libraries" },
  { name: "Pandas", description: "Data manipulation & analysis", icon: "SiPandas", category: "Libraries" },
  { name: "NumPy", description: "Numerical computing", icon: "SiNumpy", category: "Libraries" },
  { name: "SciPy", description: "Scientific computing", icon: "FaChartBar", category: "Libraries" },

  // Backend & Deployment
  { name: "Flask", description: "Microservices & API development", icon: "FaServer", category: "Backend & Deployment" },
  { name: "Streamlit", description: "Rapid data app prototyping & deployment", icon: "FaLaptopCode", category: "Backend & Deployment" },

  // Data Engineering
  { name: "ETL Pipelines", description: "Data cleaning, validation & transformation workflows", icon: "FaChartBar", category: "Data Engineering" },

  // Databases & Tools
  { name: "PostgreSQL", description: "Advanced relational database management", icon: "SiPostgresql", category: "Databases & Tools" },
  { name: "MySQL", description: "Standard RDBMS", icon: "SiMysql", category: "Databases & Tools" },
  { name: "Git & GitHub", description: "Version control & collaboration", icon: "FaGitAlt", category: "Databases & Tools" },
  { name: "VS Code", description: "Primary development environment", icon: "SiVisualstudiocode", category: "Databases & Tools" },
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
};

const Skills: React.FC = () => {
  // group and keep a predictable order of categories
  const orderedCategories = ["Languages", "AI & ML", "Libraries", "Backend & Deployment", "Data Engineering", "Databases & Tools"];
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
