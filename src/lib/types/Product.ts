import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true, unique: true },
		name: { type: String, required: true },
		brand: { type: String, required: true },
		slug: { type: String, required: true },
		images: { type: Array, required: true },
		price: { type: Number, required: true },
		description: { type: String, required: true },
		category: { type: String, required: true },
		colors: Array,
		sizes: Array,
	},
	{
		timestamps: true,
	}
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;

export type Product = {
	id: number;
	name: string;
	brand: string;
	slug: string;
	images: [];
	price: number;
	description: string;
	category: string;
	colors?: [];
	sizes?: [];
};
