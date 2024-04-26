const mongoose = require("mongoose");
// try {
//   mongoose.connect("mongodb://localhost:27017/Ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   });
//   console.log("Database Connected Successfully");
// } catch (err) {
//   console.log("Database Not Connected");
// }

try {
  mongoose.connect("mongodb+srv://khang123lxag:khang123lxag@cluster0.wbvmzma.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
