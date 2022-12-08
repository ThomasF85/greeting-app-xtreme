import { Greeting } from "./components/Greeting.js";
import { Header } from "./components/Header.js";

const root = document.querySelector("#root");

const header = Header("Greeting App XTreme XXXL v.42");
root.append(header);

const greeting = Greeting(["Dalia", "Jerry"]);
root.append(greeting);
