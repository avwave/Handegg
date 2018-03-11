import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon, Button } from 'react-native-elements';
import LoginForm from './components/LoginForm';
import OTP from './components/OTP';
import SignupOTP from './components/SignupOTP';
import MemberList from './components/MemberList';
import MemberCreate from './components/MemberCreate';
import MemberEdit from './components/MemberEdit';
import StartScreen from './components/StartScreen';
import OptionsScreen from './components/OptionsScreen';
import TransferUserList from './components/TransferUserList';

const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navBarTitle}
            barButtonTextStyle={styles.barButtonTextStyle}
            barButtonIconStyle={styles.barButtonIconStyle}
            rightButtonTextStyle={styles.rightButtonText}
            tintColor='white'
        >
            <Scene 
                key='root'
                hideNavBar
                headerMode='float'
            >
                <Scene 
                    key='start' 
                    component={StartScreen}
                    initial
                />
                <Scene key='auth'>
                    <Scene
                        key='login'
                        component={LoginForm}
                        title='Please Login'
                    />
                </Scene>
                <Scene key='authOTP'>
                    <Scene
                        key='signup'
                        component={OTP}
                        title='Authenticate'
                        initial
                        rightTitle='Sign up'
                        onRight={() => Actions.newsignup()}
                    />
                    <Scene
                        key='newsignup'
                        component={SignupOTP}
                        title='New Account'
                    />
                </Scene>
                <Scene 
                    key='main'
                    
                    renderRightButton={() => (
                        <Button
                            icon={<Icon name='gear' type='evilicon' color='white' />}
                            text=''
                            onPress={() => Actions.options()}
                        />
                    )}
                >
                    <Scene
                        key='memberList'
                        component={MemberList}
                        title='Members'
                        
                    />
                    <Scene
                        key='memberCreate'
                        component={MemberCreate}
                        title='Create Member'
                    />
                    <Scene
                        key='memberEdit'
                        component={MemberEdit}
                        title='Edit Member'
                    />
                    <Scene
                        key='transferUserList'
                        component={TransferUserList}
                        title='Select player to transfer to'
                    />

                    <Scene
                        key='options'
                        component={OptionsScreen}
                        title='Options'
                        renderRightButton={null}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};


const styles = {
    navBar: {
        backgroundColor: '#2089dc',
        paddingTop: 20,
        paddingBottom: 10,
        height: 70
    },
    navBarTitle: {
        color: '#FFFFFF',
    },
    barButtonTextStyle: {
        color: 'white'
    },
    barButtonIconStyle: {
        tintColor: 'white'
    },
    rightButtonText: {
        color: 'white'
    }
};

export default RouterComponent;
