import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/21248323?s=460&u=6bf2e1b65e0f826847d51ace2749b96d2b9e479e&v=4"
          alt="Marco Echevestre"
        />
        <div>
          <strong>Marco Echevestre</strong>
          <span>Programming</span>
        </div>
      </header>
      <p>
        Hi! I am a Brazilian developer with 2 years of professional experience
        in web development and a Javascript enthusiast.
      </p>
      <footer>
        <p>
          Price per hour
          <strong>10,00 €</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
