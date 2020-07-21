import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.source,
            size: this.props.size != null ? this.props.size : 50,
            strSocket: this.props.socket,
            socket: new WebSocket(this.props.socket),
            message: this.props.message,
            onSelect: this.props.onSelect,
            eventEmitter: this.props.eventEmitter,
            toggle: false
        };
        this.state.eventEmitter.on('selected', (res) => {
            if (this.state.message !== res && this.state.toggle) {
                this.toggle();
            }
        })
    }

    webSocketLog() {
        try {
            this.state.socket = new WebSocket(this.state.strSocket);
        } catch (exception) {
            console.error(exception);
        }
        this.state.socket.onerror = function (error) {
            console.error(error);
        };
        this.state.socket.onopen = function (event) {
            console.log("Connexion établie.");
            // Lorsque la connexion se termine.
            this.onclose = function (event) {
                console.log("Connexion terminé.");
            };
            // Lorsque le serveur envoi un message.
            this.onmessage = function (event) {
                console.log("Message:", event.data);
            };
        };
    }

    render() {
        const toggle = this.state.toggle;
        const styles = StyleSheet.create({
            button: {
                width: this.state.size,
                height: this.state.size,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 10,
                shadowColor: '#303838',
                shadowOffset: {width: 0, height: 5},
                shadowRadius: 10,
                shadowOpacity: 0.35,
            },
            image: {
                width: this.state.size - (this.state.size / 5),
                height: this.state.size - (this.state.size / 5),
                borderRadius: 20,
            }
        });
        const stylesSelected = StyleSheet.create({
            button: {
                width: this.state.size,
                height: this.state.size,
                backgroundColor: 'green',
                borderRadius: 20,
                padding: 10,
                shadowColor: '#303838',
                shadowOffset: {width: 0, height: 5},
                shadowRadius: 10,
                shadowOpacity: 0.35,
            },
            image: {
                width: this.state.size - (this.state.size / 5),
                height: this.state.size - (this.state.size / 5),
                borderRadius: 20,
            }
        });
        return (
            <TouchableOpacity style={!toggle ? styles.button : stylesSelected.button} onPress={() => {
                this.state.socket.send(this.state.message);
                this.state.socket.close();
                this.webSocketLog();
                this.toggle();
                this.state.onSelect(!toggle ? this.state.message : '');
            }}>
                <Image source={this.state.source} style={styles.image}/>
            </TouchableOpacity>
        );
    }

    toggle() {
        this.setState(prevState => ({toggle: !prevState.toggle}));
    }
}

