import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import expressLayouts from 'express-ejs-layouts';
import livereload from "livereload";
import connectLivereload from "connect-livereload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.resolve(__dirname, "views"));
liveReloadServer.watch(path.resolve(__dirname, "../server"));
liveReloadServer.watch(path.resolve(__dirname, "../client/main.js"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/src/client', express.static(path.join(__dirname, '../../src/client')));

app.use(connectLivereload());

app.get("/", (req, res) => {
	res.render("index", { title: "Home Page" });
});

ViteExpress.listen(app, 3000, () =>
	console.log("Server is listening on port 3000..."),
);

fs.watch(path.join(__dirname, 'views'), (eventType, filename) => {
  if (filename) {
    liveReloadServer.refresh("/");
  }
});

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});