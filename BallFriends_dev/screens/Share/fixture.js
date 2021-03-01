import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

import Theme from '../Styles/theme';

const TopTab = createMaterialTopTabNavigator();

class Fixture extends React.Component {

    constructor(props) {
        super(props);

        var { params } = props.route;

        this.state = {
            data: [],
            fixture_id: params.fixture_id,
            homeTeam: params.homeTeam,
            awayTeam: params.awayTeam,
            score: params.score,
            index: 0,
            data: [],
            error: null,
            loading: false,
            refreshing: false
        }
    }

    componentDidMount = () => {
        this.getFixtureDetail();
    }



    getFixtureDetail = () => {
        var url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/id/" + this.state.fixture_id + "?timezone=Asia%2FHong_Kong"
        /*
        // Fetch data from API-football
        fetch(url, {
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
                this.setState({ error: err, loading: false });
            });
        */
    }

    initialLayout = () => {
        width: Dimensions.get('window').width
    }

    setIndex = (index) => {
        this.state.index = index
    }

    MediaScreen = () => {
        return (
            <View style={{ backgroundColor: Theme.primaryColor }}>
                <Text>Media in development.</Text>
            </View>
        );
    }

    DetailScreen = () => {
        return (
            <View style={{ backgroundColor: "green" }}>
                <Text>Detail in development.</Text>
            </View>
        );
    }

    LineupScreen = () => {
        return (
            <View style={{ backgroundColor: "orange" }}>
                <Text>Lineup in development.</Text>
            </View>
        );
    }

    StatsScreen = () => {
        return (
            <View style={{ backgroundColor: "orange" }}>
                <Text>Stats in development.</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.scoreContainer}>
                    <View style={styles.scoreCard}>
                        <Text style={{ flex: 1.5, color: "white", textAlign: 'center', backgroundColor: "blue" }}>Home Team: {this.state.homeTeam}</Text>
                        <Text style={{ flex: 1, textAlign: 'center', backgroundColor: "yellow" }}>Score: {this.state.score}</Text>
                        <Text style={{ flex: 1.5, color: "white", textAlign: 'center', backgroundColor: "blue" }}>Away Team: {this.state.awayTeam}</Text>
                    </View>
                </View>
                <SafeAreaView style={{ flex: 3 }}>
                    <TopTab.Navigator tabBarOptions={{
                        labelStyle: {
                            fontSize: 18,
                            textTransform: "none"
                        },
                        style: {
                            height: 20,
                            elevation: 0,
                        },
                        tabStyle: {
                            width: Dimensions.get('window').width / 3,
                            height: 20,
                            position: "relative",
                            top: -15,
                        },
                        scrollEnabled: true,
                    }} >
                        <TopTab.Screen name="Media" component={this.MediaScreen} />
                        <TopTab.Screen name="Detail" component={this.DetailScreen} />
                        <TopTab.Screen name="Lineup" component={this.LineupScreen} />
                        <TopTab.Screen name="Stats" component={this.StatsScreen} />
                    </TopTab.Navigator>
                </SafeAreaView>
            </View>
        );
        /*
                <View style={{ flex: 3, alignItems: 'center', backgroundColor: "red" }}>
                    <TabView
                        navigationState={[this.state.index], [this.state.routes] }
                        renderScene={SceneMap({
                            Detail: this.DetailRoute(),
                            Lineup: this.LineupRoute(),
                            Stats: this.StatsRoute(),
                        })}
                        onIndexChange={{}}
                        initialLayout={this.initialLayout}
                    />
                </View>
                */
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Fixture', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Friendly')} />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        flex: 2,
        alignItems: "center",
    },
    scoreCard: {
        flex: 1,
        flexDirection: "row",
    },
    subTopTab: {

    }
})

export default Fixture;