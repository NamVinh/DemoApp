// themed.d.ts
import '@rneui/themed';

declare module '@rneui/themed' {
	export interface Colors {
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
}
