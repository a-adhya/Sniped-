import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'

export default Post = () =>
{

    
    const renderComment = ({item}) =>
    {
        return(
        <View style={styles.commentsContainer}>
           <Text><Text style={StyleSheet.create({fontWeight: 'bold'})}>{item.commenter}</Text> {item.comment}</Text> 
            
        </View>
        )
    }

    return (
    <View style={styles.outerContainer}>
        
        <View style={styles.backMenu}>
            <TouchableOpacity style={styles.iconContainer}>
                <AntDesign name='arrowleft' size={47} color="#5b5b5b"/>
            </TouchableOpacity>
        </View>
        
        <View style={styles.postContainer}>
        <Text style={styles.caption}><Text style={styles.personSniped}>YOU!</Text> were sniped by agnesm at East Quad</Text>
            <View>
                <Image source={require('../../assets/GroupFeed/eastquad.jpg')} style={styles.snipeImage}/>
            </View>
            <View style={styles.interactionContainer}>
                <View style={styles.likeContainer}>
                        <TouchableOpacity>
                            <AntDesign name="heart" size={30} color="#bf4b64"/>
                        </TouchableOpacity>
                        <Text style={styles.interactionText}>6</Text>
                </View>
                <View style={styles.commentContainer}>
                    <Text style={styles.interactionText}>4</Text>
                    <TouchableOpacity>
                        <Ionicons name="chatbubble" size={30} color="grey"/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <FlatList
            data={comments}
            renderItem={renderComment}
            keyExtractor={item => item.id}
            style={styles.list} />
            
            <TouchableOpacity style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder="write your comment here"
                keyboardType="default"/>
            </TouchableOpacity>
        

        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
   outerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%'
   },
   backMenu: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    paddingBottom: 0,
   },
   iconContainer: {
    paddingTop: 8,
    paddingHorizontal: 5,
   },
   postContainer: {
    flex: 11,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
   },
    caption: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 3,
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
    marginBottom: 3,
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
},
list: {
    flexGrow: 0,
    marginBottom: 8
},
commentsContainer: {
    marginBottom: 8,
    overflow: 'wrap',
    backgroundColor: '#FFF',
},
inputContainer: {
    height: 20,
    backgroundColor: '#cccccc',
    borderRadius: 5,
},
input: {
    padding: 10,
    color: 'black',
}

})

const comments = [
    {
    id: 1,
    commenter: 'bigshu22: ',
    comment: 'LMAO',
    },
    {
    id: 2,
    commenter: 'bigshu2: ',
    comment: 'post dinner drink',
    },
    {
    id: 3,
    commenter: 'rfost: ',
    comment: 'hey I\'m in this one too',
    },
    {
    id: 4,
    commenter: 'moocow69: ',
    comment: 'I hate east quad',
    }
]