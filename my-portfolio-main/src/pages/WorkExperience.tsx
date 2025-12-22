import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const staticTimelineData: TimelineItem[] = [
  {
    title: "Software Development Intern 🎯",
    name: "BLG Technologies, Jodhpur",
    techStack: "Flask, Python, MySQL, Pandas",
    summaryPoints: [
      "🛠 Developed a full Hostel Management Portal with student info, rooms, fees, admin analytics.",
      "📊 Built dashboards & analysis panels using Pandas + SQL for operational insights.",
      "⚡ Improved data pipeline efficiency and page load performance.",
      "🤝 Worked with designers & backend team in an agile workflow."
    ],
    dateRange: "Dec 2024 – Mar 2025",
    timelineType: "work",
  },
  {
    title: "B.Tech — Computer Science & Engineering 🎓",
    name: "Vellore Institute of Technology, Bhopal",
    techStack: "",
    summaryPoints: [
      "📚 Studying core CS subjects: DSA, DBMS, OS, OOPs, ML.",
      "🧠 Exploring AI/ML projects: engine rating prediction, voice chatbot, analytics dashboard.",
      "🏅 Top 10 finalist at Industry Conclave Project Expo 2024.",
      "💻 Active on LeetCode & GFG with strong DSA foundation."
    ],
    dateRange: "2022 – 2026",
    timelineType: "education",
  },
  {
    title: "Higher Secondary — Science (PCM) 🥇",
    name: "D.A.V. Public School, Kota",
    techStack: "",
    summaryPoints: [
      "🏆 Scored above 90% with distinction in Mathematics.",
      "📈 Built strong reasoning & analytical foundation.",
      "✨ Participated in tech & academic competitions."
    ],
    dateRange: "2020 – 2021",
    timelineType: "education",
  }
];

const WorkExperience: React.FC = () => {
  const timeLineData = staticTimelineData;

  return (
    <main aria-labelledby="timeline-heading">
      <div className="timeline-container">
        <h2 id="timeline-heading" className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>

      <VerticalTimeline aria-label="Work and education timeline">
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{
              background: 'rgba(20, 20, 20, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.1)' }}
            date={item.dateRange}
            iconStyle={{
              background: item.timelineType === "work" ? '#e50914' : '#aa00ff',
              color: '#fff',
              boxShadow: `0 0 10px ${item.timelineType === "work" ? 'rgba(255, 0, 0, 0.6)' : 'rgba(170, 0, 255, 0.6)'}`,
            }}
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div className="timeline-card-inner">
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="timeline-subtitle">{item.name}</span>

                {item.techStack && (
                  <div className="tech-badge">🛠 {item.techStack}</div>
                )}
                <div className="separator-line"></div>
              </div>

              <div className="timeline-points">
                {item.summaryPoints.map((point, idx) => (
                  <div key={idx} className="timeline-point">
                    <span className="point-bullet">
                      {item.timelineType === "work" ? "🎬" : "📘"}
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </main>
  );
};

export default WorkExperience;
