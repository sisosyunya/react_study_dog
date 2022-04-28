// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "bulma/css/bulma.css";
const container = document.querySelector("#content");

const root = createRoot(container);
root.render(<App />, );