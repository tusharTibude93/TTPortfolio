'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
    fontSize: 9,
    color: '#64748b',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 3,
  },
  summaryText: {
    color: '#334155',
    marginBottom: 5,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  skillCategory: {
    flex: 1,
    minWidth: '45%',
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 3,
  },
  skillList: {
    fontSize: 9,
    color: '#64748b',
  },
  achievementList: {
    color: '#334155',
  },
  achievementItem: {
    marginBottom: 3,
  },
  project: {
    marginBottom: 15,
    borderLeft: '3px solid #3b82f6',
    paddingLeft: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  projectMeta: {
    fontSize: 8,
    color: '#64748b',
    textAlign: 'right',
  },
  projectDescription: {
    color: '#334155',
    marginBottom: 8,
  },
  responsibilitiesTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 3,
  },
  responsibilityList: {
    fontSize: 8,
    color: '#64748b',
  },
  responsibilityItem: {
    marginBottom: 2,
  },
  techStackTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 3,
  },
  techStack: {
    fontSize: 8,
    color: '#64748b',
  },
});

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  github: string;
  gitlab: string;
  education: string;
}

interface Skills {
  languages: string[];
  frameworks: string[];
  versionControl: string[];
  os: string[];
  tools: string[];
  other: string[];
}

interface Project {
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

interface ResumePDFProps {
  personalInfo: PersonalInfo;
  skills: Skills;
  achievements: string[];
  projects: Project[];
}

const ResumePDF: React.FC<ResumePDFProps> = ({ personalInfo, skills, achievements, projects }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Text>📧 {personalInfo.email}</Text>
          <Text>🎓 {personalInfo.education}</Text>
          <Text>🔗 GitHub: {personalInfo.github}</Text>
          <Text>🔗 GitLab: {personalInfo.gitlab}</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          • Passionate front-end developer with over 8+ years of extensive experience in large system architecture design and application development.
        </Text>
        <Text style={styles.summaryText}>
          • Proficient in client-side scripting with TypeScript, ES6, and JavaScript frameworks such as ReactJS and NextJS.
        </Text>
        <Text style={styles.summaryText}>
          • Skilled in designing and developing React-Redux app architectures from scratch.
        </Text>
        <Text style={styles.summaryText}>
          • Experienced in managing UI teams, conducting code reviews, and overseeing UI task management.
        </Text>
        <Text style={styles.summaryText}>
          • Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.
        </Text>
        <Text style={styles.summaryText}>
          • Capable of understanding business requirements and translating them into technical specifications.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Languages:</Text>
            <Text style={styles.skillList}>{skills.languages.join(', ')}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Frameworks:</Text>
            <Text style={styles.skillList}>{skills.frameworks.join(', ')}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Version Control:</Text>
            <Text style={styles.skillList}>{skills.versionControl.join(', ')}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>OS:</Text>
            <Text style={styles.skillList}>{skills.os.join(', ')}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Tools:</Text>
            <Text style={styles.skillList}>{skills.tools.join(', ')}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Other Skills:</Text>
            <Text style={styles.skillList}>{skills.other.join(', ')}</Text>
          </View>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementList}>
          {achievements.map((achievement, index) => (
            <Text key={index} style={styles.achievementItem}>• {achievement}</Text>
          ))}
        </View>
      </View>

      {/* Project Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project Experience</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.project}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <View style={styles.projectMeta}>
                <Text>{project.company}</Text>
                <Text>{project.role}</Text>
                <Text>{project.duration}</Text>
              </View>
            </View>
            <Text style={styles.projectDescription}>{project.description}</Text>
            
            <Text style={styles.responsibilitiesTitle}>Responsibilities:</Text>
            <View style={styles.responsibilityList}>
              {project.responsibilities.map((resp, idx) => (
                <Text key={idx} style={styles.responsibilityItem}>• {resp}</Text>
              ))}
            </View>
            
            <Text style={styles.techStackTitle}>Tech Stack:</Text>
            <Text style={styles.techStack}>{project.techStack.join(', ')}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF; 