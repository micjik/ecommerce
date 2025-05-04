import express from "express"
import { deleteproduct, getAllproducts, getProduct, ratingProduct, updateProduct } from "../controller/product.controller.js"
import router from "./auth.route.js"
const route = express.Router()

//GET PRODUCT

 route.get("/api/v1/:id", getProduct)

 //GET ALL PRODUCTS

 route.get("/api/v1/", getAllproducts)

 //UPDATE PRODUCT 

  route.put("/api/v1/:id", updateProduct)

  //DELETE PRODUCT

  route.delete("/api/v1/:id", deleteproduct)

  // RATING PRODUCT

  route.post("/api/v1/:id", ratingProduct)

  export default router