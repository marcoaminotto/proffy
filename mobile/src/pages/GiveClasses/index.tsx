import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Do you want to be a Proffy?</Text>
        <Text style={styles.description}>
          To became one, you need to register on our web platform.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Got it!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
