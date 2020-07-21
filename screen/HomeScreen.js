import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import Icon from "../public/component/Icon/Icon";
import {EventEmitter} from "events";

export default class HomeScreen extends React.Component {
    eventEmitter: EventEmitter = new EventEmitter();

    constructor(props) {
        super(props);
        this.state = {
            webSocketStr: 'ws://192.168.10.84:9090',
            destinationSelected: '',
        };
        this.onSelectBalise = this.onSelectBalise.bind(this);
    }

    onSelectBalise(balise) {
        this.setState(() => ({destinationSelected: balise}));
        if (!!balise) {
            this.eventEmitter.emit('selected', balise);
        }
    }

    render() {
        let icons = [];
        icons[0] = {message: "Toilette", iconSource: require('../assets/images/toilette.png')};
        icons[1] = {message: "Repas", iconSource: require('../assets/images/repas.png')};
        icons[2] = {message: "Salle de bain", iconSource: require('../assets/images/salledebain.png')};
        icons[3] = {message: "Chambre", iconSource: require('../assets/images/chambre.png')};
        icons[4] = {message: "Accueil", iconSource: require('../assets/images/accueil.png')};
        icons[5] = {message: "Jardin", iconSource: require('../assets/images/jardin.png')};
        icons[6] = {message: "Jeux", iconSource: require('../assets/images/jeux.png')};
        icons[7] = {message: "Medicament", iconSource: require('../assets/images/soin.png')};
        icons[8] = {message: "Alerte", iconSource: require('../assets/images/alerte.png')};

        let rows = [];
        for (let i = 0; i < 3; i++) {
            let cols = [];
            for (let j = 0; j < 3; j++) {
                cols.push(<Col style={styles.column} key={i * 3 + j}>
                    <Icon eventEmitter={this.eventEmitter} onSelect={this.onSelectBalise}
                          source={icons[i * 3 + j].iconSource} size={90}
                          socket={this.state.webSocketStr} message={icons[i * 3 + j].message}/>
                </Col>);
            }
            rows.push(<Row key={i} size={1} style={styles.line}>{cols}</Row>);

        }

        return (
            <Grid style={styles.container}>
                <Row size={1} style={styles.titleLine}>
                    <Text style={styles.title}>Qenvi Smart App</Text>
                </Row>
                <Row size={0.5} style={styles.destinationLine}>
                    <Text style={styles.destination}>{"Destinations"} </Text>
                </Row>
                <Row size={0.5}>
                    <Text style={styles.selectedDestination}>{this.state.destinationSelected} </Text>
                </Row>
                {rows}
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {
        width: 100,
    },
    line: {
        marginLeft: 15,
    },
    titleLine: {
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
    },
    destination: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    selectedDestination: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});