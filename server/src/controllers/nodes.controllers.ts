import { Request, Response } from 'express';

export default class NodesController {
  public index(req: Request, res: Response) {
    res.json({
      message: 'Hello boi',
    });
  }

  public auth(req: Request, res: Response) {
    console.log(req);
  }
}
