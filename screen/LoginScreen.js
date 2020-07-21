import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import  ConnextionForm  from '../public/component/connexion/Form';
import ConnextionForm from '../public/component/connexion/Form';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Connection',
    };
    constructor(props) {
        super(props);
        this.state = { url: 'https://192.168.10.11/reactBackend/connexion/login.php' };
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <ConnextionForm urlToFetch={this.state.url}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});