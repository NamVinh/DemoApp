import { type StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';

import { Text } from 'atoms';
import DialogTask from 'components/DialogTask';
import Task from 'components/Task';
import useModal from 'hooks/useModal';
import { type RootStackParamList } from 'navigation';
import useStyles from 'screens/Home/styles';
import { type TaskItem } from 'types/models/Task';
import { searchTreeData } from 'utils/treeData';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
	navigation: ProfileScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const styles = useStyles();
	const [search, setSearch] = useState('');
	const [taskItems, setTaskItems] = useState<TaskItem[]>([
		{ title: 'Email from John Doe', description: "Hey, I'm John Doe" },
	]);
	const { handleOpen, handleCancel } = useModal();

	const handleAddTask = (data: any) => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, data]);
		handleCancel();
	};

	return (
		<View style={styles.home}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
				<TextInput
					style={styles.input}
					placeholder="Write a task"
					value={search}
					onChangeText={(text) => {
						return setSearch(text);
					}}
					enterKeyHint="enter"
				/>
				<TouchableOpacity
					onPress={() => {
						handleOpen('dialog-task');
					}}
				>
					<View style={styles.addWrapper}>
						<Text>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
			<DialogTask name="dialog-task" onSubmit={handleAddTask} />
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>Today's tasks</Text>
					<View style={styles.items}>
						{searchTreeData(taskItems, search).map((item, index) => {
							return <Task title={item.title} description={item.description} />;
						})}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
export default HomeScreen;
