// https://reactjs.org/docs/events.html for all React events

class IndecisionApp extends React.Component {

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of this numbercruncher...";
        const options = ["One", "Two", "Four"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption options={options} />
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
    handlePick() {
        alert("cliked");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>Options
                    {this.props.options.map(option => <Option key={option} optionText={option} />)}
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