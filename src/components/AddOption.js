import React from 'react';

export default class AddOption extends React.Component {
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