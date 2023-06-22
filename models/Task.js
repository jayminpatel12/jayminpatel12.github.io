class Task {
  constructor(taskId, taskName, taskDescription, startDate, endDate, assignedMember, taskAssignedDate, status, totalHoursWorked, taskCost, taskUpdatedDate, taskCreatedBy) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.startDate = startDate;
    this.endDate = endDate;
    this.assignedMember = assignedMember;
    this.taskAssignedDate = taskAssignedDate;
    this.taskUpdatedDate = taskUpdatedDate;
    this.status = status;
    this.totalHoursWorked = totalHoursWorked;
    this.taskCost = taskCost;
    this.taskCreatedBy = taskCreatedBy;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
  }

  updateTaskDescription(newDescription) {
    this.taskDescription = newDescription;
  }

  markTaskAsComplete() {
    this.status = 'completed';
  }

  addHoursWorked(hours) {
    this.totalHoursWorked += hours;
  }

  calculateTaskCost(hourlyRate) {
    this.taskCost = this.totalHoursWorked * hourlyRate;
  }
}
