import React from 'react';
import {Provider} from 'react-redux'
import store from '../../store/store'
import BooksSectionContainer from "../booksSectionContainer";


const App = () => {
    return (
        <Provider store={store}>
            <div>
                <BooksSectionContainer />
            </div>
        </Provider>
    )
}

export default App;