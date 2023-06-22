class User {
  constructor(userId, name, email, role, password) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
    this.assignedTasks = [];
  }

  assignTask(task) {
    this.assignedTasks.push(task);
  }

  unassignTask(taskId) {
    this.assignedTasks = this.assignedTasks.filter(task => task.taskId !== taskId);
  }

  getAssignedTasks() {
    return this.assignedTasks;
  }

  hasAssignedTasks() {
    return this.assignedTasks.length > 0;
  }

  isTaskAssigned(taskId) {
    return this.assignedTasks.some(task => task.taskId === taskId);
  }
}
