import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './component/Greeting';
import Box from './component/Box';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      {/*주석을 작성해 봅시*/}
      {/*<Greeting name={name} />*/}
      <Box rounded={true} size="large" color="blue" />
    </SafeAreaView>
  );
};

export default App;
