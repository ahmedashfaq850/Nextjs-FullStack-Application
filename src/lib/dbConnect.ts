import mongoose, { Connection } from "mongoose";
const dbName = "nextjs-fullstack";

const connectDB = async () => {
  const connection: Connection[] = mongoose.connections;
  if (connection.length > 0 && connection[0].readyState === 1) {
    console.log("Already connected.");
    return;
  }
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${dbName}`
    );
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("MongoDb Connection Failed", err);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
