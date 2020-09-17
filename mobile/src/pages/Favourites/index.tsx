import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favourites() {
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favourites;
