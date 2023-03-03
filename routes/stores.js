const express = require('express')
const router = express.Router();
const {getAllStores, getSingleStore, createStore, deleteStore, updateStores} = require('../controllers/storeCtrl')

router.route('/').get(getAllStores).post(createStore)
router.route('/id').get(getSingleStore).delete(deleteStore).patch(updateStores)

module.exports = router