import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        weekday,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the availables teachers.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
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
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name="weekday"
            label="Weekday"
            value={weekday}
            options={[
              { value: '0', label: 'Monday' },
              { value: '1', label: 'Tuesday' },
              { value: '2', label: 'Wednesday' },
              { value: '3', label: 'Thursday' },
              { value: '4', label: 'Friday' },
              { value: '5', label: 'Saturday' },
              { value: '6', label: 'Sunday' },
            ]}
            onChange={(e) => setWeekday(e.target.value)}
          />
          <Input
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
