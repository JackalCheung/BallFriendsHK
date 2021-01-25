import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

class Friendly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
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
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/team/33/last/10?timezone=Europe%2FLondon", {
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
    }

    _renderItem = ({ item, index }) => {
        return (
            <ListItem bottomDivider
                onPress={() => { alert(item.fixture_id); }}
            >
                <Avatar source={{ uri: item.homeTeam.logo }} />
                <ListItem.Content>
                    <ListItem.Title>{item.homeTeam.team_name}</ListItem.Title>
                    <ListItem.Subtitle>{item.awayTeam.team_name}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        );
    }

    render() {
        return (
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={this._renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
})

export default Friendly;