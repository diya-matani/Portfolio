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
import mriImage from '../images/mri-classification.png';
import interImage from '../images/interview.png';
import stackhiveimg from '../images/stackhiveimg.png';

import { GrDeploy, GrKubernetes } from "react-icons/gr";

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
      "Regression models for predicting engine ratings using feature engineering and ensemble methods (Random Forest, XGBoost). Performed cross-validation, hyperparameter tuning and visualized feature importance to explain model predictions.",
    image: { url: mriImage },
    techUsed: "Python, scikit-learn, XGBoost, SQL, Pandas",
    link: "#" // replace with repo/demo if available
  },
  {
    title: "AI Voice Chatbot",
    description:
      "A conversational voice-enabled chatbot that handles speech input, intent recognition and contextual replies. Integrated speech recognition and response generation for a smooth voice interaction experience.",
    image: { url: chatImage },
    techUsed: "Python, NLP, Speech Recognition, Flask, Transformers",
    link: "#" // replace with repo/demo if available
  },
  {
    title: "Marketing Campaign Performance Analytics",
    description:
      "End-to-end analytics for marketing campaigns: data cleaning, exploratory analysis, visualizations and ROI-driven recommendations to improve conversion. Built dashboards to summarize key KPIs.",
    image: { url: nodeImage },
    techUsed: "Python, Pandas, Matplotlib, Seaborn, SQL",
    link: "#" // replace with repo/demo if available
  },
  {
    title: "Hostel Management Portal (Internship)",
    description:
      "Built and deployed a production-ready Hostel Management Portal during internship at BLG Technologies. Features include student & room management, fee tracking and analytics dashboards for operations.",
    image: { url: interImage },
    techUsed: "Flask, Python, Pandas, SQL",
    link: "https://hostels.deekshaclasses.com/admin"
  }
];

const Projects: React.FC = () => {
  const projects = staticProjects;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isClickable = project.link && project.link !== '#';
          return (
            <div
              key={index}
              className="project-card"
              role={isClickable ? "link" : "group"}
              tabIndex={0}
              aria-label={`${project.title} — ${project.description}`}
              title={isClickable ? `Open: ${project.title}` : project.title}
              style={{
                '--delay': `${index * 0.1}s`,
                cursor: isClickable ? 'pointer' : 'default'
              } as React.CSSProperties}
              onClick={() => isClickable && window.open(project.link, '_blank')}
              onKeyDown={(e) => {
                if (!isClickable) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open(project.link, '_blank');
                }
              }}
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
