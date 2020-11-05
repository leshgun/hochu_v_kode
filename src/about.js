import React from 'react';
import ReactDOM from 'react-dom'; 

import {PokeSet} from './modules/pokeset.js'
import {Pokemon} from './modules/pokemon.js'

async function init () {
	const parent = document.getElementsByTagName('main')[0];
	const params = new URLSearchParams(window.location.search);
    const id = params.get('id')
    if (!id) window.location.href='/';
	const pokeset = new PokeSet({});
	const data = (await pokeset.find({'id': id}).then(obj => { return obj }))['cards'][0]
    const arr = ['name', 'types', 'subtype', 'supertype', 'space', 'hp', 'rarity',
                        'evolvesFrom', 'resistances', 'weaknesses'];
    ReactDOM.render(
    	React.createElement(Pokemon, {
    		'titles': arr,
    		'pokedata': data,
    		'key': 'about'
    	}),
		parent
	)

}


init();