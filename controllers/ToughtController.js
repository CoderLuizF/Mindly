const Mindly = require("../models/Mindly");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }

  static async dashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Mindly,
      plain: true,
    });

    // check if user exists
    if (!user) {
      res.redirect("/login");
    }

    const toughts = user.Mindlies.map((result) => result.dataValues);

    res.render("toughts/dashboard", { toughts });
  }

  static createTought(req, res) {
    res.render("toughts/create");
  }

  static async createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    try {
      await Mindly.create(tought);

      req.flash("message", "Pensamento criado com sucesso!");

      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (error) {
      console.log("Aconteceu um erro:" + error);
    }
  }
};
