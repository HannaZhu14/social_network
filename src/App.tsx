import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App: React.FC = () => {
    return (
        <div className={'app_wrapper'}>
            <Header/>
            <Nav/>
            <div className={'app_wrapper_content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                {/*<Route path={'/news'} render={() => </>}/>*/}
                {/*<Route path={'/music'} render={() => </>}/>*/}
                {/*<Route path={'/settings'} render={() => </>}/>*/}
            </div>
        </div>
    );
}

export default App;
