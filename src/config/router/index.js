import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, StudyGuide, Message, MessageWhatsApp } from '../../containers/pages';

const HomeStack = createStackNavigator(
	{
		Home,
		StudyGuide
	},
	{
		headerMode: 'none',
		initialRouteParams: 'Home'
	}
)

const MessageStack = createStackNavigator(
	{
		Message,
		MessageWhatsApp
	},
	{
		headerMode: 'none',
		initialRouteParams: 'Message'
	}
)

const Router = createSwitchNavigator(
	{
		HomeStack,
		MessageStack
	},
	{
		headerMode: 'none',
		initialRouteParams: 'HomeStack'
	}
);
  
export default createAppContainer(Router);