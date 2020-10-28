const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: process.env.AWS_SQS_URI,
  handleMessage: async (message) => {
    console.log(message)
  }
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();

// taken from sqs-consumer examples
