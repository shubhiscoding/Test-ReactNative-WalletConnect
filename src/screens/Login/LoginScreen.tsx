import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { useAppKit, useAppKitAccount, AppKit } from '@reown/appkit-ethers-react-native';

const LoginScreen = () => {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>growspace.</Text>
        <View style={styles.illustrationContainer}>
          <Image source={require('../../assets/Time.png')} style={styles.image}/>
        </View>
        <Text style={styles.welcomeText}>Welcome to growspace.</Text>
        <Text style={styles.subtitleText}>
          Nurture your personal growth, one day at a time.
        </Text>
        <AppKit />
        <TouchableOpacity style={styles.loginButton} onPress={handleConnect}>
          <Text style={styles.loginButtonText}>
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;