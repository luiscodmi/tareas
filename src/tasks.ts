import { User, ListUsers } from "./users";

export interface Task {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

interface SuccessOperation {
  success: boolean;
}

export class ListTask {
  private tasks: Task[] = [];
  public usersList: User[] = [];

  constructor() {
    // this.usersList = new ListUsers();
  }

  addTask(userId: string, title: string, description: string): Task {
    const user = this.usersList.find((user) => user.userId === userId);

    if (user) throw new Error("El Usuario no existe");

    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      complete: false,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  editTask(id: string, newTitle: string, newDescription: string): Task | null {
    let edited: Task | null = null;

    this.tasks.find((ed, i) => {
      if (ed.id === id) {
        return (edited = this.tasks[i] =
          {
            id,
            title: newTitle,
            description: newDescription,
            complete: ed.complete,
          });
      }
    });

    return edited;
  }

  deleteTask(id: string): void {
    const taskIndex = this.tasks.findIndex((i) => i.id === id);

    if (taskIndex !== -1) {
      const deleteTesk = this.tasks.splice(taskIndex, 1);
    }
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: string): SuccessOperation {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.complete = !task.complete;
      return { success: true };
    }

    return { success: false };
  }
}
