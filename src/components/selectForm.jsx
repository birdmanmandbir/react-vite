import React from "react"

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ['coconut'] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: [...this.state.value, event.target.value] });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                </label>
                <select multiple value={['coconut']} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="Submit" />
            </form >
        );
    }
}

export default FlavorForm
