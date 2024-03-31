import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'


export default GroupInfo = () =>
{
  
    return (
    <View style={styles.outerContainer}>
        <View style={styles.topMenu}>
          
        </View>
        <View style={styles.infoContainer}>
          
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
   infoContainer: {

   }
})