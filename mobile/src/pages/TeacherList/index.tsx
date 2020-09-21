import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favourites, setFavourites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  useFocusEffect(() => loadFavourites());

  function loadFavourites() {
    AsyncStorage.getItem('favourites').then((response) => {
      if (response) {
        const favouriteTeachers = JSON.parse(response);
        const favouriteTeachersId = favouriteTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavourites(favouriteTeachersId);
      }
    });
  }

  function handlerToggleFiltersVisibility() {
    setFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavourites();

    const response = await api.get('classes', {
      params: {
        subject,
        weekday,
        time,
      },
    });

    setFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Available Proffys"
        headerRight={
          <BorderlessButton onPress={handlerToggleFiltersVisibility}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Which subject?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                <TextInput
                  style={styles.input}
                  value={weekday}
                  onChangeText={(text) => setWeekday(text)}
                  placeholder="Which day?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Which time?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favourite={favourites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
