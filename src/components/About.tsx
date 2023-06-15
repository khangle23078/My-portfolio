import React from 'react';
import { user } from '../data/user';

const About: React.FC = () => {
  return (
    <div id="about" className="mt-[115px] px-3 md:px-0">
      <div className="layout-center">
        <h4 className="text-2xl md:text-base text-center md:text-justify text-white font-Inter font-extralight">
          Hey i'm
        </h4>
        <h1 className="text-[96px] font-Walsheim font-bold bg-gradient-to-r from-purple100 via-blue100 to-pink100  bg-clip-text text-transparent text-center md:text-justify">
          Le Minh Khang
        </h1>
        <p className="text-lg text-gray-400 font-extralight pb-6 text-center md:text-justify">
          I'm a Frontend developer. I enjoy creating things that live on the internet, whether that be websites,
          applications, or anything in between. I have been freelancing for a year now while studying at the university
          and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of
          fields throughout my projects/work.
        </p>
        <a
          href={user.resume_link}
          target="_blank"
          className="text-white py-2 px-4 border border-white rounded-md ml-[30%] md:ml-0"
        >
          See my resume
        </a>
      </div>
    </div>
  );
};

export default About;
