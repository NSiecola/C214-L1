export type Task = {
  title: string
  description: string
  targetDate: string
  type?: string
  priority?: string
  subTasks: Task[]
}

export class ToDoList {
    private tasks: Task[] = []

    addTask(task: Task) {
        this.tasks.push(task)
    }
    
}
