import React from 'react';
import '@walletconnect/react-native-compat';
import { createAppKit, defaultConfig } from '@reown/appkit-ethers-react-native';
import AppNavigator from './src/navigation/AppNavigator';

const projectId = 'c94e7f0b7a63dd3b72c567c5aa52b52f';

const metadata = {
  name: 'AppKit RN',
  description: 'AppKit RN Example',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'thegoodhabits://',
  },
};

const config = defaultConfig({ metadata });

const mainnet = {
  chainId: 84532,
  name: 'Base Sepolia Testnet',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.basescan.org/',
  rpcUrl: 'https://sepolia.base.org',
};
const chains = [mainnet];

export const modal = createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true,
});

export default function App() {
  return <AppNavigator />;
};