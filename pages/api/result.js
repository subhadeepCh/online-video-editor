// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ name: "John Doe" });
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      // Update or create data in your database
      // eslint-disable-next-line no-console
      console.log(req.body);
      res.status(200).json({ success: true, dataRecieved: req.body });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "200mb",
    },
  },
};
