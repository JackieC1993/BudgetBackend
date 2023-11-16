const express = require('express');
const transactionRouter = express.Router();
const transactionArray = require('../models/data');


transactionRouter.get("/", async (req, res) => {
    const allTransactions = await getAllTransactions();
    if (allTransactions[0]) {
      res.status(200).json(allTransactions);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });
  

  transactionRouter.get('/:id', async (req, res) => {
      const {id} = req.params;
      const oneTransactions = await getTransactions(id);
      if (oneTransactions) {
          res.status(200).json(oneTransactions);
          } else {
              res.status(404).json({ error: 'Not Found' });     
      }
  })
  

  transactionRouter.post('/',checkName,checkBoolean, async (req, res) => {
      const body = req.body
      res.status(200).json(transactions)
  })
  transactionRouter.delete('/:id', async (req, res) => {
      const {id} = req.params;
      const deletedTransaction = await deletedTransaction(id);
      if (deletedTransaction) {
          res.status(200).json(deletedTransaction)
          } else {
              res.status(404).json({ error: 'Transaction Not Found' });         
          }
      });
      
  transactionRouter.put("/:id",checkName, checkBoolean, async (req, res) => {
      const {id} = req.params;
      const body = req.body
      const updatedTransactions = await updatedTransactions(id, body);
      res.status(200).json(updatedTransactions)
  })
      
  
  module.exports = transactionRouter;
  
  