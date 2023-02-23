import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CustomModal from '../Components/CustomModal';
import { COLORS } from '../Constant/Color';

const renderItemComponent = data => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={styles.image}
            source={require('../../Images/plusicon.png')}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: 10,
          }}>
          <Text style={{color: 'black'}}>{data?.item?.title}</Text>
          <Text style={{color: 'black'}}>{data?.item?.reminderText}</Text>
        </View>
      </View>
      {/* <Image style={styles.image} source={require('../../Images/plusicon.png')} />
  <Text style={{color:'black'}} >{data.name}</Text> */}
    </TouchableOpacity>
  );
};

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
};

const HomeScreen = () => {
  const [userList, setUserList] = useState([
    {
      title: 'Reminder 1',
      id: 1,
      reminderText:
        'This is the first reminder that the alaram is ring in the first half',
    },
    {
      title: 'Reminder 2',
      id: 2,
      reminderText:
        'This is the Second reminder that the alaram is ring in the first half',
    },
  ]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
 
 

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleSave = (reminderValue) =>{
    handleModal()
   
    let reminderList = [...userList];
    reminderList.push({
      title: reminderValue.reminder,
      reminderText:reminderValue.description,
    }
    );
    setUserList(reminderList);

  }

  function handleCloseModal(event, data) {
    handleModal();
    console.log("muskan",data);
  }
  const AddData = useCallback(() => {
    let reminderList = [...userList];
    reminderList.push({
      title: 'Reminder 3',
      id: 3,
      reminderText:
        'This is the Third reminder that the alaram is ring in the first half',
    });
    setUserList(reminderList);
  }, []);

  useEffect(() => {
   
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <FlatList
          data={userList}
          renderItem={item => renderItemComponent(item)}
          ItemSeparatorComponent={ItemSeparator}
        />
        <TouchableOpacity onPress={handleModal}>
          <Image
            source={require('../../Images/plusicon.png')}
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: 50,
              right: 0,
              marginRight: 30,
              marginBottom: 30,
            }}
          />
        </TouchableOpacity>
          <CustomModal visibility={isModalVisible} dismissAlert={handleModal} onCloseModal={handleCloseModal} saveData={handleSave} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: 50,
    borderRadius: 4,
    width: 50,
  },
});

export default HomeScreen;
