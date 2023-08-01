import React, { useState } from 'react';
import './App.css'

const usersData = [
  {
    email: 'user1@example.com',
    password: 'password1',
    signupTime: '2023-07-27 10:00:00',
    ip: '192.168.0.1',
  },
  {email: 'user2@example.com', password: 'password2', signupTime: '2023-07-27 11:30:00', ip: '192.168.0.2'},
  {email: 'user3@example.com', password: 'password3', signupTime: '2023-07-27 12:15:00', ip: '192.168.0.3'},
  {email: 'user4@example.com', password: 'password4', signupTime: '2023-07-27 13:45:00', ip: '192.168.0.4'},
  {email: 'user5@example.com', password: 'password5', signupTime: '2023-07-27 14:30:00', ip: '192.168.0.5'},
  {email: 'user10@example.com', password: 'password10', signupTime: '2023-07-27 19:45:00', ip: '192.168.0.10'},
];

const taskListsData = [
  {
    title: 'Task List 1',
    createdBy: 'user1@example.com',
    numOfTasks: 5,
    creationTime: '2023-07-27 11:00:00',
    lastUpdated: '2023-07-27 12:30:00',
  },
  {title: 'Task List 2', createdBy: 'user2@example.com', numOfTasks: 3, creationTime: '2023-07-27 09:30:00',lastUpdated: '2023-07-27 12:30:00',},
  {title: 'Task List 3', createdBy: 'user3@example.com', numOfTasks: 7, creationTime: '2023-07-27 14:15:00',lastUpdated: '2023-07-27 12:30:00',},
  {title: 'Task List 4', createdBy: 'user4@example.com', numOfTasks: 2, creationTime: '2023-07-27 16:45:00',lastUpdated: '2023-07-27 12:30:00',},
 {title: 'Task List 9', createdBy: 'user9@example.com', numOfTasks: 3, creationTime: '2023-07-27 15:30:00',lastUpdated: '2023-07-27 12:30:00',},
  {title: 'Task List 10', createdBy: 'user10@example.com', numOfTasks: 8, creationTime: '2023-07-27 17:00:00',lastUpdated: '2023-07-27 12:30:00',},
];

const tasksData = [
  {
    title: 'Task 1',
    description: 'Description of Task 1',
    taskListTitle: 'Task List 1',
    createdBy: 'user1@example.com',
    creationTime: '2023-07-27 12:00:00',
  },
  {title: 'Task 2', description: 'Description of Task 2', taskListTitle: 'Task List 2', createdBy: 'user2@example.com', creationTime: '2023-07-28 09:30:00'},
{title: 'Task 3', description: 'Description of Task 3', taskListTitle: 'Task List 3', createdBy: 'user3@example.com', creationTime: '2023-07-29 15:45:00'},
{title: 'Task 4', description: 'Description of Task 4', taskListTitle: 'Task List 1', createdBy: 'user4@example.com', creationTime: '2023-07-30 08:20:00'},
{title: 'Task 5', description: 'Description of Task 5', taskListTitle: 'Task List 2', createdBy: 'user5@example.com', creationTime: '2023-07-31 10:10:00'},
{title: 'Task 10', description: 'Description of Task 10', taskListTitle: 'Task List 1', createdBy: 'user10@example.com', creationTime: '2023-08-05 09:00:00'},
 ];

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLogin = (username, password) => {
      if (username === 'user1@example.com' && password === 'password1') {
      setLoggedIn(true);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const renderLoginScreen = () => {
    return (
      <div className='App'>
        <h1>Login</h1>
        <input type="text" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required/><br /><br />
        <button onClick={() => handleLogin('user1@example.com', 'password1')}>Login</button>
      </div>
    );
  };

  const renderDataGrid = (data) => {
    return (
      <table>
        <thead>
          <tr>
            {/* Render table headers based on the data keys */}
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, innerIndex) => (
                <td key={innerIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderMenuContent = () => {
    switch (activeMenu) {
      case 'Users':
        return renderDataGrid(usersData);
      case 'Task Lists':
        return renderDataGrid(taskListsData);
      case 'Tasks':
        return renderDataGrid(tasksData);
      default:
        return <div>Please select a menu item.</div>;
    }
  };

  return (
    <div className='App'>
      {loggedIn ? (
        <div>
          <h1>Welcome to the Back Office Panel</h1>
          <nav>
            <ul>
              <li onClick={() => handleMenuClick('Users')}>Users</li>
              <li onClick={() => handleMenuClick('Task Lists')}>Task Lists</li>
              <li onClick={() => handleMenuClick('Tasks')}>Tasks</li>
            </ul>
          </nav>
          <div>{renderMenuContent()}</div>
        </div>
      ) : (
        renderLoginScreen()
      )}
    </div>
  );
};

export default App;


