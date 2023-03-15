import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { CategoryComp } from "../../component/category";
import { Header } from "../../component/header";
import { TxtInput } from '../../component/textinput'
import { colors, fontFamily } from "../../global";
import { category, picksData } from "../../services/dataset";
import { Icon } from "react-native-elements";
import { PickComp } from "../../component/pickComp";


const Home = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState(category)
    const [pick, setPick] = useState(picksData)

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
            />
            <Header
                home={true}
                title={"Home"}
                titleColor={'black'}
            />
            <View style={styles.wrapper}>
                <TxtInput
                    placeholder={'Search for a restaurant or dish'}
                    MyStyles={styles.inputText}
                    right={true}
                    PassName={'search'}
                    PassType={'feather'}
                    itsStyle={styles.innerInput}
                    onChangeText={text => setSearch(text)}
                />
                <View style={styles.cateView}>
                    <Text style={styles.cateText}>Top Categories</Text>
                    <FlatList
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <CategoryComp
                                    image={item.image}
                                    name={item.name}
                                    places={item.places}
                                />
                            )
                        }}
                    />
                </View>
                <View>
                    <View style={styles.pickView}>
                        <Text style={styles.cateText}>Your Picks</Text>
                        <View style={styles.iconView}>
                            <Text style={styles.showallText}>Show all</Text>
                            <Icon
                                name="chevron-right"
                                type="entypo"
                                size={responsiveFontSize(2)}
                                color={'black'}
                                style={{ marginBottom: 4 }}
                            />
                        </View>
                    </View>
                    <FlatList
                        data={pick}
                        renderItem={({ item }) => {
                            return (
                                <PickComp
                                    image={item.image}
                                    name={item.name}
                                    des={item.des}
                                    dishes={item.dishes}
                                />
                            )
                        }}
                    />
                </View>
            </View>
            <View style={{ height: responsiveHeight(20) }} />
        </ScrollView>
    )
}
export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    wrapper: {
        width: responsiveWidth(92),
        alignSelf: "center"
    },
    inputText: {
        width: responsiveWidth(90),
        alignSelf: "center",
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(3)
    },
    innerInput: {
        width: responsiveWidth(73),
        color: 'black',
        height: responsiveHeight(6)
    },
    cateText: {
        fontFamily: fontFamily.appTextBold,
        color: 'black',
        fontSize: responsiveFontSize(2)
    },
    cateView: {
        marginTop: responsiveHeight(4)
    },
    pickView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(2),
        alignItems: "center"
    },
    showallText: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: responsiveFontSize(1.5),
        color: colors.black
    },
    iconView: {
        width: responsiveWidth(18),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },


})