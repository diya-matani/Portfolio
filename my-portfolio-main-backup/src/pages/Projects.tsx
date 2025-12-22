
import './Projects.css';
import { TbTopologyStar3 } from 'react-icons/tb'; // ImGui placeholder
import { FaCuttlefish,FaCode,FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiOpencv,SiOpengl,SiScikitlearn,SiPytorch,SiNumpy,SiPandas,SiSocketdotio,SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
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
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
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
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  "C++": <FaCuttlefish />, // Placeholder for C++
  "OpenCV": <SiOpencv />,
  "OpenGL": <SiOpengl />,
  "ImGui": <TbTopologyStar3 /> ,// closest available to UI graph layout
  "Socket.io":<SiSocketdotio />,
  "PyTorch": <SiPytorch />,
  "scikit-learn": <SiScikitlearn />,
  "NumPy": <SiNumpy />,
  "Pandas": <SiPandas />,
  "torchvision": <SiPytorch /> // closest match
};


const staticProjects: Project[] = [
  {
    title: "Intrivium",
    description:
      "A job interview preparation platform powered by Vapi AI Voice agents, Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents",
    image: { url: interImage },
    techUsed: "Nextjs, ReactJS, NodeJS, MongoDB",
    link: "https://intrivium.vercel.app/"
  },
  {
    title: "StackHive",
    description:
      "StackHive is a complex Q&A platform for developers to ask questions, share knowledge, and learn from each other. It is built with Next.js, Tailwind CSS, Clerk, MongoDB, and more.",
    image: { url: stackhiveimg },
    techUsed: "Nextjs, ReactJS, NodeJS, MongoDB",
    link: "https://stackhive-iota.vercel.app/"
  },
  {
    title: "Node-Based Image Manipulation Interface",
    description:
      "An interactive image editor built with ImGui, OpenGL, and OpenCV. Enables users to create visual filter pipelines using a node graph interface.",
    image: { url: nodeImage },
    techUsed: "C++, OpenCV, OpenGL, ImGui",
    link: "https://www.youtube.com/watch?v=FYD48PZWVWs&t=7s"
  },
  {
    title: "Talk-A-Tive: Full Stack Chatting App",
    description:
      "A real-time chat app with one-on-one messaging, typing indicators, and delivery status using MERN stack and Socket.io.",
    image: { url: chatImage },
    techUsed: "ReactJS, NodeJS, Express.js, MongoDB, Socket.io",
    link: "https://talk-a-tive-vsrp.onrender.com/"
  },
  {
    title: "MRI-based Temporal Lobe Epilepsy Classification",
    description:
      "Built a CNN-based model to classify brain states from MRI slices, achieving 78% precision with subject-level evaluation.",
    image: { url:  mriImage  },
    techUsed: "Python, PyTorch, scikit-learn, OpenCV, NumPy, Pandas",
    link: "https://github.com/anupamchittora/mri-temporal-lobe-classification"
  },
];


const Projects: React.FC = () => {
  const projects = staticProjects;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
          key={index}
          className="project-card"
          style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          onClick={() => window.open(project.link, '_blank')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && window.open(project.link, '_blank')}
        >
          <img src={project.image.url} alt={project.title} className="project-image" />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.techUsed.split(', ').map((tech, i) => (
                <span key={i} className="tech-badge">
                  {techIcons[tech] || "🔧"} {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        
        ))}
      </div>
    </div>
  );
};

export default Projects;
