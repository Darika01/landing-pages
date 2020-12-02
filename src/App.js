import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import JustDoIt from 'components/pages/JustDoIt/JustDoIt';
import NotFound from 'components/pages/NotFound/NotFound';
import justDoItTheme from 'utils/themeConfig/themes/justDoItTheme';
import GlobalStyle from 'utils/themeConfig/globalStyle';

function App() {
    const { pathname } = useLocation();
    return (
        <Switch>
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
            <Route exact path="/" component={JustDoIt} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    );
}

export default function AppContainer() {
    return (
        <ThemeProvider theme={justDoItTheme}>
            <GlobalStyle />
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    );
}
