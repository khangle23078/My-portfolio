import React from 'react';
import { IExperience } from '../interface/experience';
import { IDescription } from '../interface/description';

type ExperienceProps = {
  experiences: IExperience[];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div id="experience" className="mt-[103px] px-4 md:px-0">
      <div className="layout-center border-b border-b-white pb-[103px]">
        <div className="flex flex-col md:flex-row gap-[95px]">
          <h4 className="text-lg text-white uppercase">Experience</h4>
          <div className="flex-1 flex flex-col gap-[54px]">
            {experiences.map((item: IExperience) => {
              return (
                <div className="max-w-[852px]" key={item.id}>
                  <div className="flex justify-between">
                    <p className="text-white uppercase">{item.role}</p>
                    <div className="text-gray-400">{item.date}</div>
                  </div>
                  <p className="text-blueBold pt-3">
                    {item.company_name} / {item.address}
                  </p>
                  {item.description.map((item: IDescription) => {
                    return (
                      <p key={item.id} className="text-white py-3">
                        - {item.content}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
