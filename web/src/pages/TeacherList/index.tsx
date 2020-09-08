import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the availables teachers.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: 'Art', label: 'Art' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'English', label: 'English' },
              { value: 'Geography', label: 'Geography' },
              { value: 'History', label: 'History' },
              { value: 'Literature', label: 'Literature' },
              { value: 'Mathematics', label: 'Mathematics' },
              { value: 'Physics', label: 'Physics' },
              { value: 'Spanish', label: 'Spanish' },
            ]}
          />
          <Select
            name="weekday"
            label="Weekday"
            options={[
              { value: '0', label: 'Monday' },
              { value: '1', label: 'Tuesday' },
              { value: '2', label: 'Wednesday' },
              { value: '3', label: 'Thursday' },
              { value: '4', label: 'Friday' },
              { value: '5', label: 'Saturday' },
              { value: '6', label: 'Sunday' },
            ]}
          />
          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
