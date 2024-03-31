import 'react-native-gesture-handler';

import { ThemeProvider } from '@rneui/themed';
import { Suspense } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import Toast from 'react-native-toast-message';

import { Navigator } from 'navigation';
import { theme } from 'theme';

enableScreens(false);

const App = () => {
	return (
		<SafeAreaProvider>
			<TouchableWithoutFeedback
				onPress={() => {
					return Keyboard.dismiss();
				}}
			>
				<ThemeProvider theme={theme}>
					<Suspense fallback={null}>
						<StatusBar barStyle="dark-content" />
						<Navigator />
						<Toast />
					</Suspense>
				</ThemeProvider>
			</TouchableWithoutFeedback>
		</SafeAreaProvider>
	);
};

export default App;
