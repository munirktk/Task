import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { AppButton } from "../../component/button";
import { FavComp } from "../../component/favComp";
import { Header } from "../../component/header";
import { colors } from "../../global";
import { favdata } from "../../services/dataset";



const Fav = ({ navigation }) => {

    const [favData, setFavData] = useState(favdata)
    return (
        <View style={styles.container}>
            <Header
                iconPress={() => navigation.goBack()}
                title={'Pick your Favourites'}
            />
            <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
                <View>
                    <FlatList
                        data={favData}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <FavComp
                                    image={item.image}
                                    title={item.name}
                                />
                            )
                        }}
                    />
                </View>
                <AppButton
                    title={'Continue'}
                    myStyles={styles.button}
                    onPress={() => navigation.navigate('Home')}
                />
                <AppButton
                    title={'GitHub Users'}
                    myStyles={styles.button}
                    onPress={() => navigation.navigate('GitApi')}
                />
                <View style={{ height: responsiveHeight(10) }} />
            </ScrollView>
        </View>
    )
}
export default Fav


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    wrapper: {
        width: responsiveWidth(90),
        alignSelf: "center"
    },
    button: {
        width: responsiveWidth(90),
        alignSelf: "center",
        height: responsiveHeight(6),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(4)
    }
})