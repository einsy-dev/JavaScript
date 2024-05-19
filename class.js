class Index {
	constructor(data) {
		Object.assign(this, data);
	}

	async showThis() {
		await go().then(() => console.log('thisGo', this.name));
		await binded().then(() => console.log('thisBind', this.name));
	}
};

const index = new Index({ name: 'John', age: 24 });
index.showThis();

async function go() {
	this.time = Date.now();
	await setTimeout(() => console.log('HelloGo', this.time), 1000);
}

const binded = go.bind({ time: Date.now() });