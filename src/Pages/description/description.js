import React from 'react';
import './description.scss';
import NumberFormat from 'react-number-format';
import MetaTags from 'react-meta-tags';

class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`/api/obtener-item/?id=${id}`, { "method": "GET" })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    item: response,
                    isLoaded: true
                });
                console.log(this)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const { tags } = this.state.item;
        return (
            <div className="description">
                <MetaTags>
                    <title>{this.state.item.title} | Mercado Libre</title>
                    {tags && tags.map((tags, i) => <meta key={i} name="article:tag" content={tags} />)}
                </MetaTags>
                <div className="description__container">
                    <div className="description__img"><img src={this.state.item.pictures && this.state.item.pictures[0].secure_url} /></div>
                    <div className="description__data">
                        <div className="description__data__items">{this.state.item.condition === 'new' ? 'Nuevo' : 'Usado'}{this.state.item.sold_quantity === 0 ? '' : ` - ${this.state.item.sold_quantity} vendidos`}</div>
                        <div className="description__data__title">{this.state.item.title}</div>
                        <div className="description__data__price"><NumberFormat value={this.state.item.base_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} /></div>
                        <div className="description__data__container"><button className="description__data__container__button">Comprar</button></div>
                    </div>
                </div>
                <div className="description__descrip">
                    <div className="description__descrip__title">Descripción</div>
                    <div className="description__descrip__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>

            </div>
        )
    }
}

export default Description;