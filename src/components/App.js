import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
    // provider makes a seperate pipe of information everytime we use it, so that it can be maintained freely with out mixing up
    // if UserCreate is separately called it always gets from its default value
    /*
    <LanguageContext.Provider value='english'>
                <UserCreate />
    </LanguageContext.Provider>
    <UserCreate />

    Multiple contexts: one side other like a tree

    you can try changing red to primary in colorContext
    */
}

export default App;