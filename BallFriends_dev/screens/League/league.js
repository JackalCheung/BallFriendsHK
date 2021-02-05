import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Moment from 'moment-timezone';

import listStyle from '../listStyle';

class League extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
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
        
        // Fetch data from API-football
        fetch(url, {
            "method": "GET",
            "headers": {
                // "x-rapidapi-key": "a21a94ececmshacc1a44ea7db60ep11676cjsn24a3bdf19db9",
                "x-rapidapi-key": "6b559c5a10msh8d4b74be47106f6p175828jsnab34535de49e",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: [...this.state.data, ...res.api.fixtures],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        this.forceUpdate()
        
    }

    naviFixture = (message) => {
        alert("Score in fulltime: " + message + ".\nFixture in development.")
    }

    displayOption = (event_date, score) => {
        var now = new Date()
        var match = new Date(event_date)
        if (now.getTime() > match.getTime()) {
            return (
                <Text style={listStyle.time}> {score} </Text>
            )
        } else {
            return (
                <Text style={listStyle.time}> {Moment(event_date).tz('Asia/Hong_Kong').format('HH:mm')} </Text>
            )
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={listStyle.itemContainer}>
                <TouchableOpacity style={listStyle.itemCard} onPress={() => { this.naviFixture(item.score.fulltime) }}>
                    <Text style={listStyle.homeTeam}> {item.homeTeam.team_name} </Text>
                    <Image style={listStyle.logo} source={{
                        uri: item.homeTeam.logo
                    }} />
                    {this.displayOption(item.event_date, item.score.fulltime)}
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
                    <Text style={listStyle.title} onPress={() => {
                        this.props.navigation.navigate('Standing', {
                            league_id: 2790
                        });
                    }}>Premier League</Text>
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