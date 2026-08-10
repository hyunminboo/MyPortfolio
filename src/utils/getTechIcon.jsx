import React from 'react';
import { FaReact, FaNodeJs, FaSass, FaPython, FaDocker, FaGithub, FaAws, FaVuejs, FaFigma, FaGitAlt, FaServer, FaJava } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiMysql, SiOracle, SiSpringboot, SiPostman, SiInsomnia, SiNotion, SiThreedotjs, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const getTechIcon = (name) => {
  if (!name) return null;
  const n = name.toLowerCase();

  // 그룹화된 스택 듀얼 아이콘 처리
  if (n.includes('java') && n.includes('python')) return <><FaJava /><FaPython /></>;
  if (n.includes('mysql') && n.includes('mongo')) return <><SiMysql /><SiMongodb /></>;
  if (n.includes('aws') && n.includes('cloudtype')) return <><FaAws /><FaServer /></>;
  if (n.includes('git') && n.includes('github')) return <><FaGitAlt /><FaGithub /></>;

  if (n.includes('react')) return <FaReact />;
  if (n.includes('node')) return <FaNodeJs />;
  if (n.includes('scss') || n.includes('sass') || n.includes('tailwind')) return <FaSass />;
  if (n.includes('python')) return <FaPython />;
  if (n.includes('docker')) return <FaDocker />;
  if (n === 'git' || n.includes('github')) return <FaGithub />;
  if (n.includes('aws')) return <FaAws />;
  if (n.includes('vue')) return <FaVuejs />;
  if (n.includes('type')) return <SiTypescript />;
  if (n.includes('javascript') || n === 'js') return <SiJavascript />;
  if (n.includes('next')) return <SiNextdotjs />;
  if (n.includes('java')) return <FaJava />;
  if (n.includes('three') || n.includes('r3f')) return <SiThreedotjs />;
  if (n.includes('mongo')) return <SiMongodb />;
  if (n.includes('mysql')) return <SiMysql />;
  if (n.includes('oracle')) return <SiOracle />;
  if (n.includes('spring')) return <SiSpringboot />;
  if (n.includes('figma')) return <FaFigma />;
  if (n.includes('postman')) return <SiPostman />;
  if (n.includes('insomnia')) return <SiInsomnia />;
  if (n.includes('notion')) return <SiNotion />;
  if (n.includes('iwin') || n.includes('server') || n.includes('domain')) return <FaServer />;
  if (n.includes('vs code') || n.includes('vscode')) return <VscVscode />;
  return null;
};
