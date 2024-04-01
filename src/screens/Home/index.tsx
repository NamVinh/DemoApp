import { type StackNavigationProp } from '@react-navigation/stack';
import React, { Fragment, useState } from 'react';
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
	const [taskItems, setTaskItems] = useState<TaskItem[]>([]);
	const { handleOpen, handleCancel } = useModal();

	const handleAddTask = (data: any) => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, data]);
		handleCancel();
	};

	const handleUpdateTask = (index: number, data: TaskItem) => {
		Keyboard.dismiss();
		setTaskItems((prev) => {
			return prev.map((item, indexItem) => {
				return index === indexItem ? data : item;
			});
		});
		handleCancel();
	};

	const handleDelete = (index: number) => {
		const itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
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
							return (
								<Fragment key={index}>
									<Task
										title={item.title}
										key={index}
										description={item.description}
										onDelete={() => {
											handleDelete(index);
										}}
										onUpdate={() => {
											handleOpen(`dialog-task-${index}`);
										}}
									/>
									<DialogTask
										name={`dialog-task-${index}`}
										item={item}
										onSubmit={(data) => {
											return handleUpdateTask(index, data as TaskItem);
										}}
									/>
								</Fragment>
							);
						})}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
export default HomeScreen;
