import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Image, Button, Text} from '../../components';

const Suggetions = () => {

  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, gradients, sizes} = useTheme();
        
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
                {t('suggetions.title')}
              </Text>
            </Button> */}
          <Block safe justify="center">
        
            <Text h4 center semibold marginBottom={sizes.sm}>
              {t('suggetions.title')}
           </Text>

           <Block safe justify="center" >
              <Text h5 center marginBottom={sizes.sm}>
                Try to use products includs A, B, C, D
              </Text>
              <Text h5 center>
                Try to avoid using products includs X, Y, Z
              </Text>
            </Block>
        </Block>
     {/* </Image> */}
    </Block>
  );
};

export default Suggetions;