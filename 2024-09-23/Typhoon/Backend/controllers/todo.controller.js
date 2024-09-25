const tasks = [
  {
    id: "0371101c-43d2-4e07-80d5-aba1b06d7cbf",
    title: "Install new head unit in the Mustang",
    priority: 2,
    createdAt: 1727099310942,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "91cc2af2-8ced-451a-af02-2e05bad11bdc",
    title: "Walk the dog",
    priority: 1,
    createdAt: 1727099333285,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { title } = req.body;
  const { priority } = req.body;

  const newTask = {
    id: crypto.randomUUID(),
    title: title,
    priority: priority,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  tasks.push(newTask);

  res.send(newTask);
};

exports.read = (req, res) => {
  const activeTasks = tasks.filter((task) => !task.deleted);
  res.send(activeTasks);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { priority } = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (title !== undefined) {
    tasks[taskIndex].title = title;
  }

  if (priority !== undefined && priority >= 1 && priority <= 5) {
    tasks[taskIndex].priority = priority;
  }

  tasks[taskIndex].updatedAt = Date.now();

  res.send(tasks);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  tasks[taskIndex].deleted = true;
  tasks[taskIndex].updatedAt = Date.now();

  res.send(tasks);
};
