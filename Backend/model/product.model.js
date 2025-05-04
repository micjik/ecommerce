import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    whatinbox: {
        type: String,
        
    },
    img: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    wholesalePrice:{
        type: Number,
        required: true
    },
    wholesaleMinimumQuantity:{
        type: Number
    },
    catgeories:{
        type: Array,

    },
    concern: {
        type: Array
    },
    brand: {
        type:String
    },
    designerType: {
        type: Array
    },
    originalType:{
        type: Number
    },
    discountedPrice:{
        type: Number,
    },
    instock:{
        type:Boolean,
        default: true
    },
    ratings: [
        {
            star: {type: String},
            name:{type:String},
            comment:{type: String},
            postedBy:{type: String}
        }
    ]

})
productSchema.index({"$**": "text"})

const Product = mongoose.model("Product", productSchema)

export default Product