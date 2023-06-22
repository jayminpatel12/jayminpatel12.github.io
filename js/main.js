// Import necessary models and controllers
// Assuming TaskModel, UserModel, and TaskAssignmentController are defined in separate files

// Fetch tasks from the TaskModel
var taskManagementController = new TaskManagementController();
const tasks = taskManagementController.getAllTasks();

// Fetch members from the UserModel
let userController = new UserController();
const members = userController.getAllMembers();

// Populate task options
const taskSelect = document.getElementById('task-select');
tasks.forEach(task => {
  const option = document.createElement('option');
  option.value = task.taskId;
  option.text = task.taskName;
  taskSelect.appendChild(option);
});

// Populate member options
const memberSelect = document.getElementById('member-select');
members.forEach(member => {
  //console.log(member)
  if (member.role === 'member') {
    const option = document.createElement('option');
    option.value = member.userId;
    option.text = member.name;
    memberSelect.appendChild(option);
  }
});

// Handle form submission
const form = document.getElementById('assignment-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get selected task id, member id, and hourly rate
  const taskId = taskSelect.value;
  const memberId = memberSelect.value;
  const hourlyRate = document.getElementById('hourly-rate').value;

  // Assign the task to the member using the TaskAssignmentController
  TaskAssignmentController.assignTask(taskId, memberId, hourlyRate);

  // Reset the form
  form.reset();
});
