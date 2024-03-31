import { Button as Instance, type ButtonProps } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { get } from 'lodash';
import React, { useMemo, type FC } from 'react';
import { StyleSheet } from 'react-native';

export interface IButtonProps extends ButtonProps {
	testID?: string;
	color?: 'red' | string;
}

export const Button: FC<IButtonProps> = ({ type, color, ...others }: IButtonProps) => {
	const { theme } = useTheme();

	const props = useMemo(() => {
		const obj = {
			...others,
			type,
			iconContainerStyle: StyleSheet.flatten([others.iconContainerStyle, { marginLeft: 0 }]),
		};

		if (color) {
			switch (type) {
				case 'clear': {
					obj.titleStyle = StyleSheet.flatten([obj.titleStyle, { color: get(theme.colors, color) }]);
					break;
				}

				case 'outline': {
					obj.buttonStyle = StyleSheet.flatten([obj.buttonStyle, { borderColor: get(theme.colors, color) }]);
					break;
				}

				default: {
					obj.buttonStyle = StyleSheet.flatten([obj.buttonStyle, { backgroundColor: get(theme.colors, color) }]);
					break;
				}
			}
		}

		return obj;
	}, [others, type, color]);

	return <Instance {...props} />;
};

export const SubmitButton: FC<IButtonProps> = ({ style, ...props }: IButtonProps) => {
	const { theme } = useTheme();

	return (
		<Instance
			{...props}
			style={StyleSheet.flatten([style, styles.submit, { backgroundColor: theme.colors?.primary }])}
		/>
	);
};

export const CancelButton: FC<IButtonProps> = ({ style, ...props }: IButtonProps) => {
	const { theme } = useTheme();

	return (
		<Instance
			{...props}
			style={StyleSheet.flatten([style, styles.submit, { backgroundColor: theme.colors?.primary }])}
		/>
	);
};

const styles = StyleSheet.create({
	submit: {},
});
