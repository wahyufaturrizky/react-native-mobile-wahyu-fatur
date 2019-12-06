import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Start Main Banner
const CardFeatureNews = (props) => {
  return (

    <View style={props.styleCardMenu}>

        <View style={props.styleImage}>
            <Image source={props.imgCard} style={{width: 110, height: 90, borderTopLeftRadius: 4, borderBottomLeftRadius: 4}} />
        </View>

        <View style={props.styleDesc}>
            <Text style={props.styleTitleDesc}>{props.titleCard}</Text>
            <Text style={props.styleCardDesc}>{props.descTitle}</Text>
        </View>

        <View style={props.styleTag}>
            <View style={props.styleFav}>
                <Image source={props.imgFav} style={{width: 35, height: 35}} />
            </View>
        </View>

    </View>
  )
}
// End Main Banner

export default CardFeatureNews;
