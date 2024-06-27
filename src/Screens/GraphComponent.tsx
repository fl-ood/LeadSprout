import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import { LineChart, ProgressChart, BarChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundColor: '#388e3c',
    backgroundGradientFrom: '#66bb6a',
    backgroundGradientTo: '#81c784',
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const GraphComponent = ({ type, data, title }: 
    { type: string, data: any, title: string }) => {
    const renderChart = () => {
      switch (type) {
        case 'lineChart':
          return <LineChart data={data} width={screenWidth - 40} 
          height={220} chartConfig={chartConfig} style={styles.chart} />;
        case 'progressChart':
          return <ProgressChart data={data} width={screenWidth - 40} 
          height={220} chartConfig={chartConfig} style={styles.chart} />;
        case 'barChart':
          return <BarChart data={data} width={screenWidth - 40} 
          height={220} chartConfig={chartConfig} style={styles.chart} 
          yAxisLabel="" yAxisSuffix="" />;
        default:
          return null;
      }
    };
  
    return (
      <View>
        <Text style={styles.subheading}>{title}</Text>
        {renderChart()}
      </View>
    );
  };

  const styles = StyleSheet.create({
    subheading: {
      fontSize: 20,
      fontWeight: '600',
      color: '#2e7d32',
      marginBottom: 10,
    },
    chart: {
      marginVertical: 10,
      borderRadius: 16,
    },
  });

  export default GraphComponent;