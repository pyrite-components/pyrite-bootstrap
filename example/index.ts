
import { Pyrite } from "pyrite";

import { ExamplePage } from "./ExamplePage";

const pyrite = new Pyrite({
	routes: [{
		path: "/",
		component: ExamplePage
	}]
});