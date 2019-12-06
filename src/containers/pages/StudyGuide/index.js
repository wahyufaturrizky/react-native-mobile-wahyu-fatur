import React, {Component} from 'react';
import { 
    Image, 
    ScrollView, 
    StyleSheet, 
    View } from 'react-native';

import { 
    Colors } from 'react-native/Libraries/NewAppScreen';

import Divider from '../../../components/atoms/Divider';
import MainBanner from '../../../components/molecules/MainBanner';
import MenuIcon from '../../../components/molecules/MenuIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

  

class StudyGuide extends Component {
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

						<MainBanner style={styles.banner} img={require('../../../assets/img/banner.jpg')}/>

						{/* Divider */}
						<Divider styleBatas={styles.batas} />
													
						<View style={styles.menuCategory}>

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menuKiri} title="STUDY GUIDE" img={require('../../../assets/icon/studyguide.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menu} title="COURSE FINDER" img={require('../../../assets/icon/coursefinder.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menu} title="ENGLISH" img={require('../../../assets/icon/english.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menuKanan} title="EVENTS" img={require('../../../assets/icon/events.png')} />

						</View>

						<View style={styles.menuCategory}>

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menuKiri} title="NEWS & UPDATE" img={require('../../../assets/icon/News_Update.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menu} title="SCHOLARSHIP" img={require('../../../assets/icon/scholarship.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menu} title="CAREER" img={require('../../../assets/icon/career.png')} />

							<MenuIcon menuTitle={styles.menuTitle} style={styles.menuKanan} title="PROMO" img={require('../../../assets/icon/promo.png')} />

						</View>

											
					</View>
									
				</ScrollView>

			</View>
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

  export default StudyGuide;