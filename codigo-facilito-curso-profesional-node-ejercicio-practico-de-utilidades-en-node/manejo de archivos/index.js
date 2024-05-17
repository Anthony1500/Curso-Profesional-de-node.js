const fs = require("fs/promises");

async function main() {
  //leer
  try {
    const data = await fs.readFile("input.txt", "utf8");
    console.log("File content: ", data);
  } catch (error) {
    console.error("Error reading file: ", error);
  }
  //escribir
  try {
    await fs.writeFile("output.txt", "Hello World!", "utf8");
    console.log("File created successfully");
  } catch (error) {
    console.error("Error creating file: ", error);
  }
  //copiar
  try {
    await fs.copyFile("input.txt", "input-copy.txt");
    console.log("File copied successfully");
  } catch (error) {
    console.error("Error copying file: ", error);
  }
  //renombrar
  try {
    await fs.rename("input-copy.txt", "input-renamed.txt");
    console.log("File renamed successfully");
  } catch (error) {
    console.error("Error renaming file: ", error);
  }
  //borrar
  try {
    await fs.unlink("input-renamed.txt");
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting file: ", error);
  }
}
main();
