import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const ReactQueryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default ReactQueryContainer;
