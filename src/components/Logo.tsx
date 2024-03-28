// import React, { type FC } from 'react';
// import { StyleSheet, type ImageProps } from 'react-native';
// import { Image } from 'react-native-elements';

// export interface ILogoProps extends Omit<ImageProps, 'source'> {
// 	testID?: string;
// 	source?: string | { uri: string };
// }

// export const Logo: FC<ILogoProps> = ({ style, ...props }: ILogoProps) => {
// 	return <Image {...props} style={StyleSheet.flatten([styles.container, style])} source={Images.logo} />;
// };

// const styles = StyleSheet.create({
// 	container: {
// 		width: 200,
// 		height: 50,
// 		resizeMode: 'contain',
// 	},
// });
