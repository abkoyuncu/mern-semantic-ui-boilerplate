const Teams = require('../../models/Teams');

module.exports = (app) => {
  app.get('/api/teams', (req, res, next) => {
    Teams.find()
      .exec()
      .then((team) => res.json(team))
      .catch((err) => next(err));
  });


  app.post('/api/teams', function (req, res, next) {
    const team = new Teams({
      name : req.body.name,
      year: req.body.year,
    });
    team.save()
      .then(() => res.json(team))
      .catch((err) => next(err));
  });

  app.delete('/api/teams/:id', function (req, res, next) {
    Teams.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((team) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/teams/update/:id',function (req, res, next)  {
    let id = req.params.id;
    Teams.findById({"_id":id})
      .exec()
      .then((team) => {
        team.name = req.body.params.name;
        team.year = req.body.params.year;
        team.save()
          .then(() => res.json(team))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });


};
