import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Awesome that you want to give classes." />
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherForm;
