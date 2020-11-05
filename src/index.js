import React from 'react';
import ReactDOM from 'react-dom'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Pokemon} from './modules/pokemon.js';
import {PokeCard} from './modules/pokemon.js';
import {Pokedex} from './modules/pokedex.js';
import {PokeSet} from './modules/pokeset.js';
import {DropDownList} from './modules/dropdown.js';
import {Paginator} from './modules/paginator.js'


window.onclick = function(e) {
	if (window.myEvent)
		if (window.myEvent.eventListener['click'])
		    window.myEvent.eventListener['click'].forEach(listener => {
		        listener.update(e.target);
		    })
}

async function renderMenu(params) {
	const typeset = new PokeSet({
    	host: 'https://api.pokemontcg.io/v1/types'
    });
    const subtypeset = new PokeSet({
    	host: 'https://api.pokemontcg.io/v1/subtypes'
    });
   	const types = (await typeset.list({}).then(obj => { return obj }))['types']
   	const subtypes = (await subtypeset.list({}).then(obj => { return obj }))['subtypes']

   	const comp = React.createElement(DropDownList, {
		id: 'menu',
		key: 'menu',
		params: params,
		list: [['types', types], 
				['subtype', subtypes]]
	});
	const parent = document.getElementsByTagName('aside')[0]
   	if (parent) 
		ReactDOM.render(
	    	<Router>
	    		<Route path='/home' render={() => comp} />
	    	</Router>, 
			document.getElementsByTagName('aside')[0]
		)
	//
	//
}

async function renderCards(params, pokePerPage) {
	let parent = document.getElementsByTagName('main')[0];
	const page = params.get('page') || 1;
	const myPage = Math.floor((page*pokePerPage)/100) + 1
	const mySlice = (page*pokePerPage) % 100
	const args = {
		'page': myPage || 1,
		'types': params.get('types') || '', 
		'subtype': params.get('subtype') || '',
	};
	const pokeset = new PokeSet({
    	host: 'https://api.pokemontcg.io/v1/cards?'+params.toString()
    });
	var parr = [];
	const myset = (await pokeset.list(args).then(obj => { return obj }))['cards'].slice(
								mySlice-pokePerPage, mySlice);
	myset.forEach((obj) => {
	    	obj['key'] = `card-${obj['id']}`
	        const pokemon = React.createElement(PokeCard, obj);
	        parr.push(pokemon)
	});
    const paginator = React.createElement(Paginator, {
		id: 'paginator',
		key: 'paginator',
		'params': params
	});

    const num = document.getElementsByClassName('card_list').length+1
    const pokedex = React.createElement(Pokedex, {
		list: parr,
		'num': num,
		key: `pokedex-${num}`
	});
	const id = params.get('id')
	let about = ''
	if (id) {
		const data = (id) ? myset.filter(e => e['id']===id)[0] : {}
	    const arr = ['name', 'types', 'subtype', 'supertype', 'space', 'hp', 'rarity',
	                        'evolvesFrom', 'resistances', 'weaknesses'];
	    about = React.createElement(Pokemon, {
			'titles': arr,
			'pokedata': data,
			'key': 'about'
		})
		parent = document.getElementsByClassName('wrapper')[0]
	}

    ReactDOM.render(
    	<Router>
    		<Route path='/home' render={() => [pokedex, paginator]} />
    		<Route path='/about' render={() => about || ''}/>
    	</Router>, 
		parent
	)
	////

}

async function init() {
	const params = new URLSearchParams(window.location.search);
	const pokePerPage = 12;

    renderMenu(params);
    renderCards(params, pokePerPage);

}

init();