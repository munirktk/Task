import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, StatusBar, Text, StyleSheet, View, ScrollView } from "react-native";
import { colors, fontFamily } from "../../global";
import { Header } from "../../component/header";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const GitApi = ({ navigation }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUser(data);
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
            />
            <Header
                iconPress={() => navigation.goBack()}
                title={'GitHub User API'}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    loading === true ? (
                        <ActivityIndicator
                            color={'white'}
                            size={'large'}
                        />
                    )
                        : (
                            <View>
                                <FlatList
                                    data={user}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View style={styles.mainView}>
                                                <View style={styles.innerView}>
                                                    <Image source={{ uri: item.avatar_url }} style={styles.image} />
                                                    <View style={styles.textView}>
                                                        <Text style={styles.nameText}>{item.login}</Text>
                                                        <Text style={styles.urlText}>{item.url}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        )
                }
                <View style={{ height: responsiveHeight(10) }} />
            </ScrollView>

        </View >
    )
}

export default GitApi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    image: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: responsiveWidth(3)
    },
    mainView: {
        width: responsiveWidth(90),
        alignSelf: "center",
        backgroundColor: 'white',
        marginTop: responsiveHeight(1),
        borderRadius: responsiveWidth(3)
    },
    innerView: {
        marginVertical: responsiveHeight(1),
        marginHorizontal: responsiveWidth(3),
        flexDirection: "row",
        alignItems: "center"
    },
    textView: {
        marginLeft: responsiveWidth(3)
    },
    nameText: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: responsiveFontSize(2),
        color: "black"
    },
    urlText: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(1.5),
        color: colors.grey
    }
})