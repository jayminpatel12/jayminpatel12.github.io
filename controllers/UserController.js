class UserController {
  constructor() {
    // Assume we have a database or data source to store tasks
    this.tasks = [];
  }

  markTaskAsComplete(taskId) {
    const task = this.tasks.find((task) => task.taskId === taskId);

    if (task) {
      task.status = 'completed';
      console.log('Task marked as complete:', task);
    } else {
      console.log('Task not found.');
    }
  }

  getAllMembers() {
    // Get existing tasks from local storage (if any)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Filter users that have a member role
    const members = users.filter((user) => user.role === 'member');

    // Print a success message
    console.log('All users:', users);

    return users;
  }

  generateUniqueId() {
    return Date.now().toString(); // Generate a timestamp-based ID for simplicity
  }

  createNewUser(name, email, password, role) {
    //Generate user unique id
    const userId = this.generateUniqueId();

    //Create a new user object using the provided details
    const newUser = new User(
      userId,
      name,
      email,
      role,
      password
    );

    //Get existing users from local storage (if any)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Add the new user to the array of users
    users.push(newUser);

    //Save the updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Succesful User Signup!')
    window.location.href = 'login.html'

    return newUser;
  }

  recordHoursWorked(taskId, hours) {
    const task = this.tasks.find((task) => task.taskId === taskId);

    if (task) {
      task.totalHoursWorked += hours;
      console.log('Hours recorded for the task:', task);
    } else {
      console.log('Task not found.');
    }
  }

  viewTasks() {
    console.log('Assigned tasks:');
    this.tasks.forEach((task) => {
      console.log(task);
    });
  }

  getMemberById(memberId) {
    // Get existing tasks from local storage (if any)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given ID
    const member = users.find((user) => user.userId === memberId);

    // Print a success message
    console.log('Member found:', member);

    return member;
  }
}