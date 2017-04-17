import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';

export default class News extends Component {
	
	render(){
		const goToPageTwo = () => Actions.pageTwo({
			image: this.props.val.image, 
			headline: this.props.val.headline,
			author: this.props.val.author.username,
			wholeNews: this.props.val.metaDescription
		});

		return (
			<View style={styles.newsItem}>
			<Image	source={{uri: this.props.val.image || 'https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'}}
				    	style={styles.thumbnail}
       />
       <Text style={styles.newsText} onPress={goToPageTwo}>{this.props.val.headline}</Text>
			 <Text style={styles.authorText}>{this.props.val.author.username}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	newsItem: {
		flex: 1,
    	padding: 15,
    	flexDirection: 'column',
    	alignItems: 'flex-start',
	},
	newsText: {
 		marginLeft: 75, // Offset for the image
    	paddingTop: 5,
    	paddingBottom: 8,
    	paddingLeft: 12,
    	paddingRight: 12,
    	fontWeight: 'bold',
    	

	},
	authorText: {
		paddingLeft: 87,
		color: '#9A9891',

	},
	thumbnail: {
		position: 'absolute',
		top: 14,
   		left: 3,
        width: 80,
        height: 80,
    }
});