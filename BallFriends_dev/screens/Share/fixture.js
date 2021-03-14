import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

import Theme from '../Styles/theme';
import Spinner from 'react-native-loading-spinner-overlay';

const TopTab = createMaterialTopTabNavigator();

class Fixture extends React.Component {

    constructor(props) {
        super(props);

        var { params } = props.route;

        this.state = {
            fixture_id: params.fixture_id,
            index: 0,
            data: [],
            error: null,
            loading: true,
            refreshing: false
        }
    }

    componentDidMount() {
        console.log(this.state.fixture_id);
        this.getFixtureDetail();
    }

    getFixtureDetail() {
        var url = "https://api-football-v1.p.rapidapi.com/v2/fixtures/id/" + this.state.fixture_id + "?timezone=Asia%2FHong_Kong"

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
                    data: res.api.fixtures[0],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        this.forceUpdate();
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
        if (this.state.loading) {
            return (
                <View>
                    <Spinner
                    visible={this.state.loading}
                    textContent={'Loading...'}
                    textStyle={{color: '#FFF'}}
                    />
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.scoreContainer}>
                        <View style={styles.scoreCard}>
                            <View style={{ flex: 1.5 }}>
                                <View style={styles.teamContainer}>
                                    <Image style={styles.teamLogo} source={{
                                        uri: this.state.data.homeTeam.logo
                                    }} />
                                </View>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>{this.state.data.homeTeam.team_name}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 40, textAlign: 'center' }}>{this.state.data.score.fulltime}</Text>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <View style={styles.teamContainer}>
                                    <Image style={styles.teamLogo} source={{
                                        uri: this.state.data.awayTeam.logo
                                    }} />
                                </View>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>{this.state.data.awayTeam.team_name}</Text>
                            </View>
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
        }

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
        */
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
        backgroundColor: "white",
    },
    teamContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    teamLogo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    subTopTab: {

    }
})

export default Fixture;