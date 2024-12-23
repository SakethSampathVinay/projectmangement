import mongoose from "mongoose";

const connectToDB = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://sakethsampath2006:C4JwHALSilYYHuwN@cluster0.1l52s.mongodb.net/"
      )
      .then(() => console.log("DB Connected Successfully"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log("Not connected to Database");
  }
};

export default connectToDB;
