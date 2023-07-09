const router = require("express").Router()

//services router -> centralização de rotas
const serviceRouter = require("./services")

router.use("/", serviceRouter)

//Parties -> centralizador de parties

const partyRouter = require("./parties")
router.use("/", partyRouter)

module.exports = router