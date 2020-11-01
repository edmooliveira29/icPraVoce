import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>IcParaVocê</Header>

    <Paragraph>
    Uma solução simples e inovadora para um problema: má distribuição de informação sobre as oportunidades acadêmicas.
    </Paragraph>
    <Button mode="outlined" 
    onPress={() => navigation.navigate('LoginScreen')}
    >
      ENTRAR
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      CADASTRAR
    </Button>
  </Background>
);

export default memo(HomeScreen);
