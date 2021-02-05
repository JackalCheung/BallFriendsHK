import * as React from 'react';
import { Text, View } from 'react-native';

class Standing extends React.Component {
    constructor(props) {
        super();

        this.state = {
            leagueID: props.leagueID,
            data: [],
            error: null,
            loading: false,
            refreshing: false
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Standing in development.</Text>
            </View>
        );
    }
}

export default Standing;