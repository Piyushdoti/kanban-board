export const columns = [
  { id: 'todo', label: 'To Do' },
  { id: 'progress', label: 'In Progress' },
  { id: 'testing', label: 'Testing' },
  { id: 'done', label: 'Done' },
]

const seedRows = [
  ['Analyze new requirements', 'Analyze the new requirements gathered from the customer.', ['Analyze', 'Customer'], 'todo', 'green', 'AK'],
  ['Arrange a web meeting', 'Arrange a web meeting with the customer to get new requirements.', ['Meeting'], 'todo', 'blue', 'TM'],
  ['Prepare project estimate', 'Break down the scope and prepare an initial estimate.', ['Planning'], 'todo', 'purple', 'AR'],
  ['Fix IE browser issues', 'Fix the issues reported in the IE browser.', ['Issue', 'IE'], 'progress', 'orange', 'JS'],
  ['Fix database error', "Fix cannot open user's default database SQL error.", ['Issue', 'Database'], 'progress', 'orange', 'PM'],
  ['Improve loading speed', 'Improve the performance of the reporting dashboard.', ['Improvement'], 'progress', 'pink', 'NK'],
  ['Fix customer issue', 'Fix the issues reported by the customer.', ['Issue', 'Customer'], 'testing', 'orange', 'DV'],
  ['Improve application performance', 'Review client-side rendering and optimise slow pages.', ['Improvement'], 'testing', 'purple', 'SG'],
  ['Test IE application', 'Test the application in the IE browser.', ['Review', 'IE'], 'done', 'green', 'RB'],
  ['Analyze SQL connection', 'Analyze SQL server 2008 connection.', ['Grid', 'Sql'], 'done', 'green', 'KL'],
]

export const initialTasks = seedRows.map(([title, description, tags, status, color, assignee], id) => ({
  id, title, description, tags, status, color, assignee,
}))
