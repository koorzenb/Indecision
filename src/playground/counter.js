class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            'count': props.count
        };
    }

    handleAddOne() {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            };
        });
    }

    handleRemoveOne() {
        this.setState(previousState => {
            return {
                count: previousState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
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

Counter.defaultProps = {
    'count': 2
};

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));