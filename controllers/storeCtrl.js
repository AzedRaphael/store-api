const getAllStores = (req,res)=>{
    res.status(200).send("GET ALL STORES")
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