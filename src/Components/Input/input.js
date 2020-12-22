import React from 'react'
import './input.scss'
import logoBuscar from '../../Assets/ic_Search@2x.png'

class Input extends React.Component {

    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        window.location.href = `/?q=${this.state.search}`;
        console.log(this.state)
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form className="cont" onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="inputSearch"
                        placeholder={this.props.holder}
                        name="search"
                        onChange={this.handleChange}
                        value={this.state.search}
                    />
                    <button
                        type="submit"
                        className="buttonSearch"
                    >
                        <img src={logoBuscar} alt="Buscar" />
                    </button>
                </div>
            </form>
        )
    }
}
export default Input

