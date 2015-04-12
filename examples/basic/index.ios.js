/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var NavigationBar = require('react-native-navbar');

var Example = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Some content</Text>
      </View>
    );
  }
});

var basic = React.createClass({
  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  handleNext: function() {
    alert('Next button click handler');
  },

  render: function() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: Example,
          navigationBar: <NavigationBar
            title="Initial View"
            onNext={this.handleNext}
          />
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('basic', () => basic);
