const controller = {}

controller.home = (req,res) => {
  res.render('main')
}

module.exports = controller