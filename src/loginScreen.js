import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const EmailIcon = props => <Icon {...props} name="email-outline" />;
const PasswordIcon = props => <Icon {...props} name="lock-outline" />;
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const fakeUser = {
    email: 'test@gmail.com',
    password: '123456',
  };
  const handleLogin = () => {
    if (email === fakeUser.email && password === fakeUser.password) {
      onLogin();
      console.log('Login successful!');
    } else {
      console.log('Login failed. Incorrect credentials.');
    }
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Layout style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require('../assets/img/background.png')}
            resizeMode="cover"
          />
          <Text style={styles.appTitle}>Todo App</Text>
          <Layout style={styles.content}>
            <Layout style={{marginBottom: 35, paddingHorizontal: 3}}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', color: '#4C85F7'}}>
                Welcome
              </Text>
              <Layout style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, color: '#B4B7BF'}}>
                  Don't have an account ?
                </Text>
                <TouchableOpacity>
                  <Text style={{fontWeight: 'bold', color: '#4C85F7'}}>
                    {' '}
                    Register now
                  </Text>
                </TouchableOpacity>
              </Layout>
            </Layout>

            <Input
              style={styles.input}
              placeholder="Email"
              size="large"
              value={email}
              onChangeText={nextValue => setEmail(nextValue)}
              accessoryLeft={EmailIcon}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              value={password}
              size="large"
              accessoryLeft={PasswordIcon}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              onChangeText={nextValue => setPassword(nextValue)}
            />
            <Button
              style={styles.button}
              onPress={handleLogin}
              status="basic"
              appearance="outline">
              Login
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  appTitle: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B4B7BF',
    top: '15%',
  },
  content: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    padding: 20,
  },
  input: {
    marginBottom: 25,
    width: '100%',
  },
  button: {
    marginTop: 10,
    width: 200,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
export default LoginScreen;
