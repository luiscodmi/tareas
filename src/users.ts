import { ListTask, Task } from "./tasks";

export interface User {
  id: string;
  userId: string;
  name: string;
  tasks: Task[];
}

export class ListUsers {
  public usersList: User[] = [];
  private tasksList: ListTask;

  constructor(tasksList: ListTask) {
    this.tasksList = tasksList;
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

  addTaskToUser(userId: string, title: string, description: string) {
    const user = this.usersList.find((user) => user.userId === userId);

    if (user) {
      const newTask = this.tasksList.addTask(title, description);
      user.tasks.push(newTask);

      return { success: true };
    }

    return { success: false };
  }

  getUserById(id: string): User | undefined {
    return this.usersList.find((user) => user.userId === id);
  }
}
