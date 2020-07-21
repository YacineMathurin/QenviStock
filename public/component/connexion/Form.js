import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button } from 'react-native';


export default class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', 
                   password:'', 
                   buttonStyles: { backgroundColor: '#841584', color:'white'}, 
                   data: null,
                   urlToFetch: props.urlToFetch,
                 };
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(localtext) => this.setState({username : localtext})}
          value={this.state.username}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(localtext) => this.setState({password : localtext})}
          value={this.state.password}
        />
        <Button
          onPress={() =>{
              fetch(this.state.urlToFetch == null ? 'https://facebook.github.io/react-native/movies.json': this.state.urlToFetch, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
              })
              .then((response) => response.text())
              .then((res) => {
                  alert(res);
                  navigate('Main');
              })
              .catch((error) => {
                  console.error(error);
              }
              );
            }
          }
          title="Log in"
          buttonStyles = {this.state.buttonStyles}
        />
      </View>
    );
  }
}