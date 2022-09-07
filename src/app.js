// https://reactjs.org/docs/events.html for all React events

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOptionHandler = this.addOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {options: []};
        });
    }

    handlePick() {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randomIndex];
        this.setState(() => {   // not necesary to remember 
            return {optionPicked: option};
        });
        alert(option);

    }

    addOption(option) {
        if (!option) {
            return "type valid value";
        } else if (this.state.options.indexOf(option) > -1) {
            return 'type a unique value';
        }

        this.setState(prevState => {
            // do not use push -> will manipulate original array -> not what you want to do
            return {options: prevState.options.concat(option)};
        });
    }

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of this numbercruncher...";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0} optionPicked={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    options={this.state.options}
                    handleAddOption={this.addOptionHandler}
                />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.optionPicked}
                    disabled={!this.props.hasOptions}
                > What should I do?
                </button>
            </div>
        );
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <ol>Options
                    {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.optionText}</div>
        );
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error
            };
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type='text' name='option' placeholder='type an option' />

                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));