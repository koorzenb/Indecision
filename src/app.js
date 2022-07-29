// https://reactjs.org/docs/events.html for all React events

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
                <ol>Options</ol>
            </div>
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


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));