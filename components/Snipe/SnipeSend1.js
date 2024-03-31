import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'



const SnipeSend1 = () =>
{
    //Top Menu with Sniped and X button in left corner
    //Sniped picture below that
    //Who followed by Text Input
    //Where followed by Text Input
    //3 containers
    return (
    <View style={styles.outerContainer}>
        <View style={styles.topMenu}>
            <TouchableOpacity style={styles.iconContainer}>
                <Entypo name='cross' size={47} color="#5b5b5b"/>
            </TouchableOpacity>
            <View style={styles.snipedTextContainer}>
                <Text style={styles.snipedText}>Sniped!</Text>
            </View>
        </View>
        <View style={styles.postGroup}>
            <View>
                <Image source={require('../../assets/GroupFeed/eastquad.jpg')} style={styles.snipeImage}/>
            </View>
            
            <View>
                <Text style={styles.taggingText}>Who</Text>
                <TouchableOpacity style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder="write your comment here"
                    keyboardType="default"/>
                </TouchableOpacity>
            </View>   

            <View>
                <Text style={styles.taggingText}>Where</Text>
                <TouchableOpacity style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder="write your comment here"
                    keyboardType="default"/>
                </TouchableOpacity>
             </View>
             
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    outerContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%'
    },

    topMenu: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom: 0,

    },
    iconContainer: {
        paddingTop: 0,
        paddingHorizontal: 0,
    },
    snipedTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20,
        paddingRight: 40,

    },
    snipedText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#999999',
    },
    snipeImage: {

    },
    postGroup: {
        flex: 9,
        width: '100%',
        backgroundColor: '#f9f9f9',
    },
    taggingText: {

    },
    inputContainer: {

    },
    input: {

    }


})


export default SnipeSend1;