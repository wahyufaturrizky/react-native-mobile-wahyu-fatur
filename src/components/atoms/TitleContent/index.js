import React from 'react';
import {
    View,
    Text,
} from 'react-native';

// Start Main Banner
const TitleContent = (props) => {
  return (

    <View style={props.styleCard}>
            <Text style={props.styleCardTitle}>{props.titleContent}</Text>
    </View>
  )
}
// End Main Banner

export default TitleContent;
