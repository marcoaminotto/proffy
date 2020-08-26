import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the availables teachers.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Weekday</label>
            <input type="text" id="weekday"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/21248323?s=460&u=6bf2e1b65e0f826847d51ace2749b96d2b9e479e&v=4" alt="Marco Echevestre"/>
            <div>
              <strong>Marco Echevestre</strong>
              <span>Programming</span>
            </div>
          </header>
          <p>
            Hi! I am a Brazilian developer with 2 years of professional experience in web development and a Javascript enthusiast. 
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
      </main>
    </div>
  );
}

export default TeacherList;
