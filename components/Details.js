import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Moment from 'moment';
import { Icon } from 'react-native-elements'


export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('item', {}).title || "Details",
    });

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', {});
        const start = Moment(item.start);
        const end = Moment(item.end);
        let subtitle = item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null;
        let location = (
            <IconRow icon='map-marker'>
                {item.full_location}
            </IconRow>
        );

        let description = (
            <IconRow icon='question-circle'>
                {item.description}
            </IconRow>
        )
        if (item.multi_location == 1) {
            location = (
                <MultiIconRow icon='map-marker'> 
                    {item.description} 
                </MultiIconRow>
            );
            description = null;
        }
        return (
            <View style={{ flex: 1, margin: 20, width: "100%" }}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                {subtitle}
                <IconRow icon='user'>
                    {item.speaker}
                </IconRow>
                <IconRow icon='calendar-o'>
                    {start.format("dddd, MMMM Do YYYY, h:mm a")}-{end.format("h:mm a")}
                </IconRow>
                {location}
                {description}
            </View>
        );
    }
}

const IconRow = props => {
    if (props.children) {
        return (
            <View style={styles.row}>
                <Icon
                    size={20}
                    containerStyle={styles.icon}
                    name={props.icon}
                    type='font-awesome'
                    color='#999' />
                <Text style={styles.rowText}>
                    {props.children}
                </Text>
            </View>
        )
    }
    return null;
};

const MultiIconRow = props => {
    if (props.children) {
        return (
            <View style={styles.multiRow}>
                <Icon
                    size={20}
                    containerStyle={styles.icon}
                    name={props.icon}
                    type='font-awesome'
                    color='#999' />
                <Text style={styles.multiRowText}>
                    {props.children}
                </Text>
            </View>
        )
    }
    return null;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "500",
    },
    subtitle: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 5,
        marginBottom: 5,
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        lineHeight: 30,
        height: 30,
    },
    icon: {
        marginRight: 6, 
        width: 25,
    },
    rowText: {
        fontSize: 15,
        lineHeight: 30,
        height: 30,
    },
    multiRow: {
        alignItems: 'center',
        flexDirection: 'row',
        lineHeight: 30,
    },
    multiRowText: {
        fontSize: 15,
        lineHeight: 30,
    }
});
