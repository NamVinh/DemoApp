import { createTheme } from '@rneui/themed';
import { ColorDark, ColorLight } from 'theme/color';

export const theme = createTheme({
	lightColors: ColorLight,
	darkColors: ColorDark,
	components: {
		Button: {
			raised: true,
		},
	},
});
