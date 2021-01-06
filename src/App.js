//@flow
import React, { useState } from 'react';
// import API from 'api';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import JustDoIt from 'components/pages/JustDoIt/JustDoIt';
import NotFound from 'components/pages/NotFound/NotFound';
import commonTheme from 'utils/themeConfig/themes/commonTheme';
import justDoItTheme from 'utils/themeConfig/themes/justDoItTheme';
import GlobalStyle from 'utils/themeConfig/globalStyle';
import HorizontalNavbar from 'components/core/Navbar/HorizontalNavbar/HorizontalNavbar';
import VerticalNavbar from 'components/core/Navbar/VerticalNavbar/VerticalNavbar';
import useWindowDimensions from 'components/commonHooks/WindowDimensions';
import breakpoints from 'utils/themeConfig/breakpoints';

function App() {
    const { pathname } = useLocation();
    // API.interceptors.response.use(
    //     res => {
    //         console.log(res);
    //         return res;
    //     },
    //     err => {
    //         console.log(err);
    //         return Promise.reject(err);
    //     }
    // );
    return (
        <div style={{ marginTop: '8.4rem' }}>
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/" component={JustDoIt} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default function AppContainer() {
    const { width } = useWindowDimensions();
    const [IsScrollBlock, setIsScrollBlock] = useState(false);
    return (
        <ThemeProvider theme={{ ...commonTheme, ...justDoItTheme }}>
            <GlobalStyle isScrollBlock={IsScrollBlock} />
            <Router>
                {width < breakpoints.lg.replace('px', '') ? (
                    <VerticalNavbar setIsMobileMenuOpen={setIsScrollBlock} />
                ) : (
                    <HorizontalNavbar />
                )}
                <App />
            </Router>
        </ThemeProvider>
    );
}
