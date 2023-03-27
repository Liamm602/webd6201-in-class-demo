let router = new core.Router()

let routingTable = [
    "/",
    "/home",
    "/about",
    "/services",
    "contact",
    "/contact.list",
    "/projects",
    "/register",
    "/login",
    "/edit"
]

let route = location.pathname //alias for location.pathname

//if route is found in the routing table


//variable is equal to if condition, if condition is true : else false
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : router.ActiveLink = "404"