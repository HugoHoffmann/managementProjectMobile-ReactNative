import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'proptypes';

import { connect } from 'react-redux'

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Main = ({activeTeam}) => (
    <View style={styles.backgroundWrapper}>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={ () => {} }
                    hitSlop={{top: 5, bottom:5, left: 10, right: 10}}
                >
                    <Icon name="menu" size={24} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.teamTitle}>
                    {activeTeam ? activeTeam.name : 'Selecione um Time'}
                </Text>
                <TouchableOpacity 
                    onPress={ () => {} }
                >
                    <Icon name="group" size={24} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

const mapStateToProps = state => ({
  activeTeam: state.teams.active,
});

Main.propTypes = {
    activeTeam: PropTypes.shape({
        name: PropTypes.string
    }),
}

Main.default = {
    activeTeam: null,
}

export default connect(mapStateToProps)(Main);
