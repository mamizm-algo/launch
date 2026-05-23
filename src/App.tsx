import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Sandbox from "./pages/Sandbox";
import LaunchingSoon from "./pages/LaunchingSoon";
import NotFound from "./pages/NotFound";
import RouteTracker from "./hooks/route-tracker";

const queryClient = new QueryClient();

const App = () => {
  const router = createHashRouter([
    {
      element: <RouteTracker />,
      children: [
        { path: "/", element: <LaunchingSoon /> },
        { path: "/sandbox", element: <Sandbox /> },
        {
          /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
