import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/logo"
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';


function Header() {
  const auth = useAuth();
  return (
    <AppBar sx={{bgcolor:"transparent",position:"static", boxShadow:"none"}}>
      <Toolbar sx={{display:"flex"}}>
        <Logo />
        <div>
          {auth?.isLoggedIn ?(
            <>
              <NavigationLink bg="#00fffc" to="/chat" text="Go to Chat" textColor="black" />
              <NavigationLink bg="#51538f" textColor="white" to="/" text="logout" onclick={auth.logout}   />
            </>
          ): (
            <>
               <NavigationLink bg="#00fffc" to="/login" text="Login" textColor="black"  />
               <NavigationLink bg="#51538f" textColor="white" to="/signup" text="Signup"  />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header
