import React, { Component } from 'react';
import classes from './WeatherForm.css';

class WeatherForm extends Component {
    constructor (props) {
        super(props);
    this.items = [
        'São Paulo',
        'Osasco',
    ];
    this.state = {
        suggestions: [],
        text: '',
        text1a: '',
    };
}

    onTextChanged = (event) => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className={classes.sugList}> 
                {suggestions.map((item) => <li onClick={() => this.suggestionStatesCleaner(item)}>{item}</li>)}
            </ul>
        );
    }
    suggestionSelected (optionClicked) {
        console.log(optionClicked)
        const agoraSim = optionClicked;
        this.setState({text1a: agoraSim})
    

        // this.props.functionHandler(this.state.text)
        console.log(this.state.text1a);
    }
    // functionPush () {
    //     console.log(this.state.text1a);
    //     console.log(this.state.text);
    // }
    suggestionStatesCleaner (aew) {
    this.props.functionHandler(aew);
    this.setState({suggestions: []})
}
    render() {
        const { text } = this.state;
        return (
            <div>
                <div className={classes.Climatempo}>
                    <img height='50%' src={require('../../assets/images/logo-white.png')} />
                </div>
                <div className={classes.Headerf1}>
                    <form onSubmit={this.getWeather}>
                        <div className={classes.Container}>
                            <input     onKeyPress={event => {
                                          if (event.key === 'Enter') {
                                                this.suggestionSelected()
                                         }}}
                                         autoComplete="off" 
                                         value={text} 
                                         onChange={this.onTextChanged} 
                                         name="city" 
                                         placeholder="Osasco ou São Paulo" 
                                         className={classes.FormControl} 
                                         autoFocus 
                                         />
                            {this.renderSuggestions()}
                        </div>
                        {/* <button className={classes.ButtonAs}>
                            Get Weather!
            </button> */}
                    </form>
                </div>
            </div>
        );
    }
};

export default WeatherForm;