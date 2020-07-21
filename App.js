import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

// If any pre-operation, should be written in HomeScreen

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           <AppNavigator />
//           {/* <Navigation /> */}
//           {/* <Text>Salam !</Text> */}
//         </View>
//       );
//     }
//   }

//   async _loadResourcesAsync() {
//       const images = [
//         require('./assets/images/icon.png'),
//         require('./assets/icon/QENVI_ROBOTICS_LOGO.png'),
//       ];
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // marginTop: '-12%'
//     // marginTop: '-12%'
//   },
// });
