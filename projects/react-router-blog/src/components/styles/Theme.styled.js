// root theme styles
// https://blog.agney.dev/theming-on-styled-components/

export const LightTheme = {
	colors: {
		primary: '#19A0F6',
		primaryLight: 'rgba(25, 160, 246, 0.1)',
		secondary: '#db757f',
		primaryBG: '#ffffff',
		secondaryBG: '#f6f7f9',
		heading: '#23272f',
		paragraph: '#404756',
		paragraphLight: '#99A1B3',
		border: '#EBEBEB',
		inputBG: '#EBECF0',
		// misc
		transition: 'ease .2s',
		boxShadow: '#eeeeee',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);',
		white: '#fff',
		black: '#000',
		lightGrey: '#f8f8f8',
		tertiary: '#FFAD42',
		green: '#45fa39',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	}
};

export const DarkTheme = {
	colors: {
		primary: '#4285f4',
		primaryLight: 'rgba(66, 133, 244, 0.2)',
		secondary: '#dd6571',
		primaryBG: '#23272f',
		secondaryBG: '#343a46',
		heading: '#f6f7f9',
		paragraph: '#EBECF0',
		paragraphLight: '#99A1B3',
		border: '#414A59',
		inputBG: '#343A46',
		// misc
		transition: 'ease .2s',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .05)',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0, 0, 0, .05)',
		white: '#ffffff',
		black: '#000000',
		lightGrey: '#f8f8f8',
		tertiary: '#FFAD42',
		green: '#45fa39',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	}
};

export const mode = {
	light: LightTheme,
	dark: DarkTheme
};
