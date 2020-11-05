export class PokeSet {

	constructor(args) {
		this.args = {
			host: args['host'] || 'https://api.pokemontcg.io/v1/cards',
		}
	}

	query(option, args) {
		const url = new URL(this.args['host']);
		for (const key in args){
			url.searchParams.set(key, args[key]);
		};
		return fetch(url, option).then(
			response => response.json()
		);
	}

	create() {

	}

	list(args) {
		return this.query(
			{
				method: 'GET',
			},
			args,
		).then(obj => { return obj });
	}

	find(args) {
		return this.query(
			{
				method: 'GET',
			},
			{
				'id': args['id']
			}
		).then(obj => { return obj });
	}

	read(id) {
		return this.query(
			`${this.args['object']}/${id || ''}`,
			{
				method: 'GET',
			}
		);
	}

	update() {

	}

	delete() {

	}

}