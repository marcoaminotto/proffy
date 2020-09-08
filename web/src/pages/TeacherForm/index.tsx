import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

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

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', { 
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      history.push('/');
    }).catch(() => {
      alert('Error');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Awesome that you want to give classes."
        description="The first step is to fill out the registration form"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>
            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>About class</legend>
            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            <Input
              name="cost"
              label="Cost per hour"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Available time
              <button type="button" onClick={addNewScheduleItem}>
                + New time
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.weekday} className="schedule-item">
                  <Select
                    name="weekday"
                    label="Weekday"
                    value={scheduleItem.weekday}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'weekday', e.target.value)
                    }
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
                  <Input
                    name="from"
                    label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => {
                      setScheduleItemValue(index, 'from', e.target.value);
                    }}
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => {
                      setScheduleItemValue(index, 'to', e.target.value);
                    }}
                  />
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
            <button type="submit">Save registration</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
