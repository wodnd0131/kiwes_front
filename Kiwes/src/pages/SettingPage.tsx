import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal, Linking} from 'react-native';
import Header from '../components/layout/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Terms =
  'https://drive.google.com/file/d/1zIPn45nR6PTI5tkjW80rbFqEx3wmFScS/view?usp=sharing';
const PrivacyPolicy =
  'https://drive.google.com/file/d/1Ri8iG7B2UI1aQjYvi9EtJBRcp_PoseCD/view?usp=sharing';
const openPDF = (pdf: string) => {
  Linking.openURL(pdf);
};

const SettingPage = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openinsta = () => {
    Linking.canOpenURL('instagram://app')
      .then(supported => {
        if (!supported) {
          Linking.openURL('https://www.instagram.com/kiwes_official');
        } else {
          Linking.openURL('instagram://user?username=kiwes_official');
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  return (
    <>
      <Header navigation={navigation} title={'설정'} />
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.text}>언어 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openPDF(Terms)}>
          <Text style={styles.text}>이용 약관</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openPDF(PrivacyPolicy)}>
          <Text style={styles.text}>개인정보 처리방침</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openinsta()}>
          <Text style={styles.text}>DM으로 문의하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>탈퇴하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  headdrContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  textContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '600',
    margin: 15,
    paddingTop: 10,
    paddingLeft: 10,
  },
});
export default SettingPage;
