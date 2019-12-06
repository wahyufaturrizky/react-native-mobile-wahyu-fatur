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
const MainBanner = (props) => {
  return (
    <View style={props.style}>
      <Image source={props.img} style={{width: 380, height: 200, borderRadius: 4,}} />
    </View>
  )
}
// End Main Banner

export default MainBanner;