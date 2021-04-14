import React from 'react';
import './App.css';
import Nav from './components/NavBar/Nav';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App: React.FC = () => {
    return (
        <div className={'app_wrapper'}>
            <HeaderContainer/>
            <Nav/>
            <div className={'app_wrapper_content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                {/*<Route path={'/news'} render={() => </>}/>*/}
                {/*<Route path={'/music'} render={() => </>}/>*/}
                {/*<Route path={'/settings'} render={() => </>}/>*/}
            </div>
        </div>
    );
}

export default App;
