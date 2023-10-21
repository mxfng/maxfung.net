import { NextApiRequest, NextApiResponse } from 'next';
import send from 'next-send';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Use the `send` function to serve the .gif file
  send(req, '/gifs/80s.gif').pipe(res);
};
