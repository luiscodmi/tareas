interface Tasks {
  id?: string;
  title: string;
  description: string;
  complete?: boolean;
}

class List {
  tasks: Tasks[] = [];

  addTask(id: string, title: string, description: string): void {
    const newTask: Tasks = {
      id,
      title,
      description,
      complete: false,
    };

    this.tasks.push(newTask);
    `Nueva tarea agragada: ${title}`;
  }

  edit(id: string, task: Tasks, newTitle: string, newDescription: string) {
    var editTask: void[] = this.tasks.map((ed, i) => {
      if (ed.id === id) {
        this.tasks[i] = {
          ...task,
          id,
          title: newTitle,
          description: newDescription,
        };
      }
    });
  }

  delete(id: string) {
    const taskIndex = this.tasks.findIndex((i) => i.id === id);

    if (taskIndex !== -1) {
      const deleteTesk = this.tasks.splice(taskIndex, 1);
    }
  }

  listTasks(): string {
    if (this.tasks.length === 0) {
      return "No hay tareas en la lista";
    } else {
      return "Lista de Tareas: " + this.tasks;
    }
  }

  completeTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.complete = true;
      `La tarea ${task.title} ha sido comlpetada!`;
    }
  }
}

const listar = new List();

listar.listTasks();

listar.addTask("1ab2c3", "Mi tarea", "Tengo que volver a estudiar los cursos"),
  listar.addTask("aaa", "Repaso", "atencion a deficientes"),
  listar.addTask("bbz", "compra", "buscar los mandados");

listar.tasks;

listar.edit("aaa", listar.tasks[0], "otra cosa", "hay que repasar");

listar.listTasks();

listar.completeTask("bbb");
