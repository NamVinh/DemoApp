import { Input as Instance, type InputProps } from '@rneui/themed';
import useStyles from 'components/Fields/InputField/styles';
import { get } from 'lodash';
import React, { type FC } from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';

export interface IInputProps extends InputProps {
	testID?: string;
	error?: string;
	size?: 'small' | 'normal';
	control: any;
	name: string;
	errors: any;
	helperText?: string;
}

export const InputField: FC<IInputProps> = React.forwardRef(
	(
		{
			style,
			errors,
			size = 'normal',
			inputContainerStyle,
			containerStyle,
			labelStyle,
			name,
			control,
			helperText,
			...restProps
		}: IInputProps,
		ref,
	) => {
		const error = helperText || get(errors, `${name}.message`);
		const styles = useStyles({ error: !!error });

		const styling = {
			style: StyleSheet.flatten([styles.container, style]),
			labelStyle: StyleSheet.flatten([styles.labelStyle, labelStyle]),
			containerStyle: StyleSheet.flatten([styles.containerStyle, containerStyle]),
			inputContainerStyle: StyleSheet.flatten([
				styles.inputContainerStyle,
				size === 'small' && styles.smallInputContainerStyle,
				inputContainerStyle,
			]),
		};

		return (
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, onBlur, value } }) => {
					return (
						<Instance
							autoCapitalize="none"
							{...restProps}
							{...styling}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							renderErrorMessage
							errorMessage={error}
							ref={ref}
						/>
					);
				}}
			/>
		);
	},
);
