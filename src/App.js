import React,{useEffect, useState} from 'react';
import './_app.scss';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

import { Route,Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import WatchScreen from './screens/WatchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen';
import SubscriptionScreen from './screens/subscriptionsScreen/SubscriptionScreen';
import ChannelScreen from './screens/ChannelScreens/ChannelScreen';


const Layout = ({children}) => {

    const [sidebar,toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className="app__container">
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const {accessToken,loading} = useSelector(state=>state.auth);

    const history = useHistory();

    useEffect(()=>{
        if(!loading && !accessToken){
            history.push('/login')
        }
    },[accessToken,loading,history])

    return (
        <Switch>
            <Route exact path="/">
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>

            <Route path="/login">
                <LoginScreen />
            </Route>

            <Route path="/search/:query">
                <Layout>
                    <SearchScreen />
                </Layout>
            </Route>

            <Route path="/watch/:id">
                <Layout>
                    <WatchScreen />
                </Layout>
            </Route>

            <Route path="/feed/subscriptions">
                <Layout>
                    <SubscriptionScreen />
                </Layout>
            </Route>

            <Route path="/channel/:channelId">
                <Layout>
                    <ChannelScreen />
                </Layout>
            </Route>
            
            <Redirect to='/' />
        </Switch>
    );
};

export default App;
