import React, { useEffect } from 'react';

import {

  AppRegistry,

  StyleSheet,

  Text,

  View,

} from 'react-native';

import MultiSelect from 'react-native-multiple-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

const items = [{

  id: '92iijs7yta',

  name: 'Ondo',

}, {

  id: 'a0s0a8ssbsd',

  name: 'Ogun',

}, {

  id: '16hbajsabsd',

  name: 'Calabar',

}, {

  id: 'nahs75a5sg',

  name: 'Lagos',

}, {

  id: '667atsas',

  name: 'Maiduguri',

}, {

  id: 'hsyasajs',

  name: 'Anambra',

}, {

  id: 'djsjudksjd',

  name: 'Benue',

}, {

  id: 'sdhyaysdj',

  name: 'Kaduna',

}, {

  id: 'suudydjsjd',

  name: 'Abuja',

}];

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
  {id: '26', name: 'HEAD_ACHE',label: 'HEAD_ACHE'},
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

 

const Sample = ({selcted}:any) => {
 let [selectedItems, setSelectedItems] = React.useState<any>([]);
 let [refData, setRefData] = React.useState<any>([]);


 useEffect (()=>{
  setSelectedItems(selcted)
  },[selcted])

  const onSelectedItemsChange = async(selectedItems1:any) => {

    // do something with selectedItems
  
    //console.log('Selected Items: ', selectedItems1);
    setSelectedItems(selectedItems1);
    await AsyncStorage.setItem('selectedItems',selectedItems1)
    
  
  };

 

  return (
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
  )
};

export default Sample;