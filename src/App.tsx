import "./global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme/theme.provider";
import { router } from "./routes";

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzasho-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </HelmetProvider>
  );
};
