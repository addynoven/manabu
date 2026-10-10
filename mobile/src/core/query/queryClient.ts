import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes default stale time per blueprint
      gcTime: 1000 * 60 * 60 * 24, // 24 hours garbage collection time
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
