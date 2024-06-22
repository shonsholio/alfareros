const controller = {}
const fs = require('fs')

controller.home = (req,res) => {
  res.render('main')
}

controller.who = (req,res) => {
  res.render('quienes')
}

controller.docs = (req,res) => {
  res.render('registroWeb')
}

controller.pdf = (req,res) => {
  const filePath = '/Users/LuisFerArevalo/Proyectos-Express/alfareros/public/extracts.pdf'
  if(fs.existsSync(filePath)){
    console.log('SI EXISTE')
    res.sendFile(filePath)
  } else {
    console.log('NOS JODIMOS')
  }
}

module.exports = controller