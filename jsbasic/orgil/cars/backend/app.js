const express = require("express");
const cors = require("cors");
// bodyparser
// json parser

let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202211/4296080/BM817072_18e966.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202212/4473390/BN030686_f96e1a.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202212/4065347/BM592373_1c13ec.jpg",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202211/4365719/BM879074_9c651b.JPG",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202210/4197162/BM720293_84e010.jpg",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    image:
      "https://image-cdn.beforward.jp/large/202212/4473367/BN030663_cc745c.jpg",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    image:
      "https://image-cdn.beforward.jp/large/202212/4458734/BN016325_a1717e.jpg",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    image:
      "https://image-cdn.beforward.jp/large/202212/4465035/BN022556_6db6e6.jpg",
  },
  {
    id: 8,
    model: "Land Cruiser Prado TX",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202212/4357803/BM875842_e31b41.JPG",
  },
  {
    id: 9,
    model: "Land Cruiser 300",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202212/4474174/BN031440_9049d7.jpg",
  },
  {
    id: 10,
    model: "Land Cruiser Prado",
    brand: "Toyota",
    image:
      "https://image-cdn.beforward.jp/large/202210/4224226/BM746915_ebdc74.jpg",
  },
  {
    id: 11,
    model: "Skyline GT-R",
    brand: "Nissan",
    image:
      "https://image-cdn.beforward.jp/large/202202/3296914/BK788511_106854.jpg",
  },
  {
    id: 12,
    model: "Nissan GT-R",
    brand: "Nissan",
    image:
      "https://image-cdn.beforward.jp/large/202212/4466788/BN024488_759d13.jpg",
  },
  {
    id: 13,
    model: "Leaf",
    brand: "Nissan",
    image:
      "https://image-cdn.beforward.jp/large/202207/3871317/BM401585_2523eb.JPG",
  },
  {
    id: 14,
    model: "Kick 2022",
    brand: "Nissan",
    image:
      "https://image-cdn.beforward.jp/large/202212/4464540/BN021888_d84df6.jpg",
  },
  {
    id: 15,
    model: "Kicks 2021",
    brand: "Nissan",
    image:
      "https://image-cdn.beforward.jp/large/202211/3833597/BM365835_3b7841.jpg",
  },
];
let index = cars.length;

const app = express();

// Enable all cors requests
app.use(
  cors({
    origin: "http://127.0.0.1:5501",
  })
);

app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

// app.get("/api/cars", (req, res) => {
//   const model = req.query.model.toLowerCase();
//   const brand = req.query.brand.toLowerCase();
//   console.log(model);
//   console.log(brand);
//   let filteredCars = [];

//   if (model && brand) {
//     // model bolon brandeer ni 2ulangaar ni suult hiine
//     filteredCars = cars.filter(
//       (car) =>
//         car.model.toLowerCase().includes(model) &&
//         car.brand.toLowerCase().includes(brand)
//     );
//   } else if (model) {
//     filteredCars = cars.filter((car) =>
//       car.model.toLowerCase().includes(model)
//     );
//   } else if (brand) {
//     filteredCars = cars.filter((car) =>
//       car.brand.toLowerCase().includes(brand)
//     );
//   } else {
//     filteredCars = cars;
//   }
//   res.send(filteredCars);
// });

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
