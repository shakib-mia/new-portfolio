
import banner from "../../assets/banner.webp"
import github from "./../../assets/icons/github-white.svg"
import linkedin from "./../../assets/icons/linkedin.svg"
// import { faCoffee, faGamepad, faGithub } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <header className="h-screen flex items-center px-32 relative">
            <aside className="w-1/2">
                <h1 className="text-6xl font-bold mt-4 text-secondary">Md. Shakib Mia</h1>
                <h4 className="text-2xl font-bold mt-4">MERN Stack Developer</h4>

                <p className="text-lg my-4">
                    Hi, this is Shakib Mia. A professional front-end web developer with 3+ years of experience. I am experienced in <span className="text-[#e34c26] font-medium">HTML</span>, <span className="text-[#264de4]">CSS</span>, <span className="text-[#f0db4f]">JavaScript</span>, <span className="text-[#61DBFB]">React</span>, and other languages and frameworks.
                </p>

                <div className="flex gap-3">
                    <a className="bg-success hover:bg-success-dark transition text-black px-5 py-3 rounded" href="https://drive.google.com/u/0/uc?id=1r7Hrj2iMjiU_Ele3H28eW8f4zuEXHkls&export=download">Download Resume</a>

                    <a href="https://github.com/shakib-mia" target="_blank" rel="noreferrer" className="hover:opacity-80 transition inline-block">
                        <img src={github} alt="github" />
                    </a>

                    <a href="https://www.linkedin.com/in/mdshakibmia" target="_blank" rel="noreferrer" className="hover:opacity-80 transition inline-block">
                        <img src={linkedin} alt="github" />
                    </a>
                </div>
            </aside>

            <aside className="h-full flex items-center justify-center w-1/2">
                <img src={banner} className="w-7/12 h-auto" alt="" />
            </aside>

            <button className="absolute bottom-0 left-0 right-0 m-auto">scroll to bottom</button>
        </header>
    );
};

export default Header;