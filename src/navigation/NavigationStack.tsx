import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { get } from 'lodash';
import tw from 'twrnc';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-elements';
import { Home } from '../screens/Home';
import Login from '../screens/Login';
import routes from './routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	const { theme } = useTheme();

	return (
		<Tab.Navigator
			initialRouteName={routes.Home}
			tabBarOptions={{
				allowFontScaling: false,
				showLabel: false,
				activeTintColor: get(theme.colors, 'active'),
				inactiveTintColor: get(theme.colors, 'inactive'),
			}}
			screenOptions={{
				tabBarStyle: { backgroundColor: tw`bg-white` },
			}}
		>
			<Tab.Screen
				name={routes.Home}
				component={Home}
				options={{
					headerTitle: () => {
						return <Logo style={{ width: 100 }} />;
					},
					tabBarIcon: ({ color }) => {
						return <Feather name="home" size={24} color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const PublicNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={routes.Login} component={Login} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};

const PermissionNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerLeft: ({ onPress, canGoBack }) => {
					return (
						canGoBack && (
							<Button type="clear" onPress={onPress} icon={{ type: 'feather', name: 'chevron-left', size: 30 }} />
						)
					);
				},
			}}
		>
			<Stack.Screen name={routes.Root} component={TabNavigator} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};

const linking = {
	prefixes: ['pcr://'],
	config: {
		screens: {
			Home: routes.Home,
		},
	},
};

export const Navigator = () => {
	const isAuth = false;
	const navigationRef = useNavigationContainerRef();
	return (
		<View>
			<View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
				<Logo />
			</View>
			<NavigationContainer linking={linking} ref={navigationRef}>
				{isAuth ? <PermissionNavigator /> : <PublicNavigator />}
			</NavigationContainer>
		</View>
	);
};
