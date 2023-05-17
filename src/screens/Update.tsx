import React, {useCallback, useEffect, useState} from 'react';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';


import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {useData, useTheme, useTranslation} from '../hooks';

import {
  Block,
  Switch,
  Button,
  Image,
  Input,
  Product,
  Text,
} from '../components';
import axios from 'axios';
import Sample from '../components/multipleSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MultiSelect from 'react-native-multiple-select';

const Update = ({route}:any) => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {isDark, handleIsDark} = useData();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [selected, setSelected] = React.useState([]);
  const navigation = useNavigation();
  const {text,tags} = route.params;

  const [availableData, setAvailableData] = useState<any>([]);

  const apiEndpoint = 'https://backend-ap.herokuapp.com/app/predict';
const fetchPrediction = async () => {
  console.log(text,selected);
  
  
  

  const response = await axios.post(apiEndpoint, {
    text:text,
    symptoms: selected?.length > 0 ? JSON.stringify(selected) : JSON.stringify(tags),
  }).then((response) => {
    console.log(response.data);
  navigation.navigate('Report', {data: response.data,tags:selected?.length > 0 ? selected : tags});
  }
  ).catch((error) => {
    console.log(error);
  }
  )
}

const data = [
  {id: '1', name: 'COUGH',label: 'COUGH'},
  {id: '2', name: 'MUSCLE_ACHES',label: 'MUSCLE_ACHES'},
  {id: '3', name: 'TIREDNESS',label: 'TIREDNESS'},
  {id: '4', name: 'SORE_THROAT',label: 'SORE_THROAT'},
  {id: '5', name: 'RUNNY_NOSE',label: 'RUNNY_NOSE'},
  {id: '6', name: 'STUFFY_NOSE',label: 'STUFFY_NOSE'},
  {id: '7', name: 'FEVER',label: 'FEVER'},
  {id: '8', name: 'NAUSEA',label: 'NAUSEA'},
  {id: '9', name: 'VOMITING',label: 'VOMITING'},
  {id: '10', name: 'DIARRHEA',label: 'DIARRHEA'},
  {id: '11', name: 'SHORTNESS_OF_BREATH',label: 'SHORTNESS_OF_BREATH'},
  {id: '12', name: 'DIFFICULTY_BREATHING',label: 'DIFFICULTY_BREATHING'},
  {id: '13', name: 'LOSS_OF_TASTE',label: 'LOSS_OF_TASTE'},
  {id: '14', name: 'LOSS_OF_SMELL',label: 'LOSS_OF_SMELL'},
  {id: '15', name: 'ITCHY_NOSE',label: 'ITCHY_NOSE'},
  {id: '16', name: 'ITCHY_EYES',label: 'ITCHY_EYES'},
  {id: '17', name: 'ITCHY_MOUTH',label: 'ITCHY_MOUTH'},
  {id: '18', name: 'Appliances',label: 'Appliances'},
  {id: '19', name: 'ITCHY_INNER_EAR',label: 'ITCHY_INNER_EAR'},
  {id: '20', name: 'SNEEZING',label: 'SNEEZING'},
  {id: '21', name: 'PINK_EYE',label: 'PINK_EYE'},
  {id: '22', name: 'SKIN_RASH',label: 'SKIN_RASH'},
  {id: '23', name: 'CHILLS',label: 'CHILLS'},
  {id: '24', name: 'JOINT_PAIN',label: 'JOINT_PAIN'},
  {id: '25', name: 'FATIGUE',label: 'FATIGUE'},
  {id: '26', name: 'HEADACHE',label: 'HEADACHE'},
  {id: '27', name: 'LOSS_OF_APPETITES',label: 'LOSS_OF_APPETITES'},
  {id: '28', name: 'PAIN_BEHIND_THE_EYES',label: 'PAIN_BEHIND_THE_EYES'},
  {id: '29', name: 'BACK_PAIN',label: 'BACK_PAIN'},
  {id: '30', name: 'MALAISE',label: 'MALAISE'},
  {id: '31', name: 'RED_SPOTS_OVER_BODY',label: 'RED_SPOTS_OVER_BODY'},
];
  const styles = StyleSheet.create({

    container: {
  
      flex: 1,
  
      backgroundColor: '#F5FCFF',
  
      padding: 10,
  
    },
  
    welcome: {
  
      fontSize: 20,
  
      textAlign: 'center',
  
      margin: 30,
  
    },
  
    instructions: {
  
      textAlign: 'center',
  
      color: '#333333',
  
      marginBottom: 5,
  
    },
  
  });


  useEffect(() => {
    setAvailableData(data?.filter((item:any) => !tags.includes(item.value)));
  },[tags]);
console.log("available",availableData);
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );
  let [selectedItems, setSelectedItems] = React.useState<any>([]);

  useEffect(()=>{
   setSelectedItems(tags);
  },[])



  const onSelectedItemsChange = async(selectedItems1:any) => {
    console.log("selected",selectedItems1)

    // do something with selectedItems
  
    //console.log('Selected Items: ', selectedItems1);
    setSelectedItems(selectedItems1);
    setSelected(selectedItems1);
    
  
  };

  return (
    <Block color={colors.card}>
      {/* search input */}

      <ScrollView>

        <Block
        row
        flex={0}
        justify="center"
        paddingBottom={sizes.l}
        color={colors.card}>
        <Text h3>Update Symptoms</Text>
      </Block>

      <Block flex={0} paddingBottom={sizes.l} color={colors.card}>
        <View style={{flex: 1}} />
        <View
          style={{
            width: '100%',
            paddingLeft: 40,
            paddingRight: 40,
          }}>
          
          <View style={styles.container}>
    <MultiSelect
      items={data}

      uniqueKey="name"

      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}

      selectText="Pick Items"

      searchInputPlaceholderText="Search Items..."

      tagRemoveIconColor="#CCC"

      tagBorderColor="#CCC"

      tagTextColor="#000"

      selectedItemTextColor="#000"

      selectedItemIconColor="#000"

      itemTextColor="#000"

      searchInputStyle={{ color: '#CCC' }}

      submitButtonColor="#CCC"

      submitButtonText="Submit"
    

    />

  </View>
        </View>
      </Block>

      <Block
        row
        flex={0}
        justify="center"
        paddingBottom={sizes.sm}
        color={colors.card}>
        <TouchableOpacity
          onPress={() => {
            fetchPrediction();
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 40,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'red',
            elevation: 5, // Add elevation for shadow effect
          }}>
          <Text h5 white marginHorizontal={sizes.s}>
            Prediction 
          </Text>
        </TouchableOpacity>
      </Block>

      <Block
        row
        flex={0}
        justify="center"
        paddingBottom={sizes.sm}
        color={colors.card}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 40,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: 'green',
            elevation: 5, // Add elevation for shadow effect
          }}>
          <Text h5 white marginHorizontal={sizes.s}>
            Back
          </Text>
        </TouchableOpacity>
      </Block>

      </ScrollView>
    </Block>
  );
};

export default Update;


