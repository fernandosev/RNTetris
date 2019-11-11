import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import GameMenu from './GameMenu';
import Game from './Game';

const MainNavigator = createStackNavigator({
    GameMenu: {screen: GameMenu},
    Game: {screen: Game},
});

// Hide the header from GameMenu stack
GameMenu.navigationOptions = {
	header: null,
};

// Hide the header from Game stack
Game.navigationOptions = {
	header: null,
};

const App = createAppContainer(MainNavigator);

export default App;