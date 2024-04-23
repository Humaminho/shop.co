export type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	quantity: number;
	promotion?: number;
  brand: string;
	category: string;
	createdAt: Date;
};