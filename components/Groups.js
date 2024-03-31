import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'
import supabase from '../supabase.js'

//Groups Component
const Groups = () => {
  
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => { 
      setLoading(true);
      const { data: supabaseData, error } = await supabase
        .from('groups')
        .select('name, groupid, code')

      if (error) {
        console.error('Error fetching data:', error);
      }
      if (supabaseData){
        setGroups(supabaseData);
      }
       setLoading(false);
    };

    fetchData();

    // Optional: Cleanup function for unsubscribing or other cleanup tasks
    return () => {
      // Cleanup tasks here
    };
  }, []); // Empty dependency array means this effect runs once on mount


  //Helper to render each group item
  const renderGroup = ({ item }) => (
  //Group Item contains Text
  <TouchableOpacity key={item.groupid} style={styles.group}>
    <Text style={styles.groupName}>{item.name}</Text>
    {item.notifications > 0 && (
      <View style={styles.notificationBubble}>
        <Text style={styles.notificationText}>{item.notifications}</Text>
      </View>
    )}
  </TouchableOpacity>
);

  return (
    <View className="outer-container" style={styles.outerContainer}>  
    <View className="top-menu" style={styles.topMenu}>
        <TouchableOpacity styles={styles.iconContainer}>
          <AntDesign name='pluscircleo' size={38} color="#5b5b5b"/>
        </TouchableOpacity>
        <View style={styles.snipedTextContainer}>
          <Text style={styles.snipedText}>Sniped!</Text>
        </View>
        <TouchableOpacity styles={styles.iconContainer}>
          <Ionicons name='ios-settings' size={38} color="#5b5b5b"/>
        </TouchableOpacity>
    </View>

    <View className="groups-container" style={styles.groupContainer}>
        <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={group => group.id}
        style={styles.list}
        />
        <TouchableOpacity style={styles.createSnipeButton}>
            <Text style={styles.snipeButtonText}>New Snipe</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
};

export const styles = StyleSheet.create({
 outerContainer:{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: '100%'
 },
 topMenu:{
  flex: 2,
  width: '100%',
  backgroundColor: '#999999',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10
 },
 groupContainer:{
  flex: 8,
  width: '100%',
  backgroundColor: '#F9F9F9',
 },
 snipedTextContainer:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 iconContainer: {
  width: 50,
  alignItems: 'center'
 },
 snipedText: {
  fontSize: 50,
  fontWeight: 'bold',
  color: '#fff',
 },

  list: { 
    paddingHorizontal: '5%', // Centering the items and covering 80% width
    paddingTop: 50, // Space at the top
    paddingBottom: 20, // Space at the bottom
   },
  group: { 
    position: 'relative',
    backgroundColor: '#c8c2c2', // Example background color
    borderRadius: 10, // Rounded corners
    width: '100%', // 80% of screen width (taking paddingHorizontal into account)
    padding: 45, // Padding inside each item
    marginBottom: 20, // Space between items
    alignItems: 'center', // Center content horizontally
   },
  groupName: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
   },
   notificationBubble: {
    position: 'absolute',
    top: -15,
    right: -5,
    backgroundColor: '#ed8224', // Notification bubble color
    borderRadius: 13, // Rounded corners
    padding: 17, // Adjust as needed
    minWidth: 20, // Ensures the bubble is somewhat square-shaped
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically
  },
  notificationText: {
    color: 'white',
    fontSize: 20, // Adjust as needed
  },
  createSnipeButton: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center', 
    backgroundColor: '#ff6347', // Example color
    borderRadius: 30, // Rounded corners
    paddingVertical: 20,
    paddingHorizontal: 50,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

  },
  snipeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

// const groups = [{
//       id: '1',
//       name: 'For The Plot',
//       notifications: 3,
//     },
//     {
//       id: '2',
//       name: 'Buck it We Fall',
//       notifications: 2
//     },
//     {
//       id: '3',
//       name: 'Plegends',
//       notifications: 0
//     },
//     {
//       id: '4',
//       name: 'asr buds',
//       notifications: 0
//     },
//     {
//       id: '5',
//       name: 'Main Lin',
//       notifications: 0
//     },
//     {
//       id: '6',
//       name: 'QAM',
//       notifications: 0
//     }
//     // more groups...
// ];
  

export default Groups;