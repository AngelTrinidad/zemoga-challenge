import {useEffect, useState} from 'react';

import NetInfo from '@react-native-community/netinfo';

interface UseNetInfo {
  isConnected: boolean | null;
}

export const useNetInfo = (): UseNetInfo => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {isConnected};
};
