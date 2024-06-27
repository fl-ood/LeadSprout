import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const BottomNav: React.FC = () => {
    return (
        <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={30} color="#2e7d32" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="line-chart" size={30} color="#2e7d32" />
          <Text style={styles.navText}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={30} color="#2e7d32" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cog" size={30} color="#2e7d32" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#2e7d32',
    },
    });

export default BottomNav;