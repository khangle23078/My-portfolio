import React from 'react';
import { IEducation } from '../interface/education';

type EducationProps = {
  education: IEducation;
};

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div id="education" className="mt-[103px] px-4 md:px-0">
      <div className="layout-center border-b border-b-white pb-[103px]">
        <div className="flex flex-col md:flex-row gap-[95px]">
          <h4 className="text-lg text-white uppercase">Education</h4>
          <div className="flex flex-col gap-[54px]">
            <div className="w-[852px]">
              <div className="flex justify-between">
                <p className="text-white uppercase">{education.name}</p>
                <div className="text-gray-400">{education.date}</div>
              </div>
              <p className="text-blueBold text-sm pt-3">{education.address}</p>
              <p className="text-gray-400 pt-3">- Major: {education.major}</p>
              <p className="text-gray-400 pt-3">- GPA : {education.GPA}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
