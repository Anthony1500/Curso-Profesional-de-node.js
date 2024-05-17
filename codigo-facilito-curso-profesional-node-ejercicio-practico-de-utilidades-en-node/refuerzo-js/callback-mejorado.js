const fs = require("fs/promises");

async function readFile() {
  try {
    const data1 = await fs.readFile("./archivo1.txt", "utf8");
    console.log("Contenido del archivo1.txt: ", data1);

    const data2 = await fs.readFile("./archivo2.txt", "utf8");
    console.log("Contenido del archivo2.txt: ", data2);

    const data3 = await fs.readFile("./archivo3.txt", "utf8");
    console.log("Contenido del archivo3.txt: ", data3);
  } catch (error) {
    console.error("Error leyendo el archivo", error);
  }
}
//mjeorar cuando no importe el orden

readFile();
