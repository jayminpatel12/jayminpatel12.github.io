const TaskAssignmentController = (function () {
  const assignedTasks = [];

  function assignTask(taskId, memberId, hourlyRate) {
    // Fetch the task and member based on their IDs
    const task = new TaskManagementController().getTaskById(taskId);
    const member = new UserController().getMemberById(memberId);

    if (task && member) {
      // Create a new assignment object
      const assignment = {
        taskId: taskId,
        memberId: memberId,
        assignmentDate: new Date().toISOString(), // Set the current date as the assignment date
        completionDate: null, // Initially set the completion date as null
        hoursWorked: 0, // Initially set the hours worked as 0
        hourlyRate: hourlyRate
      };

      // Perform the task assignment by updating the relevant properties in the task and member
      task.assignedMember = member;
      member.assignedTasks.push(assignment);
      // You can also save the assignment to a database or perform any additional operations as needed

      // Push the assignment to the assignedTasks array
      assignedTasks.push(assignment);
      // Print a success message
      console.log('Task assigned successfully:', task, member, assignment);
    } else {
      // Either the task or the member does not exist
      console.log('Task or member not found!');
    }
  }

  function getAssignedTasks() {
    return assignedTasks;
  }

  return {
    assignTask,
    getAssignedTasks
  };
})();