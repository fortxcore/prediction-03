import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Button, Image, Text} from '../../components';
import * as ImagePicker from 'expo-image-picker';

const Dashboard = () => {

  const {t} = useTranslation();
  const navigation = useNavigation();
  const {gradients, sizes} = useTheme();
  const [image, setImage] = useState<string | null>(null);


  const handleSelectImage = async () => {

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };


  const handleTakePhoto = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };

  const handleUpload = () => {
    navigation.navigate('Predictions', {image: image});
  }

  return (
    <Block safe marginTop={sizes.md} padding={sizes.padding}>
      {/* <Image
        background
        source={assets.background}
        padding={sizes.padding}
        style={{flex: 1}}>
            <Button
                row
                flex={0}
                justify="flex-start"
                onPress={() => navigation.goBack()}>
                <Image
                  radius={0}
                  width={10}
                  height={18}
                  color={colors.white}
                  source={assets.arrow}
                  transform={[{rotate: '180deg'}]}
                />
                <Text p white marginLeft={sizes.s}>
                  {t('dashboard.title')}
                </Text>
              </Button> */}
              
        <Block safe justify="center">
          
            <Text h4 center semibold>
              {t('dashboard.title')}
            </Text>

            <Block safe justify="center">
              <Button flex={0} gradient={gradients.dark} marginBottom={sizes.base} onPress={handleTakePhoto}>
              <Text white bold transform="uppercase">
                Take Photo
              </Text>
              </Button>
              <Button flex={0} gradient={gradients.dark} marginBottom={sizes.base} onPress={handleSelectImage}>
              <Text white bold transform="uppercase">
                Upload Photo
              </Text>
              </Button>
            </Block>

          <Block safe justify="center">
            {image && (
            <Image source={{ uri: image }} style={{ width: 300, height: 300, alignSelf:'center', marginBottom:sizes.xl }} />
            )}
          
            {image && (
            <Button flex={0} gradient={gradients.secondary} marginBottom={sizes.xl} onPress={handleUpload}>
              <Text white bold transform="uppercase">
                Upload
              </Text>
            </Button>)}
          </Block>
      </Block>
      {/* </Image> */}
  </Block>
  );
};

export default Dashboard;