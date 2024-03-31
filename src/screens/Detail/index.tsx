import { type StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

import { Button, Text } from 'atoms';
import { type RootStackParamList } from 'navigation';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type DetailScreenProps = {
	navigation: ProfileScreenNavigationProp;
};

const DetailScreen = ({ navigation }: DetailScreenProps) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Button
				title="Go to Details... again"
				onPress={() => {
					return navigation.push('Detail');
				}}
			/>
			<Button
				title="Go to Home"
				onPress={() => {
					return navigation.navigate('Home');
				}}
			/>
			<Button
				title="Go back"
				onPress={() => {
					return navigation.goBack();
				}}
			/>
		</View>
	);
};
export default DetailScreen;
