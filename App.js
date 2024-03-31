import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Groups from './components/Groups.js'
import GroupFeed from './components/Group/GroupFeed.js';
import Post from './components/Group/Post.js'
import Snipe from './components/Snipe/Snipe.js'
import SnipeSend1 from './components/Snipe/SnipeSend1.js';
import supabase from './supabase.js'

export default function App() {
  return (
    <Groups />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
