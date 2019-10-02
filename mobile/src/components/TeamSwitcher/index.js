import React, { Component } from 'react';
import PropTypes from 'proptypes';

import { View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamsActions from '~/store/ducks/teams';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class TeamSwitcher extends Component {
    static propTypes = {
        getTeamsRequest: PropTypes.func.isRequered,
        teams: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                nae: PropTypes.string
            }))
        }).isRequered,
    }
    componentDidMount(){
        const { getTeamsRequest } = this.props;
        
        getTeamsRequest();
    }
  render() {
      const { teams } = this.props;
    return (
        <View style={styles.container}>
            {teams.data.map(team => (
                <TouchableOpacity 
                    key={team.id} 
                    style={styles.teamContainer}
                    onPress={() => {} }
                >
                    <Image 
                        style={styles.teamAvatar}
                        source={{
                            uri: `https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`
                        }}
                    />
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={styles.newTeam}
                onPress={ () => {} }
            >
                <Icon name="add" size={24} color="#999"/>
            </TouchableOpacity>
        </View>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
