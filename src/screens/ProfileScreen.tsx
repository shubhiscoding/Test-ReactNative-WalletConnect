import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppKitAccount, useDisconnect } from '@reown/appkit-ethers-react-native';

const ProfileScreen: React.FC = () => {
  const { address } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Disconnection failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.largeProfileIcon}>
          <Text style={styles.largeProfileIconText}>
            {address ? address.substring(0, 1).toUpperCase() : 'A'}
          </Text>
        </View>
        <Text style={styles.userName}>
          {address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'Anonymous'}
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Account Information</Text>
        <TouchableOpacity style={styles.infoItem}>
          <View>
            <Text style={styles.infoItemTitle}>Screen Time Goal</Text>
            <Text style={styles.infoItemSubtitle}>4 hours/day</Text>
          </View>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>Active</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoItem}>
          <View>
            <Text style={styles.infoItemTitle}>Withdrawal Date</Text>
            <Text style={styles.infoItemSubtitle}>October 30, 2024</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.disconnectButton} onPress={handleDisconnect}>
        <Text style={styles.disconnectButtonText}>Disconnect Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  largeProfileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#7f7fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  largeProfileIconText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoItemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  verifiedBadge: {
    backgroundColor: '#e6ffe6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  verifiedText: {
    color: '#00cc00',
    fontSize: 12,
    fontWeight: '600',
  },
  disconnectButton: {
    backgroundColor: '#ff4444',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  disconnectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
