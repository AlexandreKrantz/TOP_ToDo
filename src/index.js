//import bootstrap
import "bootstrap";
import "./scss/app.scss";

//import classes
import { Form, Task } from "./NewTask";
import { MyTasks } from "./MyTasks";


const myTasks = new MyTasks();
myTasks.show();

const form = new Form(myTasks);
form.show(); 


//get form input

//validate and prepare form input

//create task

//add task to tasks

//sort tasks

//display tasks