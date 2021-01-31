import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Moment from 'moment';

import listStyle from '../listStyle';

class League extends React.Component {
    constructor(date) {
        super();

        this.state = {
            date: date.date,
            data: [],
            error: null,
            loading: false,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        this.setState({ loading: true })
        var url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2790/" + Moment(this.state.date).format("YYYY-MM-DD") + "?timezone=Asia%2FHong_Kong"
        console.log(url)
        /*
        // Fetch data from API-football
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6b559c5a10msh8d4b74be47106f6p175828jsnab34535de49e",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    data: [...this.state.data, ...res.api.fixtures],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(err => {
                this.setState({ error, loading: false });
            });
        this.forceUpdate()
        */
    }

    naviFixture = () => {
        alert("Fixture in development.")
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={listStyle.itemContainer}>
                <TouchableOpacity style={listStyle.itemCard} onPress={() => { this.naviFixture() }}>
                    <Text style={listStyle.homeTeam}> {item.homeTeam.team_name} </Text>
                    <Image style={listStyle.logo} source={{
                        uri: item.homeTeam.logo
                    }} />
                    <Text style={listStyle.time}> {Moment(item.event_date).format('HH:mm')} </Text>
                    <Image style={listStyle.logo} source={{
                        uri: item.awayTeam.logo
                    }} />
                    <Text style={listStyle.awayTeam}> {item.awayTeam.team_name} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={listStyle.categoryContainer}>
                <View style={listStyle.categoryCard}>
                    <Text style={listStyle.title}>Premier League</Text>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

export default League;