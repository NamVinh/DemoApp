import { makeStyles } from '@rneui/themed';
import tw from 'twrnc';

const useStyles = makeStyles({
	button: {
		...tw`rounded-md w-56 m-5`,
	},
	buttonContainer: {
		...tw`m-5 justify-center items-center`,
	},
});

export default useStyles;
