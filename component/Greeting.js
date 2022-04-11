import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>??</Text>
    </>
  );
}
// 기본 프롭값 설정
Greeting.defaultProps = {
  name: '리엑트 네이티브',
};

/* 다른 파일에서 커포넌트를 불러와 사용할 수 있게 해줌.. export*/
export default Greeting;
