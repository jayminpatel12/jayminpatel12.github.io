class AdminController {
    constructor() {
      // Assume we have a database or data source to store tasks
      this.tasks = [];
    }
  
    createTask(task) {
      this.tasks.push(task);
      console.log('Task created:', task);
    }
  
    assignTask(taskId, userId) {
      const task = this.tasks.find((task) => task.taskId === taskId);
  
      if (task) {
        task.assignedMember = userId;
        console.log('Task assigned:', task);
      } else {
        console.log('Task not found.');
      }
    }
  
    viewTasks() {
      console.log('All tasks:');
      this.tasks.forEach((task) => {
        console.log(task);
      });
    }
  
    updateTaskStatus(taskId, newStatus) {
      const task = this.tasks.find((task) => task.taskId === taskId);
  
      if (task) {
        task.status = newStatus;
        console.log('Task status updated:', task);
      } else {
        console.log('Task not found.');
      }
    }
  
    deleteTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.taskId === taskId);
  
      if (taskIndex !== -1) {
        const deletedTask = this.tasks.splice(taskIndex, 1)[0];
        console.log('Task deleted:', deletedTask);
      } else {
        console.log('Task not found.');
      }
    }
  
    viewAssignedTasks(userId) {
      const assignedTasks = this.tasks.filter((task) => task.assignedMember === userId);
  
      console.log('Assigned tasks:');
      assignedTasks.forEach((task) => {
        console.log(task);
      });
    }
  }
  