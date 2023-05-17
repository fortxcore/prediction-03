import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../hooks';
import {Block, Image, Button, Text} from '../components';

const NewPage = () => {

  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();

  return (
    <Block safe marginTop={sizes.md}>
    <Image
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
                {t('cameraupload.title')}
              </Text>
            </Button>
          <Block safe justify="center">
           // Implement the page boy
          </Block>
    </Image>
    </Block>
  );
};

export default NewPage;
