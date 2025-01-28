import { Request, Response } from 'express';

export class HelloController {
  public helloWorld(req: Request, res: Response): void {
    res.send('Hello World');
  }
}

export default HelloController;