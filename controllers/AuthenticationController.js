class AuthenticationController {
  constructor() {
    // Assume we have a database or data source containing user information
    this.users = [
      { username: 'user', password: 'user', role: 'member' },
      { username: 'admin', password: 'adminpassword', role: 'admin' },
    ];
    this.currentUser = null;
  }

  login(username, password) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email == username && user.password == password);
    if (user) {
      this.currentUser = user;
      sessionStorage.setItem('currentUser', JSON.stringify(user));

      if (this.currentUser.role === 'admin') {
        console.log('Admin login successful!');
        // Load admin dashboard
        window.location.href = 'admin_dashboard.html';
      } else {
        // Load member dashboard
        window.location.href = 'member_dashboard.html';
        console.log('Member login successful!');
      }
      return true;
    }
    console.log('Login failed!');
    alert('Login failed!, username or password is incorrect');
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser');
    console.log('Logout successful!');
    window.location.href = 'login.html';
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }
}
