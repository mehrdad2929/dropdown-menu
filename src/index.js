//import "./styles/main.css"
import { createDropdownMenu , injectDropdownStyles } from "./dropdown-menu";
const dropdownMenu = createDropdownMenu();
document.body.appendChild(dropdownMenu);
//injectDropdownStyles();
export {createDropdownMenu};