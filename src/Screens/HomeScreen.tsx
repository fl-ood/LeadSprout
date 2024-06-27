import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, StatusBar} from 'react-native';
import GraphComponent from './GraphComponent';
import BottomNav from './BottomNav';

const screenWidth = Dimensions.get('window').width;

const lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [3, 4, 2, 5, 4, 6, 3],
      strokeWidth: 2,
    },
  ],
};

const progressChartData = {
  labels: ['A', 'B', 'C'], 
  data: [0.4, 0.6, 0.8],
};

const barChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>LeadSprout Dashboard</Text>
          <GraphComponent type="lineChart" data={lineChartData} title="Weekly Line Chart" />
          <GraphComponent type="progressChart" data={progressChartData} title="Progress Chart" />
          <GraphComponent type="barChart" data={barChartData} title="Monthly Bar Chart" />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    paddingBottom: 15,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 60,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    marginTop: 40,
  },
});

export default HomeScreen;
