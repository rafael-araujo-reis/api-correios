import fs from "fs";
import path from "path";

module.exports = (app: any) => {
  fs.readdirSync(__dirname)
    .filter((file: string) => file.indexOf(".") !== 0 && file !== "index.ts")
    .forEach((file: string) => require(path.resolve(__dirname, file))(app));
};
