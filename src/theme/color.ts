interface IColors {
	primary: string;
	secondary: string;
	text: string;
	border: string;
	card: string;
	info: string;
	status: string;
	active: string;
	inactive: string;
	inputBorder: string;

	// default colors
	background: string;
	white: string;
	black: string;
	grey0: string;
	grey1: string;
	grey2: string;
	grey3: string;
	grey4: string;
	grey5: string;
	greyOutline: string;
	searchBg: string;
	success: string;
	warning: string;
	error: string;
	disabled: string;
}

export interface Theme {
	colors: IColors;
	mode: 'light' | 'dark';
	spacing: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	};
}

export const ColorLight: IColors = {
	primary: '#1E1E1E',
	secondary: '#ca71eb',
	background: '#2B2B2B',
	text: '#FFF',
	border: '#949494',
	card: '#575454',
	success: '#52c41a',
	error: '#FF2300',
	warning: '#FFD500',
	info: '#FF9900',
	status: '#04B404',
	active: '#D61B0A',
	inactive: '#9E9E9E',
	inputBorder: '#F6F6F7',

	white: '#ffffff',
	black: '#242424',
	grey0: '#393e42',
	grey1: '#43484d',
	grey2: '#5e6977',
	grey3: '#86939e',
	grey4: '#bdc6cf',
	grey5: '#e1e8ee',
	greyOutline: '#bbb',
	searchBg: '#303337',
	disabled: 'hsl(208, 8%, 90%)',
};

export const ColorDark: IColors = {
	primary: '#1E1E1E',
	secondary: '#aa49eb',
	background: '#191818',
	text: '#FFF',
	border: '#949494',
	card: '#575454',
	success: '#439946',
	error: '#bf2c24',
	warning: '#cfbe27',
	info: '#FF9900',
	status: '#04B404',
	active: '#D61B0A',
	inactive: '#9E9E9E',
	inputBorder: '#F6F6F7',

	white: '#080808',
	black: '#f2f2f2',
	grey0: '#393e42',
	grey1: '#43484d',
	grey2: '#5e6977',
	grey3: '#86939e',
	grey4: '#bdc6cf',
	grey5: '#e1e8ee',
	greyOutline: '#bbb',
	searchBg: '#303337',
	disabled: 'hsl(208, 8%, 90%)',
};
