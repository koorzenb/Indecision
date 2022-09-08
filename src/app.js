// https://reactjs.org/docs/events.html for all React events

class IndecisionApp extends React.Component {
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
        const subTitle = "Put your life in the hands of this numbercruncher...";

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
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.optionPicked}
                disabled={!props.hasOptions}
            > What should I do?
            </button>
        </div>
    );
};

const Options = props => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add option</p>}
            <ol>
                {
                    props.options.map((option) => (
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ol>
        </div>
    );
};

const Option = props => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>

    );
};
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

        this.setState(() => ({error}));

        if (!error) e.target.elements.option.value = '';
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