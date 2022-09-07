// https://reactjs.org/docs/events.html for all React events

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["One", "Two", "Five"],
            optionPicked: null
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
        this.setState(() => {   // not necesary to remember state
            return {optionPicked: option};
        });
        alert(option);

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
                <AddOption options={this.state.options} />
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
            <li>{this.props.optionText}</li>
        );
    }
}
class AddOption extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) alert(option);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='option' placeholder='type an option' />

                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));