import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    address: {
        type: string
    },
    phone: {
        type: string
    },
    email: {
        type: string
    },
    status: {
        type: Number,
        default: 0
    },
}, {timestamps: true}
)

const Order = mongoose.model("Order", orderSchema)
export default Order