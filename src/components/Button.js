import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext; // It has to be called always contextType not like mycontextType etc..
    renderSubmit(language) {
        return language ==='english'? 'Submit':'Vorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {({language}) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
            </button>
        )
    }
    render(){
        // console.log('context--', this.context);
        //  const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}


Button.contextType = LanguageContext;
export default Button;