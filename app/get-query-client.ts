import { QueryClient, isServer } from "@tanstack/react-query";

function doQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    return doQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = doQueryClient();
    return browserQueryClient;
  }
}
