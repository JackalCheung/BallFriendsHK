import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

class Standing extends React.Component {
    constructor(props) {
        super(props);

        var { params } = props.route;

        this.state = {
            league_id: params.league_id,
            league_title: "NULL",
            data: [],
            error: null,
            loading: false,
            refreshing: false
        };
    }

    componentDidMount() {
        this.getLeagueStandings();
    }

    getLeagueStandings() {
        this.setState({ loading: true });
        var url = "https://api-football-v1.p.rapidapi.com/v2/leagueTable/" + this.state.league_id;
        console.log(url)
        /*
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
                    data: [...this.state.data, ...res.api.standings[0]],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        this.forceUpdate()
        */
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={standingStyle.container}>
                <View style={standingStyle.teamCard}>
                    <Text style={standingStyle.teamNumberItem}>{item.rank}</Text>
                    <Image style={standingStyle.teamLogo} source={{
                        uri: item.logo
                    }} />
                    <Text style={standingStyle.teamName}>{item.teamName}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.all.matchsPlayed}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.all.win}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.all.draw}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.all.lose}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.goalsDiff}</Text>
                    <Text style={standingStyle.teamNumberItem}>{item.points}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={standingStyle.container}>
                <View style={standingStyle.leagueContainer}>
                    <Text style={{ fontSize: 30, paddingStart: 5, color: "white", fontWeight: "bold" }}>Premier League</Text>
                    <Text style={{ fontSize: 15, paddingStart: 5, color: "white", fontWeight: "bold" }}>England</Text>
                </View>
                <View style={standingStyle.tableContainer}>
                    <View style={standingStyle.tableCard}>
                        <Text style={standingStyle.teamNumberItem}>#</Text>
                        <Image style={standingStyle.teamLogo}></Image>
                        <Text style={standingStyle.teamName}>Team</Text>
                        <Text style={standingStyle.teamNumberItem}>GP</Text>
                        <Text style={standingStyle.teamNumberItem}>W</Text>
                        <Text style={standingStyle.teamNumberItem}>D</Text>
                        <Text style={standingStyle.teamNumberItem}>L</Text>
                        <Text style={standingStyle.teamNumberItem}>GD</Text>
                        <Text style={standingStyle.teamNumberItem}>Pt</Text>
                    </View>
                    <View style={standingStyle.tableCard}>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            contentContainerStyle={{ paddingBottom: 20 }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const standingStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    leagueContainer: {
        flex: 1,
        backgroundColor: "#4dabf5",
        justifyContent: "center"
    },
    tableContainer: {
        flex: 9,
        alignItems: "center"
    },
    tableCard: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        paddingTop: 3,
        opacity: .9
    },
    teamCard: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },
    teamLogo: {
        flex: .5,
        width: 25,
        height: 25,
        resizeMode: "contain",
        alignItems: "center"
    },
    teamName: {
        flex: 2,
    },
    teamNumberItem: {
        flex: .5,
        textAlign: "center",
    },
})

export default Standing;