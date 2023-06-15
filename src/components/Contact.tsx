import React from 'react';
import { IContact } from '../interface/contact';

type ContactProps = {
  contacts: IContact[];
};

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  return (
    <div id="contact" className="py-[103px] px-3 md:px-0">
      <div className="layout-center">
        <div className="flex flex-col md:flex-row gap-[117px]">
          <h4 className="text-white uppercase">Contact</h4>
          <div className="flex flex-col md:flex-row gap-3">
            {contacts.map((contact: IContact) => {
              return (
                <a
                  href={contact.link}
                  target="_blank"
                  className="flex items-center gap-2 py-3 px-8 border border-white rounded-md"
                >
                  <img src={contact.icon} alt={contact.title} />
                  <p className="text-white">{contact.title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
