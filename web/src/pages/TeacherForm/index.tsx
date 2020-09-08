import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { weekday: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { weekday: 0, from: '', to: '' }]);

    scheduleItems.push({
      weekday: 0,
      from: '',
      to: '',
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Awesome that you want to give classes."
        description="The first step is to fill out the registration form"
      />
      <main>
        <fieldset>
          <legend>Your data</legend>
          <Input name="name" label="Full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biography" />
        </fieldset>
        <fieldset>
          <legend>About class</legend>
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
          <Input name="cost" label="Cost per hour" />
        </fieldset>
        <fieldset>
          <legend>
            Available time
            <button type="button" onClick={addNewScheduleItem}>
              + New time
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.weekday} className="schedule-item">
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
                <Input name="from" label="From" type="time" />
                <Input name="to" label="To" type="time" />
              </div>
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Important warning" />
            Attention! <br />
            Fill in all fields
          </p>
          <button type="button">Save registration</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
