import { Pyrite, core } from "pyrite";
import 'bootstrap/dist/css/bootstrap.min.css';

import { router } from "./router";

const pyrite = new Pyrite({
	routes: router,
	rootPath: "/home"
});
