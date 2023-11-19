import AllRouters from './AllRouters/AllRouters';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import { useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isSmallMatch] = useMediaQuery("(max-width: 668px)");

  return (
    <>
     {isSmallMatch ? (<MobileNavbar/>) : (<Navbar/>)} 
     <AllRouters/>
    </>
  );
}

export default App;
