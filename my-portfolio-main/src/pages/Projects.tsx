// src/pages/Projects.tsx  — corrected imports & icon map fixes
import './Projects.css';
import { TbTopologyStar3 } from 'react-icons/tb'; // ImGui placeholder
import {
  FaCode, FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular,
  FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaChartBar
} from 'react-icons/fa';
import {
  SiOpencv, SiOpengl, SiScikitlearn, SiPytorch, SiNumpy, SiPandas, SiSocketdotio,
  SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery,
  SiAwsamplify, SiFirebase, SiTerraform, SiArgo
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { Project } from '../types';
import nodeImage from '../images/node-image-interface.png';
import chatImage from '../images/chat-app.png';
import engineRatingImage from '../images/engine-rating.png';
import interImage from '../images/interview.png';
import stackhiveimg from '../images/stackhiveimg.png';

import { GrDeploy, GrKubernetes } from "react-icons/gr";

import energyInsightImage from '../images/energy-insight.png';
import optirouteImage from '../images/optiroute.png';
import crmImage from '../images/crm.png';



const techIcons: { [key: string]: JSX.Element } = {
  "Nextjs": <RiNextjsFill />,
  "Next.js": <RiNextjsFill />,
  "ReactJS": <FaReact />,
  "React": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "Postgres": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  // Use FaCode / FaChartBar as safe placeholders instead of unavailable icons
  "C++": <FaCode />,
  "OpenCV": <SiOpencv />,
  "OpenGL": <SiOpengl />,
  "ImGui": <TbTopologyStar3 />, // closest available to UI graph layout
  "Socket.io": <SiSocketdotio />,
  "PyTorch": <SiPytorch />,
  "scikit-learn": <SiScikitlearn />,
  "scikit learn": <SiScikitlearn />,
  "XGBoost": <FaCode />, // fallback icon (no official icon)
  "NumPy": <SiNumpy />,
  "Pandas": <SiPandas />,
  "torchvision": <SiPytorch />,
  "SQL": <FaDatabase />,
  "Flask": <FaPython />, // using python icon for flask
  "Transformers": <FaCode />,
  "NLP": <FaCode />,
  "Matplotlib": <FaChartBar />,
  "Seaborn": <FaChartBar />
};

const staticProjects: Project[] = [
  {
    title: "Engine Rating Prediction",
    description:
      "End-to-end ML system using LightGBM to predict vehicle engine health from 60+ real-world parameters (R²=0.7). Performed feature engineering & tuning for production-ready predictions.",
    image: { url: engineRatingImage },
    techUsed: "Python, Streamlit, LightGBM, Scikit-Learn",
    githubLink: "https://github.com/diya-matani/Engine-Rating-Prediction",
    demoLink: "https://energyinsight.streamlit.app/"
  },
  {
    title: "Energy Insight",
    description:
      "AI-based energy optimization system using Random Forest to predict heating/cooling loads. Integrated Google Gemini Pro API to generate human-readable energy-saving recommendations.",
    image: { url: energyInsightImage },
    techUsed: "Python, Streamlit, Scikit-learn, Google Gemini Pro API",
    githubLink: "https://github.com/diya-matani/Energy-Insight-",
    demoLink: "https://energyinsight.streamlit.app/"
  },
  {
    title: "OptiRoute",
    description: "Intelligent vehicle routing optimization system designed to minimize travel time and fuel consumption using advanced pathfinding algorithms. Tuned for efficiency in logistics and delivery networks.",
    image: { url: optirouteImage },
    techUsed: "Python, AI/ML, Optimization",
    githubLink: "https://github.com/diya-matani/OptiRoute",
    demoLink: "https://optiroutev1.streamlit.app/"
  },
  {
    title: "Marketing Campaign Analytics",
    description:
      "Analyzed 64,000+ customer records using Logistic Regression to predict conversion probability. Validated insights with A/B testing (Chi-Square, T-Test) for data-driven decision making.",
    image: { url: crmImage },
    techUsed: "Python, Streamlit, Scikit-learn, Statistical Testing",
    githubLink: "https://github.com/diya-matani/Market-Campaign-Performance-Analytics",
    demoLink: "https://marketcampaignperformanceanalytics.streamlit.app/"
  }
];

const Projects: React.FC = () => {
  const projects = staticProjects;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="project-card"
              role="article"
              style={{
                '--delay': `${index * 0.1}s`,
              } as React.CSSProperties}
            >
              <img src={project.image.url} alt={`${project.title} screenshot`} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-used" aria-hidden>
                  {project.techUsed.split(',').map((techRaw, i) => {
                    const tech = techRaw.trim();
                    return (
                      <span key={i} className="tech-badge">
                        {techIcons[tech] || "🔧"} <span className="tech-name">{tech}</span>
                      </span>
                    );
                  })}
                </div>

                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link btn-github"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link btn-demo"
                    >
                      <FaChartBar /> Output
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
