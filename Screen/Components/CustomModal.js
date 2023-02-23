import React, {useEffect, useState,useCallback} from 'react';

import {Modal, Text, View,TextInput, TouchableOpacity} from 'react-native';
import { COLORS } from '../Constant/Color';


export default function CustomModal({
  visibility,
  dismissAlert,
  saveData,
  onCloseModal,
}) {

    const [reminderValue,setReminderValue]=useState({reminder:'',description:'',datetime:''})
    const [reminderInput,setReminderInput]=useState('');
    const [descriptionInput,setDescriptionInput]=useState('');

 
  useEffect(() =>{
    console.log("aamir -----",reminderInput);
  })

  const onModalClose = (event) => {
    let data={title:reminderInput,reminderText:descriptionInput};
    onCloseModal(event, data);
  }

  return (
    <View>
      <Modal
        visible={visibility}
        animationType={'fade'}
        transparent={true}
        >
       <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
           
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              backgroundColor: 'white',
              marginVertical: 100,
              width: '100%',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 7,
              elevation: 10,
            }}>
             <Text style={{color:COLORS.black}} >Reminder Name</Text>
              <TextInput  
                
                value={reminderInput}
                placeholder="Please Enter Reminder Name"
                placeholderTextColor="#8b9cb5"
               onChangeText={(value) => {
  setReminderInput(value)
}}
              />
               <Text style={{color:COLORS.black}} >Reminder Description</Text>
              <TextInput
               
               value={descriptionInput}
                placeholder="Please Enter Reminder Description"
                placeholderTextColor="#8b9cb5"
                name='description'
                onChangeText={(value) => {
  setDescriptionInput(value)
}}
              />
             
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}} >
              <TouchableOpacity 
                
                onPress={e => onModalClose(e)}
                style={{
                  width: 100,
                  borderRadius: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                 
                  backgroundColor: COLORS.red,
                  borderColor: '#ddd',
                  borderBottomWidth: 0,
                  borderRadius: 5,
                  bottom: 0,
                  marginBottom: 10,
                  marginRight:20,
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', margin: 15}}>Save</Text>
              </TouchableOpacity>
              
            <TouchableOpacity 
                
               onPress={() => setReminderValue({reminder:'',description:'',datetime:''})}
              style={{
                width: 100,
                borderRadius: 0,
                alignItems: 'center',
                justifyContent: 'center',
               
                backgroundColor: COLORS.red,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                borderRadius: 5,
                bottom: 0,
                marginBottom: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'white', margin: 15}}>Reset</Text>
            </TouchableOpacity>
              </View>
             
          </View>
        </View>
      </Modal>
    </View>
  );
}