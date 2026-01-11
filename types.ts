import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}