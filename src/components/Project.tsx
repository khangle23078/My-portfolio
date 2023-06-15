import React from 'react';
import GithubIcon from '../assets/icons/github.svg';
import LinkIcon from '../assets/icons/link-m 1.svg';
import { IProject } from '../interface/project';

type ProjectProps = {
  projects: IProject[];
};

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div id="project" className="mt-[120px] px-4 md:px-0">
      <div className="layout-center border-b border-b-white pb-[105px]">
        <h4 className="text-white uppercase">featured projects</h4>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[57px]">
          {projects.map((item: IProject) => {
            return (
              <div className="mt-[51px] max-w-[511px]" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="flex justify-between items-center mt-[31px]">
                  <p className="text-white">{item.name}</p>
                  <div className="flex gap-4">
                    <a href={item.github_link} target="_blank">
                      <img src={GithubIcon} alt="github_link" />
                    </a>
                    <a href={item.demo_link} target="_blank">
                      <img src={LinkIcon} alt="demo_link" />
                    </a>
                  </div>
                </div>
                <p className="text-base font-light text-gray-400 py-3">{item.description}</p>
                <p className="text-base font-ligth text-blueBold">{item.tech_stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
