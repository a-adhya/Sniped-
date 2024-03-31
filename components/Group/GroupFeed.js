import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'


export default GroupFeed = () =>
{
    
    const renderPost =  ({item}) =>
    {
       return(
       <View style={styles.postContainer}>
            
            <Text style={styles.caption}><Text style={styles.personSniped}>{item.personSniped}</Text>{item.caption}</Text>
            <TouchableOpacity>
                <Image source={item.image} style={styles.snipeImage}/>
            </TouchableOpacity>
            <View style={styles.interactionContainer}>
                <View style={styles.likeContainer}>
                    <TouchableOpacity>
                        <AntDesign name="heart" size={30} color="#bf4b64"/>
                    </TouchableOpacity>
                    <Text style={styles.interactionText}>{item.likes}</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text style={styles.interactionText}>{item.comments}</Text>
                    <TouchableOpacity>
                        <Ionicons name="chatbubble" size={30} color="grey"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
       )

    }
    
    
   return(
    <View style={styles.outerContainer}>
        
        <View style={styles.topMenu}>
            <TouchableOpacity style={styles.iconContainer}>
                <AntDesign name='arrowleft' size={47} color="#5b5b5b"/>
            </TouchableOpacity>
            <View style={styles.groupNameContainer}>
                <Text style={styles.groupName}>For The Plot</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name='information-circle' size={45} color="#5b5b5b"/>
            </TouchableOpacity>
        </View>

        <View style={styles.snipeFeedContainer}>
            <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={item => item.id}
            style={styles.list}
            />
        </View>
        
    </View>
   )



}
const posts = [
{
    id: 1,
    personSniped: 'YOU!',
    caption: ' were sniped by agnesm at East Quad',
    image: require('../../assets/GroupFeed/eastquad.jpg'),
    likes: 6,
    comments: 3,
    timestamp: '',

},
{
    id: 2,
    personSniped: 'chrislafrank',
    caption: ' was sniped by ryounessi at Saga',
    image: require('../../assets/GroupFeed/chris.jpeg'),
    likes: 8,
    comments: 2,
    timestamp: '',

},
{

    id: 3,
    personSniped: 'rheats',
    caption: ' was sniped by YOU at Bance',
    image: require('../../assets/GroupFeed/thug.jpg'),
    likes: 7,
    comments: 4,
    timestamp: '',
},
]

export const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%'
    },
    topMenu: {
        flex: 2,
        width: '100%',
        backgroundColor: '#999999',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        paddingBottom: 0,
    },
    snipeFeedContainer: {
        flex: 9,
        width: '100%',
        backgroundColor: '#f9f9f9',
    },
    iconContainer: {
        paddingTop: 8,
        paddingHorizontal: 5,
    },
    groupNameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingTop: 20
        
    },
    groupName: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#fff',
    },

    list: {
        paddingTop: 20,
        paddingBottom: 20,
    },

    postContainer: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 15,
        overflow: 'hidden',
        backgroundColor: '#FFF'
    },

    caption: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 14,
    },

    snipeImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },

    interactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    commentContainer: {
        flexDirection: 'row',
    alignItems: 'center',
    },

    interactionText: {
        marginHorizontal: 5,
        fontSize: 20
    },
    personSniped: {
        fontWeight: 'bold',
    }

})