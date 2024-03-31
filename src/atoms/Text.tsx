import { Text as Instance, useTheme, type TextProps } from '@rneui/themed';
import React, { useMemo, type FC } from 'react';
import { StyleSheet } from 'react-native';

export interface ITextProps extends TextProps {
	testID?: string;
	color?: string;
	size?: number;
}

export const Text: FC<ITextProps> = ({ color, size: fontSize, style, ...props }: ITextProps) => {
	const _style = useMemo(() => {
		const styles = [style];

		if (color) {
			styles.push({ color });
		}

		if (fontSize) {
			styles.push({ fontSize });
		}

		return StyleSheet.flatten(styles);
	}, [color, fontSize, style]);

	return <Instance {...props} style={_style} />;
};

export const SmallText: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={12} {...props} />;
};

export const Title: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={18} {...props} />;
};

export const H1: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={24} {...props} />;
};

export const H2: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={20} {...props} />;
};

export const H3: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={18} {...props} />;
};

export const H4: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={16} {...props} />;
};

export const H5: FC<ITextProps> = (props: ITextProps) => {
	return <Text size={14} {...props} />;
};

export const ActiveText: FC<ITextProps> = (props: ITextProps) => {
	const { theme } = useTheme();
	return <Text color={theme.colors.active} {...props} />;
};

export const InactiveText: FC<ITextProps> = (props: ITextProps) => {
	const { theme } = useTheme();
	return <Text color={theme.colors.inactive} {...props} />;
};
