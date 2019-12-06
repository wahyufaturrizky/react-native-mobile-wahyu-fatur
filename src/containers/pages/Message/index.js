import React, {Component} from 'react';
import { 
    Image, 
    ScrollView, 
    StyleSheet, 
	View,
	TouchableOpacity } from 'react-native';

import { 
    Colors } from 'react-native/Libraries/NewAppScreen';

import Divider from '../../../components/atoms/Divider';
import TitleContent from '../../../components/atoms/TitleContent';
import CardFeatureNews from '../../../components/molecules/CardFeatureNews';
import MainBanner from '../../../components/molecules/MainBanner';
import MenuIcon from '../../../components/molecules/MenuIcon';
import SampleAddsBanner from '../../organisms/SampleAddsBanner';

  

class Message extends Component {
    render(){
        return(
            // Start Layout
            <View style={styles.layout}>

                <View style={styles.section}>
                <Image source={require('../../../assets/logo/logo.png')} style={{width: 150, height: 60}} />
                </View>
                
                <ScrollView style={styles.scrollView}>

                {/* Start Main Content Here */}

                <View style={styles.container}>

                    {/* Title Content */}
                    <TitleContent styleCard={styles.card} styleCardTitle={styles.cardTitle} titleContent='MESSAGE' />
                    {/* Divider */}
                    <Divider styleBatas={styles.batas} />

                    {/* Start University Info */}
                    {/* Title Content */}
                    <TitleContent styleCard={styles.card} styleCardTitle={styles.cardTitle} titleContent='FEATURE NEWS' />
                    
                    {/* Card Feature News */}
                    <CardFeatureNews styleCardMenu={styles.cardMenu} styleTitleDesc={styles.titleCardDesc} imgFav={require('../../../assets/icon/fav.png')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} titleCard='Adler Planetarium: Planetarium Pertama di...' descTitle='Tahukah kamu bahwa planetarium tertua di Aerika terletak di kota Illinois...' styleImage={styles.cardImage} imgCard={require('../../../assets/img/gedung.png')} />

                    {/* Card Feature News */}
                    <CardFeatureNews styleCardMenu={styles.cardMenu} styleTitleDesc={styles.titleCardDesc} imgFav={require('../../../assets/icon/fav.png')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} titleCard='Adler Planetarium: Planetarium Pertama di...' descTitle='Tahukah kamu bahwa planetarium tertua di Aerika terletak di kota Illinois...' styleImage={styles.cardImage} imgCard={require('../../../assets/img/gedung.png')} />
                    {/* End University Info */}

                    {/* Divider */}
                    <Divider styleBatas={styles.batas} />

                    {/* Start University Info */}
                    {/* Title Content */}
                    <TitleContent styleCard={styles.card} styleCardTitle={styles.cardTitle} titleContent='UNIVERSITY INFO' />
                    
                    {/* Card Feature News */}
                    <CardFeatureNews styleCardMenu={styles.cardMenu} styleTitleDesc={styles.titleCardDesc} imgFav={require('../../../assets/icon/fav.png')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} titleCard='Adler Planetarium: Planetarium Pertama di...' descTitle='Tahukah kamu bahwa planetarium tertua di Aerika terletak di kota Illinois...' styleImage={styles.cardImage} imgCard={require('../../../assets/img/gedung.png')} />

                    {/* Card Feature News */}
                    <CardFeatureNews styleCardMenu={styles.cardMenu} styleTitleDesc={styles.titleCardDesc} imgFav={require('../../../assets/icon/fav.png')} styleFav={styles.Fav} styleTag={styles.cardTag} styleDesc={styles.cardDesc} styleCardDesc={styles.CardDesc} titleCard='Adler Planetarium: Planetarium Pertama di...' descTitle='Tahukah kamu bahwa planetarium tertua di Aerika terletak di kota Illinois...' styleImage={styles.cardImage} imgCard={require('../../../assets/img/gedung.png')} />
                    {/* End University Info */}

                    {/* Divider */}
                    <Divider styleBatas={styles.batas} />

                    {/* Start Sample Ads Banner */}
                    {/* Title Content */}
                    <TitleContent styleCard={styles.card} styleCardTitle={styles.cardTitle} titleContent='SAMPLE ADS BANNER' />

                    <SampleAddsBanner onPress={() => this.props.navigation.navigate('MessageWhatsApp')} />
                    {/* End Sample Ads Banner */}

                    {/* Divider */}
                    {/* <View style={styles.batas}></View> */}

                    {/* Start Sample Ads Banner */}
                    {/* <View style={styles.card}>
                    <Text style={styles.cardTitle}>SAMPLE ADS BANNER</Text>
                    </View>

                    <View style={{marginBottom: 14, width: '100%'}}>

                    <View style={{marginBottom: 12, position: 'relative'}}>
                        <Image source={require('../../../assets/img/ads_banner.jpg')} style={{width: '100%', height: 200, borderRadius: 4,}} />
                        <View style={{width: '100%', height: 200, borderRadius: 4, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
                        <Image source={require('../../../assets/img/white_logo_sunapp.png')} style={{width: 80.6, height: 31, position: 'absolute', left: 8, top: 8}} />

                        <View style={{flexDirection: 'row', position: 'absolute', bottom: 8, left: 8, right: 8}}>

                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: 'white'}}>Title Content Ads</Text>
                            <Text style={{fontSize: 14,marginTop: 8, color: 'white'}}>Lorem Ipsum is simply dummy text</Text>
                        </View>

                        <View style={{flex: 1, justifyContent: "center"}}>
                            <TouchableOpacity style={{borderRadius: 4, backgroundColor: "#F47521", paddingHorizontal: 8, paddingVertical: 8, alignSelf: 'flex-end'}}>
                            <Text style={{fontSize: 18, color: 'white'}}>READ MORE</Text>
                            </TouchableOpacity>
                        </View>

                        </View>

                    </View>

                    </View> */}
                    {/* End Sample Ads Banner */}

                    {/* Divider */}
                    {/* <View style={styles.batas}></View> */}

                    {/* Start Banner Horizontal Scroll View */}
                    {/* <View style={{marginBottom: 14, width: '100%'}}>
                    <View style={{marginBottom: 10,}}>
                        <Text style={styles.cardTitle}>HORIZONTAL SCROLL BANNER</Text>
                    </View>

                    <View style={{flexDirection: 'row',}}>

                        <View style={{flex: 1}}>
                        <Text style={{fontSize: 20, fontWeight: "bold", color: 'black'}}>All Banner</Text>
                        </View>

                        <View style={{flex: 1, justifyContent: "center"}}>
                        <TouchableOpacity style={{borderRadius: 4, backgroundColor: "white", paddingHorizontal: 8, paddingVertical: 0, alignSelf: 'flex-end'}}>
                            <Text style={{fontSize: 18, color: '#F47521'}}>See All</Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                    </View>
                    
                    <View style={{flexDirection: 'row', backgroundColor: 'pink',}}> */}

                    {/* Start Content Item Banner */}
                    {/* <View style={{marginBottom: 12, marginRight: 24, position: 'relative', backgroundColor: 'pink', width: 200, height: 200, borderRadius: 10}}>
                        <Image source={require('../../../assets/img/food01.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10,}} />
                        <View style={{width: '100%', height: 200, borderRadius: 10, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
                        <Image source={require('../../../assets/img/white_logo_sunapp.png')} style={{width: 80.6, height: 31, position: 'absolute', left: 8, top: 8}} />

                        <View style={{position: 'absolute', bottom: 8, left: 16}}>

                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: 'white'}}>Title Content Ads</Text>
                        </View>

                        </View>

                    </View> */}
                    {/* End Content Item Banner */}

                    {/* Start Content Item Banner */}
                    {/* <View style={{marginBottom: 12, marginRight: 24, position: 'relative', backgroundColor: 'pink', width: 200, height: 200, borderRadius: 10}}>
                        <Image source={require('../../../assets/img/food02.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10,}} />
                        <View style={{width: '100%', height: 200, borderRadius: 10, backgroundColor: 'black', position: 'absolute', opacity: 0.5}}></View>
                        <Image source={require('../../../assets/img/white_logo_sunapp.png')} style={{width: 80.6, height: 31, position: 'absolute', left: 8, top: 8}} />

                        <View style={{position: 'absolute', bottom: 8, left: 16}}>

                        <View>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: 'white'}}>Title Content Ads</Text>
                        </View>

                        </View>

                    </View> */}
                    {/* End Content Item Banner */}


                    {/* </View>  */}
                    {/* End Banner Horizontal Scroll View */}


                    {/* End Main Content */}
                </View>
                
                </ScrollView>

                {/* Start Navivation Bar */}
                <View style={styles.navBar}>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.navBarMenuKiri}>
										<View style={{width:43, height:43, alignItems: "center", justifyContent: "center"}}>
											<Image source={require('../../../assets/icon/home.png')} style={{width: 30, height: 30}} />
										</View>
									</TouchableOpacity>

									<TouchableOpacity style={styles.navBarMenu}>
										<View style={{width:43, height:43, alignItems: "center", justifyContent: "center"}}>
											<Image source={require('../../../assets/icon/notif.png')} style={{width: 24, height: 30}} />
										</View>
									</TouchableOpacity>

									<TouchableOpacity style={styles.navBarMenu}>
										<View style={{width:43, height:43, alignItems: "center", justifyContent: "center"}}>
											<Image source={require('../../../assets/icon/chat_active.png')} style={{width: 30, height: 30}} />
										</View>
									</TouchableOpacity>

									<TouchableOpacity style={styles.navBarMenu}>
										<View style={{width:43, height:43, alignItems: "center", justifyContent: "center"}}>
											<Image source={require('../../../assets/icon/location.png')} style={{width: 24, height: 30}} />
										</View>
									</TouchableOpacity>

									<TouchableOpacity style={styles.navBarMenuKanan}>
										<View style={{width:43, height:43, alignItems: "center", justifyContent: "center"}}>
											<Image source={require('../../../assets/icon/profile.png')} style={{width: 30, height: 30}} />
										</View>
									</TouchableOpacity>
                </View>
                {/* End Navigation Bar */}

            </View>

            // End Layout
        )
    }
}

const styles = StyleSheet.create({
    layout: {
      backgroundColor: 'white', 
      flex: 1,
    },
    container: {
      backgroundColor: 'white', 
      flex: 1, 
      flexDirection: 'row', 
      paddingTop: 14, 
      flexWrap: "wrap", 
      paddingHorizontal: 14
    },
    navBar: {
      borderTopWidth: 2,
      borderColor: '#dcdcdc',
      backgroundColor: 'white',
      height: 56, 
      flexDirection: 'row',
      alignItems: "center", 
      justifyContent: "center",
    },
    navBarMenu: {
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal: 2, 
      marginHorizontal: 4,
      alignItems: "center", 
      justifyContent: "center",
    },
    navBarMenuKiri: {
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal: 2, 
      marginHorizontal: 4,
      marginLeft:0,
      alignItems: "center", 
      justifyContent: "center",
    },
    navBarMenuKanan: {
      backgroundColor: 'white',
      flex: 1,
      paddingHorizontal: 2, 
      marginHorizontal: 4,
      marginRight:0,
      alignItems: "center", 
      justifyContent: "center",
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    titleCardDesc: {
      color: 'black',
      fontSize: 14,
      marginBottom: 4,
      marginLeft: 8,
    },
    CardDesc: {
      color: '#999999',
      fontSize: 10,
      marginBottom: 4,
      marginLeft: 8,
    },
    menuTitle: {
      color: '#999999',
      fontSize: 8,
      marginTop:4,
    },
    putih: {
      color: '#999999',
      fontSize: 10,
    },
    cardTitle: {
      color: 'black',
      fontSize: 16,
      textAlign: "left", 
      fontWeight: '600',
    },
    card: {
      height: 20,
      width: '100%', 
      borderRadius: 4, 
      flexDirection: 'row', 
      marginBottom: 14,
    },
    cardMenu: {
      borderColor: '#dcdcdc',
      borderWidth: 2,
      width: '100%', 
      borderRadius: 4, 
      flexDirection: 'row', 
      marginBottom: 14, 
      alignItems: "center", 
      justifyContent: "center",
    },
    cardImage: {
      backgroundColor: 'white',
      height: 90,
      flex: 2, 
      borderRadius: 4, 
      marginLeft:0, 
      marginHorizontal: 4, 
      alignItems: "center", 
      justifyContent: "center"
    },
    cardDesc: {
      backgroundColor: 'white',
      height: 90,
      flex: 4, 
      borderRadius: 4, 
      marginLeft:0, 
      marginHorizontal: 4,
      alignItems: "center", 
      justifyContent: "center"
    },
    cardTag: {
      backgroundColor: 'white',
      height: 90,
      flex: 1, 
      borderRadius: 4, 
      marginRight:0,
      alignItems: 'flex-end'
    },
    Fav: {
      marginTop: 14,
      marginRight: 14,
      height: 35,
      width: 35,
      borderRadius: 4,
    },
    batas: {
      backgroundColor: 'white',
      borderColor: '#dcdcdc',
      borderBottomWidth: 2,
      height: 10,
      width: '100%', 
      borderRadius: 4, 
      flexDirection: 'row', 
      marginBottom: 14, 
      alignItems: "center", 
      justifyContent: "center",
    },
    section: {
      backgroundColor: 'white',
      // borderColor: '#dcdcdc',
      // borderWidth: 2,
      height: 70,
      width: '100%', 
      borderRadius: 4, 
      flexDirection: 'row', 
      marginBottom: 14, 
      alignItems: "center", 
      justifyContent: "center",
    },
    banner: {
      backgroundColor: 'white',
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 200,
      width: '100%', 
      borderRadius: 4, 
      marginBottom: 14, 
      alignItems: "center", 
      justifyContent: "center",
    },
    menuCategory: {
      backgroundColor: 'white',
      width: '100%', 
      borderRadius: 4, 
      flexDirection: 'row', 
      marginBottom: 14, 
      alignItems: "center", 
      justifyContent: "center",
    },
    menuKiri: {
      backgroundColor: 'white',
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 80,
      flex: 1, 
      borderRadius: 15, 
      marginLeft:0, 
      marginHorizontal: 4, 
      paddingHorizontal: 2,
      alignItems: "center", 
      justifyContent: "center"
    },
    menuKanan: {
      backgroundColor: 'white',
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 80, 
      flex: 1, 
      borderRadius: 15, 
      paddingHorizontal: 2,
      marginRight:0, 
      marginHorizontal: 4, 
      alignItems: "center", 
      justifyContent: "center",
    },
    menu: {
      backgroundColor: 'white',
      borderColor: '#dcdcdc',
      borderWidth: 2,
      height: 80, 
      flex: 1, 
      borderRadius: 15,
      paddingHorizontal: 2, 
      marginHorizontal: 8,
      alignItems: "center", 
      justifyContent: "center",
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

  export default Message;