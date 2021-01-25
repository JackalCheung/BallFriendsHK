import * as React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import DynamicTabView from "react-native-dynamic-tab-view";

const leagueData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        date: 'today',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        date: 'yesterday',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        date: 'tomorrow',
        title: 'Third Item',
    },
    {
        id: '58632a0f-3da1-471f-bd96-145571e29d72',
        date: 'yesterday',
        title: 'Fourth Item',
    },
    {
        id: '58655a0f-3da1-471f-bd96-145571e29d72',
        date: 'tomorrow',
        title: 'Fifth Item',
    },
    {
        id: '53655a0f-3da1-471f-bd96-145571e29d72',
        date: '26',
        title: 'Sixth Item',
    }
];

const DisplayItem = ({ title }) => {
    console.log(title);
    return (
        <View style={styles.itemOutlook}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

class League extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
            { title: "Yesterday", key: "yesterday", color: "yellow" },
            { title: "Today", key: "today", color: "black" },
            { title: "Tomorrow", key: "tomorrow", color: "red" }
        ];
        this.state = {
            defaultIndex: 0,
            selectedDate: new Date(),
            index: 0
        };

    }

    renderDetail = ({ item }, key) => {
        // <DisplayItem title={item.title} />
        if (item.date == key) {
            return (
                <View style={styles.itemOutlook}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            );
        }
    }

    _renderItem = (items, index) => {
        return (
            <View
                key={items["key"]}
                style={{ flex: 1 }}
            >
                <FlatList
                    data={leagueData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderDetail({ item }, items["key"])}

                />
            </View>
        );
    }

    onChangeTab = () => {
        this.state.index = this.state.index + 1;
        var date = new Date();
        console.log(date);
        date.setDate(date.getDate() + this.state.index);
        console.log(date);
        console.log(this.state.index);
        // this.data.push({ title: date.toString(), key: date.toString(), color: "blue" });
    }

    render() {
        return (
            <DynamicTabView
                data={this.data}
                renderTab={this._renderItem}
                defaultIndex={this.state.defaultIndex}
                containerStyle={styles.container}
                headerBackgroundColor={'white'}
                headerTextStyle={styles.headerText}
                onChangeTab={this.onChangeTab}
                headerUnderlayColor={'green'}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        marginTop: 50
    },
    headerText: {
        color: 'black'
    },
    tabItemContainer: {
        backgroundColor: 'purple'
    },
    itemOutlook: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});

export default League;