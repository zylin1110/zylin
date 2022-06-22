import{ Menu } from 'semantic-ui-react';
import { Link }from'react-router-dom';
import React from 'react';
import firebase  from './utils/firebase';


function Header()
{
     const [user,setUser]=React.useState(null);
    React.useEffect(() => 
    {
        firebase.auth().onAuthStateChanged((currentUser) => 
        {
            setUser(currentUser);
        });
    }, []);
    return(
    <Menu>
        <Menu.Item as={Link} to="/">
            wbfinal
        </Menu.Item>
        <Menu.Menu position='right'>
            {user ?(
            <>
              <Menu.Item as={Link} to="/new-post">
                新增貼文
              </Menu.Item>
              <Menu.Item onClick={() => firebase.auth().signOut()}>
                登出
              </Menu.Item>                        
            </> 
            ) : (
            <Menu.Item as={Link} to="/signin">
                註冊/登入
            </Menu.Item>
            )}
        </Menu.Menu>
    </Menu>
    );
}

export default Header;