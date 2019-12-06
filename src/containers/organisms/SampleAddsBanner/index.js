import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';

// Start Main Banner
const SampleAddsBanner = ({onPress}) => {
  return (
    <View style={{marginBottom: 14, width: '100%'}}>
      <View style={{marginBottom: 12, position: 'relative'}}>
        <Image source={require('../../../assets/img/ads_banner.jpg')} style={{width: '100%', height: 200, borderRadius: 4,}} />
        <View style={{width: '100%', height: 200, borderRadius: 4, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
          <Image source={require('../../../assets/img/white_logo_sunapp.png')} style={{width: 80.6, height: 31, position: 'absolute', left: 8, top: 8}} />
        </View>

        <View>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Title Content Ads</Text>
          <Text style={{fontSize: 14,marginTop: 8}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</Text>
        <TouchableOpacity style={{marginTop: 16, borderRadius: 4, backgroundColor: "#F47521", paddingHorizontal: 8, paddingVertical: 8, alignSelf: 'flex-end'}} onPress={onPress}>
          <Text style={{fontSize: 18, color: 'white'}}>READ MORE</Text>
        </TouchableOpacity>
      </View>       
    </View>
  )
}
// End Main Banner

export default SampleAddsBanner;