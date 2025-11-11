import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    reqs: req.url,
    status: "ok",
    timestamp: new Date().toISOString(),
  });
};
