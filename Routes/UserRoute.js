const { addUser } = require("../Controllers/UserController")

const router = express.Router()

router.post("/add",addUser)
