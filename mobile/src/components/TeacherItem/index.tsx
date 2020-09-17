import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/marcoaminotto.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Marco Echevestre</Text>
          <Text style={styles.subject}>Math</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Web Developer 🇧🇷 - 🇵🇱
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>Price per hour {'   '}
          <Text style={styles.priceValue}>$ 20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favouriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Contact</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
