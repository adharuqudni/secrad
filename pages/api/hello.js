// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import serviceAccount from '../../utils/db/secret_key';

export default function handler(req, res) {
  res.status(200).json(serviceAccount)
}
