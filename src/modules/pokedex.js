import React from 'react'; 

export class Pokedex extends React.Component {

    constructor(props) {
        super(props);
        this.pokeList = new PokeList(this.props.list);
        this.key = `pokedex-${props['num']}`
    }


    enroll(person) {
        this.pokeList.add(person);
    }

    kick(person) {
        this.pokeList.remove(person);
    }

    render() {
        return React.createElement('div', {
            className: 'card_list',
            key: `${this.key}-list`
        }, 
        this.pokeList.getList());
    }
}

class PokeList {
    constructor(list) {
        this.list = list || [];
    }
    getList() {
        return this.list;
    }
    add(pokemon) {
        this.list.push(pokemon);
    }
    remove(pokemon) {
        const i = this.list.findIndex(x => x === pokemon);
        this.list.splice(i, 1);
    }
}