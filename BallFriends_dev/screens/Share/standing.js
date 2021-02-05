import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const testData = [
    {
        rank: 1,
        teamName: "Arsenal",
        all: {
            matchsPlayed: 21,
            win: 0,
            draw: 0,
            lose: 21
        },
        goalsDiff: "-20",
        points: 0
    },
    {
        rank: 2,
        teamName: "Liverpool",
        all: {
            matchsPlayed: 21,
            win: 1,
            draw: 1,
            lose: 19
        },
        goalsDiff: "-7",
        points: 4
    }
]
class Standing extends React.Component {
    constructor(props) {
        super(props);

        var { params } = props.route;

        this.state = {
            league_id: params.league_id,
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

            <View style={styles.teamCard}>
                <Text style={styles.teamPos}>{item.rank}</Text>
                <Text style={styles.teamLogo}></Text>
                <Text style={styles.teamName}>{item.teamName}</Text>
                <Text style={styles.teamGP}>{item.all.matchsPlayed}</Text>
                <Text style={styles.teamWin}>{item.all.win}</Text>
                <Text style={styles.teamGP}>{item.all.draw}</Text>
                <Text style={styles.teamWin}>{item.all.lose}</Text>
                <Text style={styles.teamGP}>{item.goalsDiff}</Text>
                <Text style={styles.teamWin}>{item.points}</Text>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <View style={styles.teamCard}>
                        <Text style={styles.teamPos}>#</Text>
                        <Text style={styles.teamLogo}></Text>
                        <Text style={styles.teamName}>Team</Text>
                        <Text style={styles.teamGP}>GP</Text>
                        <Text style={styles.teamWin}>W</Text>
                        <Text style={styles.teamGP}>D</Text>
                        <Text style={styles.teamWin}>L</Text>
                        <Text style={styles.teamGP}>GD</Text>
                        <Text style={styles.teamWin}>Pt</Text>
                    </View>
                </View>
                <View style={{ flex: 9, alignItems: 'center' }}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={testData}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Standing in development.</Text>

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
    tableContainer: {
        flex: 1,


    },
    tableCard: {

    },
    teamContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "yellow",

    },
    teamCard: {
        flexDirection: "row",
        alignItems: "center",

    },
    teamPos: {
        flex: .5,
        backgroundColor: "red"
    },
    teamLogo: {
        flex: .5,
        backgroundColor: "blue"
    },
    teamName: {
        flex: 2,
        backgroundColor: "green",
    },
    teamGP: {
        flex: .5,
        backgroundColor: "grey"
    },
    teamWin: {
        flex: .5,
        backgroundColor: "purple"
    }
    // teamLose, teamPoint, teamGD
})

export default Standing;