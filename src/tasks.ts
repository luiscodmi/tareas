interface Tasks {
  id?: string;
  title: string;
  description: string;
  complete: boolean;
}

class List {
  private tasks: Tasks[] = [];

  addTask(title: string, description: string): string {
    const newTask: Tasks = {
      title,
      description,
      complete: false,
    };

    this.tasks.push(newTask);
    return `Nueva tarea agragada: ${title}`;
  }

  editTask(id: string, newTitle: string, newDescription: string) {
    this.tasks.find((ed, i) => {
      if (ed.id === id) {
        return (this.tasks[i] = {
          title: newTitle,
          description: newDescription,
          complete: ed.complete,
        });
      }
    });
  }

  deleteTask(id: string) {
    const taskIndex = this.tasks.findIndex((i) => i.id === id);

    if (taskIndex !== -1) {
      const deleteTesk = this.tasks.splice(taskIndex, 1);
    }
  }

  listTasks(): Tasks[] | string {
    if (this.tasks.length === 0) {
      return "No hay tareas en la lista";
    } else {
      return this.tasks;
    }
  }

  completeTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.complete = true;
      return `La tarea ${task.title} ha sido comlpetada!`;
    }
  }
}

const list = new List();

list.listTasks();

list.addTask("Mi tarea", "Tengo que volver a estudiar los cursos");
list.addTask("Repaso", "atencion a deficientes");
list.addTask("compra", "buscar los mandados");

list.editTask("aaa", "otra cosa", "hay que repasar");

list.listTasks();

list.completeTask("bbb");
