import Projects from "./Projects";
import { Navbar } from "../../components";
import Footer from "../footer/Footer";
import { Margin } from "@mui/icons-material";

const ProjectsFull = () =>
{
    return (
        <>
        <Navbar></Navbar>
        <div style={{paddingBottom: '120px'}}></div>
        <Projects></Projects>
        <Footer></Footer>
        </>
    )
}

export default ProjectsFull