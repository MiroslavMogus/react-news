import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import MyActivityIndicator from 'ActivityIndicator';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

const ROOT_URL = 'https://api.myjson.com/bins/1nrbo';

import Item from '../components/Item';

module.exports = React.createClass({
	getInitialState() {
		this.getNews();
		this.state = {animating: true};
		return ({
			newsItems: [],
			newsText: ''
		})
	},

	getNews() {
		const FETCH_URL = ROOT_URL;

		fetch(FETCH_URL, {
			method: 'GET',
			  headers: {
  				},
		})
		.then((response) => response.json())
		.then((responseJSON) => {
			/* console.log(responseJSON[0].author.username); */
			this.setState({ newsItems: responseJSON });
			this.setState({ animating: false });					
		});
	},

render() {
	let newsItems = this.state.newsItems.map((val, key) => {
		return <Item key={key} keyval={key} val={val} />
	});

	return (
		         
		<View style={styles.container} >
		<View style={styles.header} >
			<Text style={styles.headerText} >
				NEWS
			</Text>
    </View>
		<View style={styles.containerTwo} >
      <ScrollView>
      	{newsItems}
      <MyActivityIndicator
            animating = {this.state.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
            text="Loading"
       />
      </ScrollView>
		</View>
		</View>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerTwo: {
		flex: 2,
    flexDirection: 'row',  	
	},
  	header: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
	headerText: {
		color: 'black',
		fontSize: 18,
		padding: 10,
		marginLeft: 12,
	}
})
    