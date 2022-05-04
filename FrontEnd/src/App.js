import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Routes from "./pages/routes";
import store from "./redux/store";
import { theme } from "./theme";
const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    </Provider>
  );
};

export default App;
