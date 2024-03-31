import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import { Logo } from 'components/Logo';
import DetailScreen from 'screens/Detail';
import HomeScreen from 'screens/Home';
import Login from 'screens/Login';
import SettingsScreen from 'screens/Settings';
import routes from './routes';

export type RootStackParamList = {
	Root: undefined;
	Login: undefined;

	Home: undefined;
	Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	// const { theme } = useTheme();

	return (
		<Tab.Navigator
			initialRouteName={routes.Home}
			screenOptions={{
				tabBarStyle: { backgroundColor: 'white' },
			}}
		>
			<Tab.Screen
				name={routes.Home}
				component={HomeScreen}
				options={{
					headerTitle: () => {
						return <Logo style={{ width: 100 }} />;
					},
					tabBarIcon: ({ color }) => {
						return <Icon name="home" size={24} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name={routes.Settings as keyof RootStackParamList}
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ color }) => {
						return <Icon name="settings" size={24} color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const PublicNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.Login as keyof RootStackParamList}
				component={Login}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const PermissionNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.Root as keyof RootStackParamList}
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={routes.Detail as keyof RootStackParamList}
				component={DetailScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export const Navigator = () => {
	const isAuth = true;

	return <NavigationContainer>{isAuth ? <PermissionNavigator /> : <PublicNavigator />}</NavigationContainer>;
};
