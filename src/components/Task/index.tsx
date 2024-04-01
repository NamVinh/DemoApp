import React from 'react';

import { Icon, ListItem } from '@rneui/themed';
import { Button } from 'atoms';
import useStyles from 'components/Task/styles';

export interface TaskProps {
	title: string;
	description: string;
	onUpdate: () => void;
	onDelete: () => void;
}

const Task = ({ title, description, onUpdate, onDelete }: TaskProps) => {
	const styles = useStyles();

	return (
		<ListItem.Swipeable
			leftWidth={80}
			rightWidth={90}
			minSlideWidth={40}
			containerStyle={styles.container}
			leftContent={
				<Button
					containerStyle={styles.containerButton}
					type="clear"
					icon={{
						name: 'archive-outline',
						type: 'material-community',
					}}
					onPress={onUpdate}
				/>
			}
			rightContent={
				<Button
					containerStyle={styles.containerButton}
					type="clear"
					icon={{ name: 'delete-outline' }}
					onPress={onDelete}
				/>
			}
		>
			<Icon name="label-important-outline" type="material" />
			<ListItem.Content>
				<ListItem.Title>{title}</ListItem.Title>
				<ListItem.Subtitle>{description}</ListItem.Subtitle>
			</ListItem.Content>
			<ListItem.Chevron />
		</ListItem.Swipeable>
	);
};
export default Task;
