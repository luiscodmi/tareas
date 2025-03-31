import { UserSerice } from "./src/users";
import { TaskService } from "./src/tasks";

const task = new TaskService();
const user = new UserSerice(task);

user.addUser("a1", "Luisito", []);
user.addUser("a2", "Pepito", []);
user.addUser("a3", "alberto", []);
user.addUser("a4", "ramon", []);
user.addUser("a5", "pedro", []);

user.addTaskToUser("a1", "El Titulo", "y su descrpcion");
user.addTaskToUser("a5", "otro titulo", "otra descrpcion para variar");
user.addTaskToUser("a2", "Libro", "Descrpcion del Libro tal");

user.getUserById("a2");

console.log(user.listUsers());
console.log(task.listTasks());

task.addTask("Mi tarea", "Tengo que volver a estudiar los cursos");
task.addTask("Repaso", "atencion a deficientes");
task.addTask("compra", "buscar los mandados");

task.editTask("a2", "otra cosa", "hay que repasar");
user.editUser("123", "a3", "ROBERTON", []);

console.log(JSON.stringify(user.listUsers(), null, 2));

task.listTasks();
task.completeTask("bbb");
