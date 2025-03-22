import { ListTask, Task } from "./tasks";

export interface User {
  id: string;
  userId: string;
  name: string;
  tasks: Task[];
}

interface SuccessOperation {
  success: boolean;
}

export class ListUsers {
  public usersList: User[] = [];
  private tasksList: ListTask;

  constructor() {
    this.tasksList = new ListTask();
  }

  addUser(userId: string, name: string, tasks: Task[]): User {
    const newUser: User = {
      id: Math.random().toString(),
      userId,
      name,
      tasks,
    };

    this.usersList.push(newUser);
    return newUser;
  }

  editUser(
    id: string,
    userId: string,
    newName: string,
    tasks: Task[]
  ): User | null {
    let edited: User | null = null;

    this.usersList.find((user, i) => {
      if (user.id === id) {
        return (edited = this.usersList[i] =
          {
            id,
            userId,
            name: newName,
            tasks,
          });
      }
    });

    return edited;
  }

  deleteUser(id: string): void {
    const userIndex = this.usersList.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.usersList.splice(userIndex, 1);
    }
  }

  listUsers(): User[] {
    return this.usersList;
  }

  addTaskToUser(userId: string, title: string, description: string): void {
    this.usersList.find((user) => {
      if (user.userId === userId) {
        this.tasksList.addTask(userId, title, description);

        return { success: true };
      }

      return { success: false };
    });
  }

  getUserTasks(id: string): Task[] {
    this.usersList.find((user) => {
      if (user.id === id) {
        return this.tasksList.listTasks();
      }
    });

    return this.tasksList.listTasks();
  }
}
