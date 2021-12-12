import { Route } from "react-router-dom"
import Home from "../pages/Home"
import Sell from "../pages/Sell"
import Start from "../pages/start"

const AllRoutes = () => {
    return(
        <>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/start">
          <Start />
        </Route>
        <Route exact path="/sell">
            <Sell />
        </Route>
        </>
    )
}
export default AllRoutes