const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// middleware that is specific to this router
/* router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  }); */

router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProduct);

router.route("/admin/product/new").post(newProduct);
router.route("/admin/product/:id").put(updateProduct);
router.route("/admin/product/:id").delete(deleteProduct);

/**
 * In the wild, you may find the above routes also written like:
 * 
 * router.route("/admin/product/:id")
 * .put(updateProduct)
 * .delete(deleteProduct);
 * 
 */

// router.get('/products',getProducts); 

module.exports = router;
