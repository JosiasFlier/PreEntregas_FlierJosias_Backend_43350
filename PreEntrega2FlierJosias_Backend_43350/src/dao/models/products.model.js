import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const productsCollection = "products";

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnails: { type: [String], default: [] },
    code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: Boolean, default: true },
});



productSchema.plugin(mongoosePaginate)

mongoose.set('strictQuery', false) //deshabilito el modo estricto solo para las consultas realizadas a través de Mongoose

const productModel = mongoose.model(productsCollection, productSchema)

export default productModel