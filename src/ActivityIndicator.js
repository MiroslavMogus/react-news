import React, { Component } from 'react';
import {
   ActivityIndicator,
   View,
   StyleSheet
} from 'react-native';

export default MyActivityIndicator = (props) => {
   return (
      <View style = {styles.container}>
         <ActivityIndicator animating = {props.animating}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 300
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 280
   }
});