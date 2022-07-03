import './topbar.scss';
import { Person, Mail, MusicNoteRounded } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">khalil.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+216 58 842 815</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>maatoug610@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <MusicNoteRounded className="icon"/>
                        <span>
                            <audio controls>
                                <source src="assets/music.mp3" type="audio/mp3"/>
                            </audio>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}