class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            'count': 0
        };
    }

    componentDidMount() {
        try {
            const jsonData = localStorage.getItem("count");
            const count = JSON.parse(jsonData);

            if (count) {
                this.setState(() => ({count}));
            }
        } catch (error) {
            // Do nothing            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            const jsonData = JSON.stringify(this.state.count);
            localStorage.setItem("count", jsonData);
        }
    }

    handleAddOne() {
        this.setState(previousState => ({count: previousState.count + 1}));
    }

    handleRemoveOne() {
        this.setState(previousState => ({count: previousState.count - 1}));
    }
    handleReset() {
        this.setState(() => ({count: 0}));
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleRemoveOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));