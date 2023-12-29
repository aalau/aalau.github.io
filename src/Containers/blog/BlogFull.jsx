import Blog from "./Blog";
import { Navbar } from "../../components";
import Footer from "../footer/Footer";
import { Margin } from "@mui/icons-material";

const ProjectsFull = () =>
{
    return (
        <>
        <Navbar></Navbar>
        <div style={{paddingBottom: '120px'}}></div>
        <Blog></Blog>
        <Footer></Footer>
        </>
    )
}

export default ProjectsFull