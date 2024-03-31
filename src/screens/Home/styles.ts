import { makeStyles } from '@rneui/themed';
import tw from 'twrnc';

const useStyles = makeStyles({
	home: {
		...tw`flex-1 bg-[#E8EAED]`,
	},
	tasksWrapper: {
		...tw`pt-8 pl-5 pr-5`,
	},
	sectionTitle: {
		...tw`text-[24px] font-bold`,
	},
	items: {
		marginTop: 30,
	},
	writeTaskWrapper: {
		...tw`pt-5 w-full flex flex-row justify-around items-center`,
	},
	input: {
		...tw`p-2 pl-4 bg-white rounded-[60px] border-[#C0C0C0] border w-[80%] h-10`,
	},
	addWrapper: {
		...tw`w-10 h-10 bg-white rounded-[60px] border-[#C0C0C0] border justify-center items-center`,
	},
});

export default useStyles;
