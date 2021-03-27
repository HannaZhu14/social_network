import React from 'react';
// import {StoreType} from './redux/store';
// import store from './redux/redux-store';
import App from './App';


// interface IContextProps {
//     state: RootStateType
//     dispatch: ({type}:{type:string}) => void
//     getState: () => RootStateType
// }

const StoreContext = React.createContext({} );

type ProviderType = {

}

export default StoreContext;