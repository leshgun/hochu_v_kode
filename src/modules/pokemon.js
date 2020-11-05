import React from 'react';

const getValue = (obj, title, defaultValue) => {
    if (!obj) return defaultValue
    if (typeof obj == 'string') return obj
    var value = []
    obj.forEach( function(e) {
        if (typeof e == 'string') value.push(e)
        else value.push(e['name'] || e['type'] || defaultValue)
    });
    return value.join(', ')
};

const getAttacks = (data) => {
    let arr = [];
    if (data['attacks'])
        data['attacks'].forEach( function(a, i) {
            arr.push(React.createElement('p', {
                key: `attack-${a['name']}`
            }, `(*) ${a['name']} (damage = ${a['damage'] || 0}; 
                    cost = ${a['cost'].join(', ') || 'Free'})`));
            if (a['text']) 
                arr.push(React.createElement('p', {
                    key: `attack-${a['name']}-text`
                }, `---- ${(a['text'])}`));
        });
    const a = data['ability']
    if (a) {
        arr.push(React.createElement('p', {
            key: `ability-${a['name']}`
        }, `(@) ${a['name']} (type = ${a['type']})`));
        arr.push(React.createElement('p', {
            key: `ability-${a['name']}-text`
        }, `---- ${(a['text'])}`));
    }
    if (data['text'])
        data['text'].forEach( function(a, i) {
            arr.push(React.createElement('p', {
                key: `text-${i}`
            }, a));
        });
    return arr
};

export class Pokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.pokedata = props['pokedata']
    }

    render() {

        var arr = []
        const data = this.pokedata
        this.props['titles'].forEach( function(element, index) {
            if (element === 'space') {
                arr.push(React.createElement('li', {
                    className: 'space',
                    key: 'about-space'
                }, 
                    React.createElement('div')))
            } else {
                const title = React.createElement('div', {
                    className: `about_title`,
                    key:  `about-${element}-title`
                }, element);
                const value = React.createElement('div', {
                    className: `about_value`,
                    key: `about-${element}-value`
                }, getValue(data[element], element, 'None'));
                arr.push(React.createElement('li', {key: `about-${element}-item`}, title, value))
            }
        });
        const list = React.createElement('ul', {
            className: 'about',
            key: 'about-list'
        }, arr)

        const image = React.createElement('img', {
            src: data['imageUrlHiRes'] || './img/default_pix.jpg',
            key: 'image'
        });
        const descr = React.createElement('div', {
            className: 'description',
            key: 'description'
        }, getAttacks(data));

        const profile = React.createElement('div', {
            className: 'profile',
            key: 'profile'
        }, image, descr);

        return [profile, list]

    }

};

export class PokeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.key = 'card-' + this.props['id'];
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const img = React.createElement('img', {
            className: `card__image`, 
            src: `${this.props['imageUrl'] || 'default_pix.jpg'}`,
            key: `image-${this.key}`
        }, null);

        const title = React.createElement('div', {
            className: `title`,
            key: `title-${this.key}`
        }, 'Pokemon name:');

        const title_value = React.createElement('div', {
            className: `value`,
            key: `title_value-${this.key}-`
        }, this.props['name'] || 'Name');

        const subtitle = React.createElement('div', {
            className: `subtitle`,
            key: `subtitle-${this.key}`
        }, 'Artist:');

        const subtitle_value = React.createElement('div', {
            className: 'value',
            key: `subtitle-value-${this.key}`
        }, this.props['artist'] || 'Artist');

        return React.createElement('div', {
            className: 'card', 
            key: `card-${this.key}`,
            onClick: this.onClick
        }, img, 
        React.createElement('div', {
            className: 'card__title',
            key: `card-title-${this.key}`
        }, title, title_value), 
        React.createElement('div', {
            className: 'card__subtitle',
            key: `card-subtitle-${this.key}`
        }, subtitle, subtitle_value));
    }

    onClick() {
        window.location.href = "/about?id=" + this.props['id'];
    }

};