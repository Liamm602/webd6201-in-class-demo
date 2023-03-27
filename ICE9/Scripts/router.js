//let core
(function (core) {

    class Router {
        //public properties
        /**
         * @returns {string}
         */
        get ActiveLink() {
            return this.m_activeLink
        }
        /**
         * @params {string} line
         */
        set ActiveLink(link) {
            this.m_activeLink = link
        }


        //constructor
        /**
         * Creates an instance of a router
         * @constructor
         */
        constructor() {
            this.ActiveLink = ""
        }

        //public methods - paths for methods
        /**
         * 
         * @param {string[]} route 
         * @returns {void}
         */
        Add(route) {

            this.m_routingTable.push(route)



        }
        /**
         * this method replaces the reference for the routin table with a new one
         * @param {string} routingTable
         * @returns {void} 
         */
        AddRoutingTable(routingTable) {
            this.m_routingTable = routingTable
        }
        /**
         * this method finds and return the index of the route in the routing table
         * @param {string} route 
         * @returns {number}
         * 
         */
        Find(route) {
            return this.m_routingTable.indexOf(route)
        }
        /**
         * this method removes a route from the routing table, it returns true if the route is removed
         * otherwise it returns negative one
         * @param {string} route 
         * @returns {boolean}
         * 
         */
        Remove(route) {
            //if route is found
            if (this.Find(route) > -1) {
                //remove the route
                this.m_routingTable.splice(this.Find(route), 1)
                return true
            }
            return false
        }
        //public override methods
        /**
         * this method overrides the built-in toString method and returns the Routing table in a comma seperated
         * string
         * @returns {string}
         */
        toString() {
            return this.m_routingTable.toString()
        }
    }

    core.Router = Router
})(core || (core = {}))

let router = new core.Router()
router.AddRoutingTable([
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
])
 
let route = location.pathname //alias for location.pathname

//if route is found in the routing table


//variable is equal to if condition, if condition is true : else false
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : router.ActiveLink = "404"