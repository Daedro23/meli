import React from 'react'
import './home.scss'
import shippingLogo from '../../Assets/ic_shipping.png'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import { ReactTitle } from 'react-meta-tags';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        fetch(`/api/obtener-items/?q=${urlParams.get('q')}`, { "method": "GET" })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: response,
                    isLoaded: true
                });
                console.log(this)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const articles = this.state.items;
        return (
            <div className="list">
                <ReactTitle title={`${articles.query} | Mercado Libre`} />
                {
                    articles.results && articles.results.map((items, key) => {
                        return (
                            <div key={key} className="list__container">
                                <Link className="list__img" to={`/${items.id}/${encodeURIComponent(items.title)}`}>
                                    <img src={items.thumbnail} alt="Articulo" />
                                </Link>
                                <div className="list__details">
                                    <div className="list__details__details1">
                                        <span>
                                            <NumberFormat value={items.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} className="list__price" />
                                            {items.shipping.free_shipping === true && <span className="list__shipping"><img src={shippingLogo} /></span>}
                                        </span>
                                        <span className="list__location">{items.address.city_name}</span>
                                    </div>
                                    <Link className="list__description" to={`/${items.id}/${encodeURIComponent(items.title)}`}>{items.title}</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Home