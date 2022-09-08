import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// https://reactjs.org/docs/events.html for all React events

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOptionHandler = this.addOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const jsonData = localStorage.getItem("options");
            const options = JSON.parse(jsonData);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (error) {
            // Do nothing            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const jsonData = JSON.stringify(this.state.options);
            localStorage.setItem("options", jsonData);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));

    }

    handleDeleteOption(option) {
        this.setState(prevState =>
            ({options: prevState.options.filter(_ => _ !== option)})
        );
    }

    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randomIndex];
        this.setState(() => ({optionPicked: option})); // not necesary to remember 

        alert(option);
    }

    addOption(option) {
        if (!option) {
            return "type valid value";
        } else if (this.state.options.indexOf(option) > -1) {
            return 'type a unique value';
        }

        // do not use push -> will manipulate original array -> not what you want to do
        this.setState((prevState) => ({options: prevState.options.concat(option)}));


    }

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of dees numbercruncher...";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} optionPicked={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    options={this.state.options}
                    handleAddOption={this.addOptionHandler}
                />
            </div>
        );
    }
};