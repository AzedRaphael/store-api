const Store = require('../models/store')

const getAllStores = async(req,res)=>{
    const store = await Store.find({})
    res.status(200).json({store,numberOfHits: store.length})
    // throw new Error('Something went wrong')
}

const getSingleStore = (req,res)=>{
    res.status(200).send("GET SINGLE STORE")
}

const createStore = (req,res)=>{
    res.status(200).send("CREATE STORES")
}

const updateStores = (req,res)=>{
    res.status(200).send("UPDATE  STORES")
}

const deleteStore = (req,res)=>{
    res.status(200).send("DELETE STORES")
}

module.exports = {getAllStores, getSingleStore, createStore, deleteStore, updateStores}