import React, { useEffect, useState} from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../constants/types/RootStackParamList ';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Image, Button, Text} from '../../components';

const Predictions: React.FC<Props> =  ({ route, navigation }) => {

  const {t} = useTranslation();
  const {assets, gradients, sizes} = useTheme();
  const {image} = route.params;
        
  return (
    <Block safe marginTop={sizes.md} padding={sizes.padding}>
    {/* <Image
      background
      source={assets.background}
      padding={sizes.padding}
      style={{flex: 1}}> */}
            {/* <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                // color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p marginLeft={sizes.s}>
                {t('prediction.title')}
              </Text>
            </Button> */}
          <Block safe justify="center">
        
            <Text h4 center semibold marginBottom={sizes.md}>
              {t('prediction.title')}
            </Text>

            <Block safe justify="center" align='center'>
              <Image
                width={300}
                height={300}
                marginBottom={sizes.sm}
                source={{uri: image}}
              />
              <Block safe justify="center">
              <Text h5 center marginBottom={sizes.md}>
                Acne Type is Scar
              </Text>
              <Text h5 center>
                Skin Type is Dry
              </Text>
              </Block>
          </Block>
              <Button flex={0} gradient={gradients.dark} marginBottom={sizes.base} onPress={() => navigation.navigate('Suggetions')}>
                <Text white bold transform="uppercase">
                  Suggetions
                </Text>
              </Button>
        </Block>
     {/* </Image> */}
    </Block>
  );
};

export default Predictions;
