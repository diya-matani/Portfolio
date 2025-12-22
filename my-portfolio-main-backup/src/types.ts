// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: {
    url: string;
  };
  linkedinLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  title?: string;
  name: string;
  techStack?: string;
  summaryPoints: string[];
  dateRange: string;
  timelineType: "work" | "education";
  logoUrl?: string;  // Add this line!
}

export interface Project {
  title: string;
  description: string;
  image: { url: string };
  techUsed: string;
  link: string;
}


export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
