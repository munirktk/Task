import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Swiper from "react-native-swiper";
import { OnBoardComp } from "../../component/onboardComp";
import { appImages, colors } from '../../global/index'
const OnBoarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                translucent={true}
            />
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                showsPagination={false}
            >
                <OnBoardComp
                    screenColor={colors.primary}
                    image={appImages.singleBurger}
                    heading={'A super helpful\napp feature.'}
                    headingDec={'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.'}
                    first={true}
                    sec={false}
                    third={false}
                    skipPress={() => { navigation.navigate('App') }}
                />
                <OnBoardComp
                    screenColor={'#FCBD56'}
                    image={appImages.Burgers}
                    heading={'A super helpful\napp feature.'}
                    headingDec={'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.'}
                    sec={true}
                    first={false}
                    third={false}
                    skipPress={() => { navigation.navigate('App') }}

                />
                <OnBoardComp
                    screenColor={'#E417D4'}
                    image={appImages.fries}
                    heading={'A super helpful\napp feature.'}
                    headingDec={'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Erat.'}
                    third={true}
                    first={false}
                    sec={false}
                    skipPress={() => { navigation.navigate('App') }}

                />
            </Swiper>
        </View>
    )
}
export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})