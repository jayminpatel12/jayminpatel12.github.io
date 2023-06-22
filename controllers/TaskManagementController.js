class TaskManagementController {
  constructor() {
    // Assume we have a database or data source to store tasks
    this.tasks = [];
  }

  createTask(taskName, taskDescription, startDate, endDate, assignedMember, hourlyRate, createdBy) {
    // Generate a unique task ID
    const taskId = this.generateUniqueId();

    // Create a new task object using the provided details
    const newTask = new Task(
      taskId,
      taskName,
      taskDescription,
      startDate,
      endDate,
      assignedMember,
      new Date().toLocaleString(),
      'Pending',
      0,
      hourlyRate,
      new Date().toLocaleString(),
      createdBy
    );

    // Get existing tasks from local storage (if any)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array of tasks
    tasks.push(newTask);

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Print a success message
    console.log('Task created successfully:', newTask);
  }

  updateTask(taskId, hoursWorked) {
    // Get existing tasks from local storage (if any)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Find the task with the given ID
    const task = tasks.find(task => task.taskId === taskId);

    // Update the task's hours worked
    task.totalHoursWorked = hoursWorked;
    task.status = "Complete";
    task.taskUpdatedDate = new Date().toLocaleString();
    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Print a success message
    // console.log('Task updated successfully:', task);

    // Return the updated task
    return task;
  }

  getAllTasks() {
    // Get existing tasks from local storage (if any)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Print a success message
    // console.log('All tasks:', tasks);

    return tasks;
  }

  // Utility function to generate a unique ID (dummy implementation)
  generateUniqueId() {
    return Date.now().toString(); // Generate a timestamp-based ID for simplicity
  }

  getTaskById(taskId) {
    // Get existing tasks from local storage (if any)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Find the task with the given ID
    const task = tasks.find(task => task.taskId === taskId);

    // Print a success message
    // console.log('Task found:', task);

    return task;
  }
}