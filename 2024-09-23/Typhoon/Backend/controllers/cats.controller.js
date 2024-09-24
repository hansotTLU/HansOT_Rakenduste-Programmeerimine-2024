const cats = [
  {
    id: "0371101c-43d2-4e07-80d5-aba1b06d7cbf",
    name: "Kitu",
    createdAt: 1727099310942,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "91cc2af2-8ced-451a-af02-2e05bad11bdc",
    name: "Coots",
    createdAt: 1727099333285,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);

  res.send(newCat);
};

exports.read = (req, res) => {
  res.send(cats);
};

exports.update = (req, res) => {
  const catID = req.params.id;
  const name = req.body.name;

  const cat = cats.find((cat) => cat.id === catId);
  cat.name = newName;
};

exports.delete = (req, res) => {};
