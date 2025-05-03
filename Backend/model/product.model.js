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
        type: array
    },
    brand: {
        type:String
    },
    designerType: {
        type: array
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
            star: {type: string},
            name:{type:string},
            comment:{type: string},
            postedBy:{type: string}
        }
    ]

})

const Product = mongoose.model("Product", productSchema)