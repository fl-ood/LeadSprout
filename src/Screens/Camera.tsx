import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { CameraView, useCameraPermissions, CameraType } from 'expo-camera';

const ToggleCameraModal = () => {
  const [facing, setFacing] = useState<CameraType>('back'); // Ensure a specific type like 'back' or 'front'
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraModalVisible, setCameraModalVisible] = useState(false);

  
  if (!permission) {
    alert('Camera permissions are still loading.');
    return;
  }
  if (!permission.granted) {
    alert('Camera permissions not granted. Please grant permission.');
    requestPermission();
    return;
  }
  setCameraModalVisible(true);
  

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const closeCameraModal = () => {
    setCameraModalVisible(false);
  };

  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
    },
    button: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#3498db',
    },
    text: {
      fontSize: 16,
      color: '#ffffff',
    },
  });

  return (
    <Modal
      visible={cameraModalVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={closeCameraModal}
    >
      <View style={{ flex: 1 }}>
        <CameraView style={{ flex: 1 }} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeCameraModal}>
              <Text style={styles.text}>Close Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    </Modal>
  );
};

export default ToggleCameraModal;
