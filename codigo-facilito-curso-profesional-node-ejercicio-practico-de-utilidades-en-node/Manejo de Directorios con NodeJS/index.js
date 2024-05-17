const fs = require("fs/promises");
const path = require("path");

async function main() {
  //crear carpeta
  try {
    await fs.mkdir("test-folder");
    console.log("Folder created successfully");
  } catch (error) {
    console.error("Error creating folder: ", error);
  }
  //renombrar carpeta
  try {
    await fs.rename("test-folder", "renamed-folder");
    console.log("Folder renamed successfully");
  } catch (error) {
    console.error("Error renaming folder: ", error);
  }
  //mover carpeta
  try {
    await fs.mkdir("parent_folder");
    await fs.rename(
      "renamed-folder",
      path.join("parent_folder", "renamed-folder")
    );
    console.log("Folder moved successfully");
  } catch (error) {
    console.error("Error moving folder: ", error);
  }
  //copiar carpeta
  async function copyFolder(src, dest) {
    try {
      await fs.mkdir(dest);
      const files = await fs.readdir(src);

      for (const file of files) {
        const srcPatch = path.join(src, file);
        const desPatch = path.join(dest, file);
        const stat = await fs.stat(srcPatch);
        if (stat.isDirectory) {
          await copyFolder(srcPatch, desPatch);
        } else {
          await fs.copyFile(srcPatch, desPatch);
        }
      }
      
    } catch (error) {
      console.error("Error copying folder: ", error);
    }
  }
  try {
    await copyFolder('parent_folder','copied_folder')
    console.log("Folder moved successfully");
  } catch (error) {
    console.error("Error copying folder: ", error);
  }
  //remover carpeta
  async function removeFolder(folderPath) {
    try {
      const files = await fs.readdir(folderPath);

      for (const file of files) {
        const filePatch = path.join(folderPath, file);        
        const stat = await fs.stat(filePatch);
        if (stat.isDirectory) {
          await removeFolder(filePatch);
        } else {
          await fs.unlink(filePatch);
        }
      }
      await fs.rmdir(folderPath);
    } catch (error) {
      console.error("Error removing folder: ", error);
    }
  }
  try {
    await removeFolder('parent_folder');
    await removeFolder('copied_folder');
    console.log("Folder removed successfully");
  } catch (error) {
    console.error("Error removing folder: ", error);
  }
}
//fs.cp(src,dest,{recursive:true});
main();
