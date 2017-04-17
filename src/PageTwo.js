import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {
render() {
  return (
    <View style={styles.container}>
      <Image source={{uri: this.props.image || 'https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'}}
				    	style={styles.image} />
    <Text style={styles.backdrop}>{this.props.headline.toUpperCase()}</Text>
    <Text style={styles.author}>{this.props.author}</Text>
    <Text style={styles.newsWholeText}>{this.props.wholeNews}</Text>
    </View>
 	 )
	}
}

const styles = StyleSheet.create({
			container:	{
				flex:	1,
				alignItems:	'center',
				paddingTop:	20,		
			},
			backdrop:	{
				flexDirection:	'column',
				fontSize: 18,
				margin: 25,
				textAlign: 'center',
			},
			author:	{
				flexDirection:	'column',
				fontSize: 18,
				margin: 25,
				textAlign: 'center',
			},
			image:	{
				width: 500,
				height: 200,
			},
			newsWholeText:	{
				flex:	1,
				paddingTop:	5,
				flexDirection:	'column',
				fontSize: 16,
				margin: 25,
				textAlign: 'justify',
			},	
});