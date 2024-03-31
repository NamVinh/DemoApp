import { makeStyles } from '@rneui/themed';
import tw from 'twrnc';

const useStyles = makeStyles({
	container: {
		...tw`bg-white mt-2`,
	},
	containerButton: {
		...tw`flex justify-center bg-[#f4f4f4] mt-2 h-full`,
	},
});

export default useStyles;
