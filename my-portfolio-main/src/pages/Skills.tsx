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
  { name: "Python", description: "General-purpose language used for ML, scripting and backend", icon: "FaPython", category: "Languages" },
  { name: "C", description: "Foundation in low-level programming and problem-solving", icon: "SiCplusplus", category: "Languages" },
  { name: "C++", description: "Competitive programming & systems coding", icon: "SiCplusplus", category: "Languages" },

  // Web & Backend
  { name: "React", description: "Frontend library for building UI (components & hooks)", icon: "FaReact", category: "Web & Backend" },
  { name: "Flask", description: "Lightweight Python web framework for APIs & microservices", icon: "FaServer", category: "Web & Backend" },
  { name: "Node.js (basics)", description: "JS runtime useful for small backend services", icon: "FaNodeJs", category: "Web & Backend" },

  // Data & Machine Learning
  { name: "Pandas", description: "Data manipulation and analysis", icon: "SiPandas", category: "Data & ML" },
  { name: "NumPy", description: "Numerical computing & arrays", icon: "SiNumpy", category: "Data & ML" },
  { name: "scikit-learn", description: "Classical ML algorithms, pipelines & evaluation", icon: "SiScikitlearn", category: "Data & ML" },
  { name: "TensorFlow", description: "Deep learning framework (experiments & models)", icon: "SiTensorflow", category: "Data & ML" },
  { name: "PyTorch", description: "Deep learning library for research and prototyping", icon: "SiPytorch", category: "Data & ML" },
  { name: "NLP", description: "Text processing, intent recognition and pipelines", icon: "FaChartBar", category: "Data & ML" },

  // Databases & Tools
  { name: "MySQL", description: "Relational database design & queries", icon: "SiMysql", category: "Databases & Tools" },
  { name: "Git", description: "Version control and collaboration (GitHub workflows)", icon: "FaGitAlt", category: "Databases & Tools" },
  { name: "GitHub", description: "Repo hosting, PRs & CI basics", icon: "FaGitAlt", category: "Databases & Tools" },
  { name: "VS Code", description: "Primary IDE and productivity tooling", icon: "SiVisualstudiocode", category: "Databases & Tools" },

  // Other / Supporting
  { name: "HTML & CSS", description: "Markup and styling (responsive layouts)", icon: "SiHtml5", category: "Other" },
  { name: "Data Visualization", description: "Matplotlib / Seaborn for charts & dashboards", icon: "FaChartBar", category: "Other" },
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
  const orderedCategories = ["Languages", "Web & Backend", "Data & ML", "Databases & Tools", "Other"];
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
                        className="letter"
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
