import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Moment from 'moment';

import listStyle from '../listStyle';

const testData =
{
    League: [{
        Name: "Premier League",
        Fixtures:
            [
                {
                    fixture_id: 0,
                    homeTeam: {
                        team_name: "Arsenal"
                    },
                    awayTeam: {
                        team_name: "Manchester United"
                    },
                    event_date: "2021-01-31T01:30:00+08:00",
                    goalsHomeTeam: 0,
                    goalsAwayTeam: 0,
                    score: {
                        halftime: "0-0",
                        fulltime: "0-0"
                    }
                },
                {
                    fixture_id: 1,
                    homeTeam: {
                        team_name: "Southampton"
                    },
                    awayTeam: {
                        team_name: "Aston Villa"
                    },
                    event_date: "2021-01-31T04:00:00+08:00",
                    goalsHomeTeam: 0,
                    goalsAwayTeam: 1,
                    score: {
                        halftime: "0-1",
                        fulltime: "0-1"
                    }
                }
            ]
    },
    {
        Name: "La Liga",
        Fixtures:
            [
                {
                    fixture_id: 2,
                    homeTeam: {
                        team_name: "Getafe"
                    },
                    awayTeam: {
                        team_name: "Alaves"
                    },
                    event_date: "2021-01-31T21:00:00+08:00",
                    goalsHomeTeam: 0,
                    goalsAwayTeam: 0,
                    score: {
                        halftime: "0-0",
                        fulltime: "0-0"
                    }
                },
                {
                    fixture_id: 3,
                    homeTeam: {
                        team_name: "Villarreal"
                    },
                    awayTeam: {
                        team_name: "Real Sociedad"
                    },
                    event_date: "2021-01-31T04:00:00+08:00",
                    goalsHomeTeam: 0,
                    goalsAwayTeam: 1,
                    score: {
                        halftime: "1-0",
                        fulltime: "1-1"
                    }
                }
            ]
    }]
};

class Friendly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: null,
            loading: false,
            refreshing: false
        }
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        this.setState({ loading: true })
        /* 
        // Fetch data from API-football
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/team/33/2790?timezone=Asia%2FHong_Kong", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a21a94ececmshacc1a44ea7db60ep11676cjsn24a3bdf19db9",
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
                this.setState({ error, loading: false });
            });
        */
    }

    _renderFixture = ({ item, index }) => {
        return (
            <View style={listStyle.itemContainer}>
                <TouchableOpacity style={listStyle.itemCard}
                    onPress={() => {
                        this.props.navigation.navigate('Fixture', {
                            fixture_id: item.fixture_id,
                            homeTeam: item.homeTeam.team_name,
                            awayTeam: item.awayTeam.team_name,
                            score: item.score.fulltime
                        });
                    }}>
                    <Text style={listStyle.homeTeam}> {item.homeTeam.team_name} </Text>
                    <Text style={listStyle.time}> {Moment(item.event_date).format('HH:mm')} </Text>
                    <Text style={listStyle.awayTeam}> {item.awayTeam.team_name} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    _renderLeague = ({ item, index }) => {
        // Render data from own database (league by league)
        return (
            <View style={listStyle.categoryContainer}>
                <View style={listStyle.categoryCard}>
                    <Text style={listStyle.title}>{item.Name}</Text>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={item.Fixtures}
                        renderItem={this._renderFixture}
                    />
                </View>
            </View>
        )
        /* 
        // Render data from API-football
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.card} onPress={() => { this.navFixture() }}>
                    <Text style={styles.homeTeam}> {item.homeTeam.team_name} </Text>
                    <Image style={styles.logo} source={{
                        uri: item.homeTeam.logo
                    }} />
                    <Text style={styles.time}> {Moment(item.event_date).format('HH:mm')} </Text>
                    <Image style={styles.logo} source={{
                        uri: item.awayTeam.logo
                    }} />
                    <Text style={styles.awayTeam}> {item.awayTeam.team_name} </Text>
                </TouchableOpacity>
            </View>
        )
        */
    }

    render() {
        // Extract data directly from own database
        return (
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={testData.League}
                renderItem={this._renderLeague}
            />
        );

        /*
        // Extract data directly from API-football
        return (
            <View style={styles.categoryContainer}>
                <View style={styles.categoryCard}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={this._renderLeague}
                    />
                </View>
            </View>
        );
        */
    }
}

export default Friendly;