export default class Order {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}

	getTotal() {
		let sumPrice = 0;
		this.items.forEach((e) => {
			sumPrice += e.price;
		});
		return sumPrice;
	}

	getTaxes() {
		let sumTaxes = 0;
		this.items.forEach((e) => {
			const tax = e.getTax();
			sumTaxes += e.calculateTax(tax);
		});
		return sumTaxes;
	}
}
