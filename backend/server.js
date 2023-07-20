const express = require("express");
const app = express();
const PORT = process.env.PORT || 8089;
const sequelize = require("./database/db");
const db = require("./models/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200", "http://localhost:3000", "http://localhost:59921"],
  })
);

//routers
const userRoutes = require("./routes/user");
const restaurantRoutes = require("./routes/restaurant");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const addressRoutes = require("./routes/address");
const homeRoutes = require("./routes/home");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const orderdetailsRoutes = require("./routes/orderdetails");
const cartdetailsRoutes = require("./routes/cartdetails");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", homeRoutes);
app.use("/user", userRoutes);
// app.use("/login", loginRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/order/details", orderdetailsRoutes);
app.use("/address", addressRoutes);
app.use("/register", registerRoutes);
app.use("/cartdetails", cartdetailsRoutes);

app.use("/orderdetails", orderdetailsRoutes);

db.sequelize.sync().then(() => {
  console.log("Yes ReSync");
});
app.listen(PORT, () => {
  console.log(`Running On ${PORT}`);
});
