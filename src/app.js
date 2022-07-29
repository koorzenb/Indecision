// https://reactjs.org/docs/events.html for all React events

class IndecisionApp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of this numbercruncher...</h2>
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
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option comp</li>
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