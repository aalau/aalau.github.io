import Tako from "./Tako";
import { Navbar } from "../../components";
import Footer from "../footer/Footer";
import { Margin } from "@mui/icons-material";

const TakoFull = () =>
{
    return (
        <>
        <Navbar></Navbar>
        <div style={{paddingBottom: '120px'}}></div>
        <Tako></Tako>
        <Footer></Footer>
        </>
    )
}

export default TakoFull