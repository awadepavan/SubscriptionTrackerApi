import { Router } from "express";
import {createSubscription,getUserSubscriptions} from "../controllers/subscription.controller.js"

const subscriptionRouter = Router();

//  authorize, 
subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));

// subscriptionRouter.post('/', (req, res) => res.send({ title: 'Create Subscription' }));

subscriptionRouter.post('/', createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

subscriptionRouter.get('/user/:id', getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));


export default subscriptionRouter;