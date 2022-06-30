import db from '../../../utils/db';

const postMethod = async (req, res) => {
  try {
    const newMessage = req.body.message;
    const message = await db.collection('message').get();
    const messageData = message.docs.map(message => message.data());
    console.log(messageData);
    if (messageData.some(msg => msg.text === newMessage)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection('message').add({
        text: newMessage,
        created: new Date(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

const getMethod = async (req, res) => {
  try {
    const message = await db.collection('message').get();
    const messageData = message.docs.map(message => message.data());
    console.log(messageData.length > 0);
    if (!messageData.length > 0) {
      res.status(404).end();
    } else {
      res.status(200).json(messageData);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await postMethod(req, res);
      break;
    case 'GET':
      await getMethod(req, res);
      break;
  }
}