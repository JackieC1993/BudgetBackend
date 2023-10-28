const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('../models/data');

transactionRouter.use(express.json());

transactionRouter.get('/', (req,res,next) => {
    try{
        if(transactionArray && transactionArray.length > 0){
            res.status(200).json(transactionArray);
        }
        else{
            res.status(404).json({message: 'No transactions found'});
        }
    }
    catch(err){
        next(err)
    }
});

transactionRouter.get('/:id', (req,res,next) => {
    try{
        const id = req.params.id;
        const transaction = transactionArray.find(item=> item.id === parseInt(id));
        if(transaction){
            res.status(200).json(transaction);
        }
        else{
            res.status(404).json({message: 'Transaction not found'});
        }

    }
    catch(err){
        next(err);
    }
});

transactionRouter.post('/', (req,res,next) => {
    try{
        const transaction = req.body;
        if(transaction){
        transactionArray.push(transaction);
        res.status(201).json(transaction);
    }
    else{
        res.status(404).json({message: 'Transaction not found'});
    }
}
catch(error){
    next(error)
}

});

transactionRouter.put('/:id', (req,res,next) => {
    try{
        const transactionId = req.body;
        const transactionToUpdate = req.body;
        const transactionIndex = transactionArray.findIndex(element=> element.id === transactionId);

        if (transactionIndex!== -1) {
            res.status(404).send({message: "Transaction not found });
        }

        const currentTransaction = transactionArray[transactionIndex];

        for (let key in transactionToUpdate) {
            if (currentTransaction.hasOwnProperty([key])) {
                currentTransaction[key] = transactionToUpdate[key];
            }
        }
        transactionArray[transactionIndex] = currentTransaction;

        res.send(currentTransaction);
    }
    catch(error){
        next(error)
    }
    });
    
    transactionRouter.delete('/:id',(req,res,next) => {
        try{
            const id = parseInt(req.params.id);
            const itemIndex = transactionArray.findIndex(element=> element.id === id);
             if (itemIndex === -1) {
                return res.status(404).json({message: 'Item not found'});
             }

             const deletedItem = transactionArray.splice(itemIndex, 1);

             res.send(deletedItem[0]);
            }catch (error){
                next(error);
            }
        });
        module.exports = transactionRouter;


        
