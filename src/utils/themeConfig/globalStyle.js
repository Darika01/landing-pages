//@flow
import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';
import rootFonts from './rootFonts';
import reset from 'styled-reset';

const setRootFonts = () => {
    return Object.entries(breakpoints).map(([viewPortKey, viewPortValue]) => {
        const query = `@media (min-width: ${viewPortValue}) {
			font-size: ${rootFonts[viewPortKey]}
		}`;
        return query;
    });
};

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		min-height: 100%;
		height: auto;
		font-size: 10px;
		${setRootFonts()};
	},
	body {
		background: #FFFFFF;
		* {
			font-family: 'Montserrat';
		}
	}
	
`;
export default GlobalStyle;
