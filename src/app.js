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
                <AddOption />
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
                <button>What should I do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));