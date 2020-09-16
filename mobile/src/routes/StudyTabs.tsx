import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return(
    <Navigator>
      <Screen name='TeacherList' component={TeacherList}/>
    </Navigator>
  );
}

export default StudyTabs;