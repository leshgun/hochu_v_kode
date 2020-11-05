import React from 'react';

export class Paginator extends React.Component {

	constructor(props) {
        super(props);
        this.key = props['id'];
        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
    }

    render() {
    	const prev = React.createElement('button', {
    		className: `${this.key}_btn`,
    		onClick: this.onClickPrev,
    		key: `${this.key}_prevbtn`,
    		id: `${this.key}_prevbtn`
    	}, 'Previous');
    	const next = React.createElement('button', {
    		className: `${this.key}_btn`,
    		onClick: this.onClickNext,
    		key: `${this.key}_nextbtn`,
    		id: `${this.key}_nextbtn`
    	}, 'Next');
    	return React.createElement('div', {
    		className: this.key,
    		key: this.key
    	}, prev, next)
    }

    getOtherParams() {
    	return this.props['params'].toString().split('&').filter(
			p => !['page'].includes(p.split('=')[0])).join('&');
    }

    onClickPrev() {
    	const newPage = (parseInt(this.props['params'].get('page') || 1)) - 1;
    	const otherParams = this.getOtherParams()
    	if (newPage <= 0) window.location.href = "/" + otherParams;
    	else window.location.href = `?page=${newPage}&` + otherParams;
    }

    onClickNext() {
    	const newPage = (parseInt(this.props['params'].get('page')) || 1) + 1;
    	const otherParams = this.getOtherParams()
    	if (newPage > 99) window.location.href = "/" + otherParams;
    	else window.location.href = `?page=${newPage}&` + otherParams;
    }

    componentDidMount() {
        this.showBtn()
    }

    showBtn() {
    	const elem = document.getElementById(`${this.key}_prevbtn`)
    	if ((this.props['params'].get('page') || 1) === 1){
    		elem.style.display = 'none';
    	}
    }

}