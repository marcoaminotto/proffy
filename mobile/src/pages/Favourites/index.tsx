import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useFocusEffect(() => loadFavourites());

  function loadFavourites() {
    AsyncStorage.getItem('favourites').then((response) => {
      if (response) {
        const favouriteTeachers = JSON.parse(response);
        setFavourites(favouriteTeachers);
      }
    });
  }

  return (
    <View style={styles.container}>
      <PageHeader title="My Favourite Proffys" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favourites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favourite />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favourites;
