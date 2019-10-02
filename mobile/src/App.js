import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import NavigationService from './services/navigation';
import createNavigator from './routes';

class App extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      authChecked: PropTypes.bool,
      signedIn: PropTypes.bool,
    }).isRequired
  }
  registerService = (ref) => {
    NavigationService.setTopLevelNavigatior(ref);
  }
  render() {
    const { auth } = this.props;
    if (!auth.authChecked) return null;
    const Routes = createNavigator(auth.signedIn);
    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
