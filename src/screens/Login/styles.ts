import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    contentContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '500',
      marginTop: 40,
      marginBottom: 40,
      color: '#2C2C2C',
    },
    illustrationContainer: {
      height: 400,
      alignItems: 'center',
    },
    image:{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    placeholderIllustration: {
      width: 200,
      height: 200,
      backgroundColor: '#E1E1E1',
      borderRadius: 10,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitleText: {
      fontSize: 16,
      color: '#666666',
      marginBottom: 30,
    },
    signUpButton: {
      backgroundColor: '#2C2C2C',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    loginButton: {
      backgroundColor: '#2C2C2C',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#E1E1E1',
    },
    appleButton: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E1E1E1',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
    appleButtonText: {
      color: '#2C2C2C',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default styles;
