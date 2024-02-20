import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import AppContextProvider from "./context/appContext";

// Riduco la bundle size, permettendo un caricamento
// dell'app più veloce.
// Il JS dei componenti verrà scaricato all'occorrenza
import Loader from "./components/molecules/Loader";

const AppLayout = lazy(() => import("./components/layout/AppLayout"));
const MainPage = lazy(() => import("./components/page/MainPage"));
const PhotoPage = lazy(() => import("./components/page/PhotoPage"));
const NotFoundPage = lazy(() => import("./components/page/NotFoundPage"));

// QueryClient di TanStack Query
// Le query diventano stale dopo un'ora
// (Per evitare troppe chiamate alla API
// (unsplash ne da max 50 l'ora))
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Devtools TanStack Query */}
      <ReactQueryDevtools initialIsOpen={false} />

      <AppContextProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Navigate to="/photo" />} />
                <Route path="/photo" element={<MainPage />} />
                <Route path="/pic" element={<PhotoPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
