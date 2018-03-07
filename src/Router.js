import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MemberList from './components/MemberList';
import MemberCreate from './components/MemberCreate';

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
            >
                <Scene key='auth'>
                    <Scene
                        key='login'
                        component={LoginForm}
                        title='Please Login'
                        
                    />
                </Scene>
                <Scene key='main' initial>
                    <Scene
                        key='memberList'
                        component={MemberList}
                        title='Members'
                        rightTitle="Add"
                        onRight={() => Actions.memberCreate()}
                        initial
                    />
                    <Scene
                        key='memberCreate'
                        component={MemberCreate}
                        title='Create Member'
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
