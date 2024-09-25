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
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.send(activeCats);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const catIndex = cats.findIndex((cat) => cat.id === id);

  cats[catIndex].name = name || cats[catIndex].name;
  cats[catIndex].updatedAt = Date.now();

  res.send(cats);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const catIndex = cats.findIndex((cat) => cat.id === id);

  cats[catIndex].deleted = true;
  cats[catIndex].updatedAt = Date.now();

  res.send(cats);
};
