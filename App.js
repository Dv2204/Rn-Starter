import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreenAssign from './src/screens/ListScreenAssign';
import ImageScreen from'./src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import AppOverview from './src/screens/AppOverview';
import SquareScreen from './src/screens/SquareScreen';
import CounterReducer from './src/screens/CounterScreenReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import Animation from './src/screens/Animation';
import SignUp from './src/screens/SignUp';
import Hactober from './src/screens/Hactober';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ListAssign: ListScreenAssign,
    Image: ImageScreen,
    CounterScreen: CounterScreen,
    Color: ColorScreen,
    Overview: AppOverview,
    Square: SquareScreen,
    CounterReducer: CounterReducer,
    Text: TextScreen,
    Box: BoxScreen,
    Animation: Animation,
    SignUp: SignUp,
    Hactober: Hactober
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
