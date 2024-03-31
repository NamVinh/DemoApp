import { makeStyles } from '@rneui/themed';
import tw from 'twrnc';

interface Props {
	error?: boolean;
}

const useStyles = makeStyles((theme, props: Props) => {
	return {
		container: {
			...tw`border-b-0`,
		},
		containerStyle: {
			marginBottom: 5,
			paddingHorizontal: 0,
		},
		inputContainerStyle: {
			height: 56,
			borderWidth: 1,
			borderRadius: 10,
			paddingHorizontal: 10,
			borderColor: props.error ? theme.colors.error : theme.colors.inactive,
		},
		smallInputContainerStyle: {
			height: 45,
		},
		labelStyle: {
			marginBottom: 5,
			color: theme.colors.primary,
		},
	};
});

export default useStyles;
