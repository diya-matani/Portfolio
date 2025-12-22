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
    title: "AI / Python Intern",
    name: "BLG Technologies (P) LTD",
    techStack: "Python, Flask, PostgreSQL, ETL Pipelines",
    summaryPoints: [
      "Built Python ETL pipelines for financial data transformation, reducing manual reconciliation by 40%.",
      "Designed PostgreSQL schemas for AI-driven analytics and developed Flask-based backend services.",
      "Converted raw operational data into ML-ready datasets for predictive modeling."
    ],
    dateRange: "Dec 2024 – Mar 2025",
    timelineType: "work",
  },
  {
    title: "Position of Responsibility",
    name: "Pahal Kids Classes | Google Developer Groups",
    techStack: "Leadership, Community Management",
    summaryPoints: [
      "Pahal Kids Classes: Conducted classes and activities for workers' children, enhancing communication and leadership skills.",
      "Technical Member at GDG: Contributing to technical initiatives and community development."
    ],
    dateRange: "Ongoing",
    timelineType: "work",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    name: "Vellore Institute of Technology",
    techStack: "CGPA: 8.87",
    summaryPoints: [
      "Studying core CS subjects: DSA, DBMS, OS, OOPs, ML.",
      "Runner Up - Project Expo: Secured Top 10 position at Industry Conclave VITB 2024."
    ],
    dateRange: "2022 – 2026",
    timelineType: "education",
  },
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
