
import React from 'react';

export class DropDown extends React.Component  {

	constructor(props) {
        super(props);
        this.state = {opendd: 'none'};
        this.onClick = this.onClick.bind(this);
        this.key = this.props['id'];
        this.separator = '-'
        this.params = this.props['params']
    }

	render() {
		let arr = [];
		const key = this.key;
		const sep = this.separator;
		const params = this.params;
		const otherParams = this.params.toString().split('&').filter(
			p => ![key, 'page'].includes(p.split('=')[0])).join('&');
		const caret = React.createElement('i', {
			className: 'fa fa-caret-down',
			key: `${key}${sep}caret`,
			id: `${key}${sep}caret`,
		});
		const button = React.createElement('button', {
			className: 'dropbtn',
			key: `${key}${sep}button`,
			id: key,
			onClick: this.onClick
		}, params.get(key) || key, caret);
		this.props['list'].forEach( function(e, i) {
			arr.push(React.createElement('a', {
				key: `${key}${sep}link${sep}${i}`,
				href: `?${key}=${e}${'&' + otherParams || ''}`
			}, e))
		});	
		const item = React.createElement('div', {
			className: `dropdown__items`,
			id: `${key}${sep}item`,
			key: `${key}${sep}item`
		}, arr);
		return React.createElement('div', {
			className: 'menu__item',
			key: `${key}${sep}menu`
		}, button, item);
	}

	componentDidMount() {
        this.sibscribeTo('click');
    }

	sibscribeTo(event) {
        if (window.myEvent.eventListener[event]) {
            window.myEvent.eventListener[event].push(this);
        }
    }

    showDropDown() {
    	document.getElementById(`${this.key}${this.separator}item`).style.display = this.state.opendd;
    }

	onClick() {
        this.setState({opendd: 'flex'})
        this.showDropDown()
    }

    update(target) {
    	if (target.id.split(this.separator).includes(this.key)) this.onClick()
    	else this.setState({opendd: 'none'})
    	this.showDropDown()
    }

}

export class DropDownList extends React.Component {

	constructor(props) {
        super(props);
        this.state = {};
        this.key = this.props['id'];
        this.listdd = this.props['list']
        this.list = []

        window.myEvent = window.myEvent || {};
        window.myEvent.eventListener = window.myEvent.eventListener || {};
        window.myEvent.eventListener['click'] = 
        	window.myEvent.eventListener['click'] || [];
    }

    setList() {
    	this.list = this.getList();
    }

    getList() {
    	const arr = []
    	const params = this.props['params']
    	this.listdd.forEach( function(dd) {
    		arr.push(React.createElement(DropDown, {
				id: dd[0],
				key: dd[0],
				params: params,
				list: dd[1]
			}));
    	});
    	return arr
    }

    render() {
    	this.setList()
        return React.createElement('div', {
            className:'menu',
            key: `menu-${document.getElementsByClassName('menu').length+1}`
        }, 
        this.list);
    }

}