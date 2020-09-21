import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  favourite: boolean;
}

import styles from './styles';

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favourite }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavourite() {
    const favouriteTeachers = await AsyncStorage.getItem('favourites');
    let favouriteTeachersArray: Teacher[] = [];

    if (isFavourite) {
      const favouriteTeacherIndex = favouriteTeachersArray.findIndex(
        (teacherItem: Teacher) => {
          return teacherItem.id === teacher.id;
        }
      );
      favouriteTeachersArray.splice(favouriteTeacherIndex, 1);
      setIsFavourite(false);
    } else {
      if (favouriteTeachers) {
        favouriteTeachersArray = JSON.parse(favouriteTeachers);
      }
      favouriteTeachersArray.push(teacher);
      setIsFavourite(true);
    }

    await AsyncStorage.setItem(
      'favourites',
      JSON.stringify(favouriteTeachersArray)
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Price per hour {'   '}
          <Text style={styles.priceValue}>$ {teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavourite}
            style={[
              styles.favouriteButton,
              isFavourite ? styles.favourite : {},
            ]}
          >
            {isFavourite ? (
              <Image source={unfavouriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contact</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
