const router =require ('express').Router();
const { raw } = require('express');
const TodoItemsModel = require('../models/todoItems');


router.post('/api/items', async (req,res) => {
    try{
        const newItem = new TodoItemsModel({
            item: req.body.item
        }); 

        const saveItem = await newItem.save();
        res.status(200).json("Item added successfully");
    }
    catch(err){
       res.json(err);
    }
});

router.get('/api/items', async (req,res) => {
    try{
        const items = await TodoItemsModel.find();
        res.status(200).json(items);
    }
    catch(err){
        res.json(err);
    }
});

router.put('/api/items/:id', async (req,res) => {
    try{
        const updateItem = await TodoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body });
            res.status(200).json("item updated successfully");
    }
    catch(err){
        res.json(err);
    }
});

router.delete('/api/items/:id', async (req,res) => {
    try{
        const item = await TodoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Item deleted successfully");
    }
    catch(err){
        res.json(err);
    }
});


// export
module.exports = router;