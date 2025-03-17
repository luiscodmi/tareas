import { List, Task } from "./tasks";

interface User {
  id: string;
  name: string;
  apellidos: string;
  age: number;
  work: string;
  ocuptaion: string;
  active: boolean;
  tasks: Task[];
}

interface SuccessOperation {
  success: boolean;
}

class ListOfUsers {
  private users: User[] = [];
  private tasksList: List;

  constructor() {
    this.tasksList = new List();
  }

  addUser(
    name: string,
    apellidos: string,
    age: number,
    work: string,
    ocuptaion: string,
    tasks: Task[]
  ): User {
    const newUser: User = {
      id: Math.random().toString(),
      name,
      apellidos,
      age,
      work,
      ocuptaion,
      active: true,
      tasks,
    };

    this.users.push(newUser);
    return newUser;
  }

  editUser(
    id: string,
    newName: string,
    newApellidos: string,
    newAge: number,
    newWork: string,
    newOcupation: string,
    tasks: Task[]
  ): User | null {
    let edited: User | null = null;

    this.users.find((user, i) => {
      if (user.id === id) {
        return (edited = this.users[i] =
          {
            id,
            name: newName,
            apellidos: newApellidos,
            age: newAge,
            work: newWork,
            ocuptaion: newOcupation,
            active: user.active,
            tasks,
          });
      }
    });

    return edited;
  }

  deleteUser(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  listUsers(): User[] {
    return this.users;
  }

  activeUser(id: string): SuccessOperation {
    const userId = this.users.find((user) => user.id === id);

    if (userId) {
      userId.active = !userId.active;
      return { success: true };
    }

    return { success: false };
  }

  addTaskToUser(title: string, description: string): void {
    this.tasksList.addTask(title, description);
  }

  getUserTasks(): Task[] {
    return this.tasksList.listTasks();
  }

  updateUserTask(id: string, newTitle: string, newDescription: string): void {
    this.tasksList.editTask(id, newTitle, newDescription);
  }

  deleteUserTask(id: string): void {
    this.tasksList.deleteTask(id);
  }
}

const users = new ListOfUsers();

users.listUsers();

users.addTaskToUser("El Titulo", "y su descrpcion");
users.addTaskToUser("otro titulo", "otra descrpcion para variar");
users.addTaskToUser("Libro", "Descrpcion del Libro tal");

users.updateUserTask("aaa", "ir de compras", "comprar los madados");

users.getUserTasks();

users.activeUser("bbb");
