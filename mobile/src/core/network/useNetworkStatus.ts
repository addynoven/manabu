import { useEffect, useState } from 'react';

export interface NetworkStatus {
  isConnected: boolean;
  isInternetReachable: boolean;
}

export function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    isConnected: true,
    isInternetReachable: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ononline' in window) {
      const handleOnline = () =>
        setStatus({ isConnected: true, isInternetReachable: true });
      const handleOffline = () =>
        setStatus({ isConnected: false, isInternetReachable: false });

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return status;
}
