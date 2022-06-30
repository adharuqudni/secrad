// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import serviceAccount from './secret_key.js';

export default function handler(req, res) {
  res.status(200).json(serviceAccount)
}
