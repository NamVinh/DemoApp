import { get } from 'lodash';
import React, { useMemo, type FC, type JSXElementConstructor, type ReactElement } from 'react';
import { StyleSheet, View, type RefreshControlProps, type ViewProps } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export interface IContainerProps extends ViewProps {
	testID?: string;
	full?: boolean;
	padding?: number;
	refreshControl?: ReactElement<RefreshControlProps, string | JSXElementConstructor<any>> | undefined;
	scrollable?: boolean;
	direction?: 'row' | 'column';
	align?: 'start' | 'center' | 'end';
	content?: 'start' | 'center' | 'end';
}

export const Container: FC<IContainerProps> = ({
	style,
	align,
	content,
	direction,
	scrollable,
	refreshControl,
	full,
	padding,
	...props
}: IContainerProps) => {
	const flexFull = useMemo(() => {
		return full ? styles.full : {};
	}, [full]);

	const alignItems = useMemo(() => {
		return align && get(styles, `${align}Align`);
	}, [align]);

	const flexDirection = useMemo(() => {
		return direction && get(styles, direction);
	}, [direction]);

	const justifyContent = useMemo(() => {
		return content && get(styles, `${content}Content`);
	}, [content]);

	if (scrollable) {
		return (
			<ScrollView
				{...props}
				refreshControl={refreshControl}
				contentContainerStyle={StyleSheet.flatten([
					styles.container,
					alignItems,
					justifyContent,
					flexDirection,
					{ padding },
					style,
				])}
			/>
		);
	}

	return (
		<View
			{...props}
			style={StyleSheet.flatten([
				styles.container,
				flexFull,
				alignItems,
				justifyContent,
				flexDirection,
				{ padding },
				style,
			])}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		backgroundColor: '#FFF',
	},
	full: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
	},
	column: {
		flexDirection: 'column',
	},
	startAlign: {
		alignItems: 'flex-start',
	},
	centerAlign: {
		alignItems: 'center',
	},
	endAlign: {
		alignItems: 'flex-end',
	},
	startContent: {
		justifyContent: 'flex-start',
	},
	centerContent: {
		justifyContent: 'center',
	},
	endContent: {
		justifyContent: 'flex-end',
	},
});
