import { BrowserRouter,Switch,Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Header from "./Header";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";


function App() {
    return (
    <BrowserRouter>
     <Header />
     <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/signin" exact>
            <Signin />
        </Route>
        <Route path="/new-post" exact>
            <NewPost />
        </Route>
        <Route path="/posts/:postId" exact>
            <Post />
        </Route>
     </Switch>
    </BrowserRouter>
    );
}

export default App;
