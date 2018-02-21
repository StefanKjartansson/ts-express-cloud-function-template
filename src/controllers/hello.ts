import {Request, Response} from 'express';

/**
 * POST /
 *
 */
export let post = (req: Request, res: Response) => {
  res.status(200).send(`Hello ${req.body.name}!`);  
};

export let get = (req: Request, res: Response) => {
  res.status(200).send('hello');  
};