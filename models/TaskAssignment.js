class TaskAssignment {
  constructor(taskId, userId, assignmentDate, completionDate, hoursWorked, hourlyRate) {
    this.taskId = taskId;
    this.userId = userId;
    this.assignmentDate = assignmentDate;
    this.completionDate = completionDate;
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  updateAssignmentDate(newDate) {
    this.assignmentDate = newDate;
  }

  updateCompletionDate(newDate) {
    this.completionDate = newDate;
  }

  addHoursWorked(hours) {
    this.hoursWorked += hours;
  }

  calculateTotalCost() {
    return this.hoursWorked * this.hourlyRate;
  }
}
