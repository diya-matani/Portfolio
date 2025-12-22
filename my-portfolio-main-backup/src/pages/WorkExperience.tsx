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
    title: "Summer In 🎉",
    name: "KPMG INDIA",
    techStack: "Azure Data Explorer",
    summaryPoints: [
      "📈 Implemented automated testing, reducing release cycle time by 30%.",
      "Led the development of a loan origination platform, improving response time by 25%.",
      "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements."
    ],
    dateRange: "Jun 2025 - Present",
    timelineType: "work",
  },
  {
    name: "Malaviya National Institute of Technology Jaipur (MNIT)",
    title: "B.Tech. 🎓",
    summaryPoints: [
      "⚙️ Pursuing B.Tech in ECE with coursework in Data Structures, Microprocessors, and Operating Systems.",
      "💡 Led technical projects in AI/ML and full-stack development, including MRI classification and chat app.",
      "🎯 Ranked in the top 3.95% in JEE Advanced; actively leading tech initiatives and workshops on campus."
    ],
    dateRange: "July 2022 - May 2026",
    techStack: "",
    timelineType: "education",
  },
  {
    name: "D.A.V. Public School Kota",
    title: "Higher Secondary 🥇",
    summaryPoints: [
      "🏆 Achieved 93% in CBSE 12th Boards with distinction in Physics, Chemistry, and Mathematics.",
      "📈 Built strong foundation in analytical reasoning and problem-solving, laying groundwork for engineering education."
    ],
    dateRange: "Apr 2020 - Apr 2021",
    techStack: "",
    timelineType: "education",
  }
];

const WorkExperience: React.FC = () => {
  const timeLineData = staticTimelineData;

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
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
              boxShadow: `0 0 10px ${item.timelineType === "work" ? 'rgba(255, 0, 0, 0.6)' : 'rgba(170, 0, 255, 0.6)'}`
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
    </>
  );
};

export default WorkExperience;
