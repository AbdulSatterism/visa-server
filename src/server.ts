import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(5000, () => {
      console.log(`Example app listening on port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
