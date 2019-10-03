import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'proptypes';
import SideMenu from 'react-native-side-menu';

import { connect } from 'react-redux';

import TeamSwitcher from '~/components/TeamSwitcher';
import Projects from '~/components/Projects';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { is } from '@babel/types';
import Members from '~/components/Members';
class Main extends Component {
    state = {
        leftOpen: false,
        rightOpen: false,
    }
    static propTypes = {
        activeTeam: PropTypes.shape({
            name: PropTypes.string
        }),
    }

    static default = {
        activeTeam: null,
    }

    toggleMenu = (position, isOpen) => {
        this.setState({ [`${position}Open`]: isOpen })
    }
    render() {
        const { activeTeam } = this.props;
        const { leftOpen, rightOpen } = this.state;
        return (
            <View style={styles.backgroundWrapper}>
                <SideMenu
                    isOpen={leftOpen}
                    disableGestures
                    onChange={isOpen => this.toggleMenu('left', isOpen)}
                    openMenuOffset={70}
                    menu={<TeamSwitcher />}
                >

                    <SideMenu
                        isOpen={rightOpen}
                        disableGestures
                        onChange={isOpen => this.toggleMenu('right', isOpen)}
                        openMenuOffset={285}
                        menuPosition="right"
                        menu={<Members />}
                    >
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <TouchableOpacity
                                    onPress={() => this.toggleMenu('left', true)}
                                    hitSlop={{ top: 5, bottom: 5, left: 10, right: 10 }}
                                >
                                    <Icon name="menu" size={24} color="#FFF" />
                                </TouchableOpacity>
                                <Text style={styles.teamTitle}>
                                    {activeTeam ? activeTeam.name : 'Selecione um Time'}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => this.toggleMenu('right', true)}
                                >
                                    <Icon name="group" size={24} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                            <Projects />
                        </View>
                    </SideMenu>

                </SideMenu>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    activeTeam: state.teams.active,
});

export default connect(mapStateToProps)(Main);
