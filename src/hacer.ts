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
    console.log(`Nueva tarea agragada: ${title}`);
  }

  editButton(
    id: string,
    task: Tasks,
    newTitle: string,
    newDescription: string
  ) {
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

  deleteButton(id: string) {
    const taskIndex = this.tasks.findIndex((i) => i.id === id);

    if (taskIndex !== -1) {
      const deleteTesk = this.tasks.splice(taskIndex, 1);
    }
  }

  listTasks() {
    if (this.tasks.length === 0) {
      console.log("No hay tareas en la lista");
    } else {
      console.log("Lista de Tareas");
      console.log(this.tasks);
    }
  }

  completeTask(id: string) {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.complete = true;
      console.log(`La tarea ${task.title} ha sido comlpetada!`);
    }
  }
}

const listar = new List();

console.log(listar.listTasks());
console.log(
  listar.addTask(
    "1ab2c3",
    "Mi tarea",
    "Tengo que volver a estudiar los cursos"
  ),
  listar.addTask("aaa", "Repaso", "atencion a deficientes"),
  listar.addTask("bbz", "compra", "buscar los mandados")
);

// console.log(listar.tasks);

console.log(
  listar.editButton("aaa", listar.tasks[0], "otra cosa", "hay que repasar")
);

console.log(listar.listTasks());

listar.completeTask("bbb");
