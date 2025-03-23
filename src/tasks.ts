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

  addTask(title: string, description: string): Task {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      complete: false,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  editTask(
    id: string,
    newTitle: string,
    newDescription: string
  ): Task | undefined {
    let edited = this.getTaskById(id);

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
