import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {useState, useEffect, useRef} from "react";

//import cnbBack from "./resources/cnbBack.gif";

export default function CustomNavBar() {
    // --------------------------------- Hooks --------------------------------- //
    const [state, setState] = useState(false); // useState hook to keep track of whether the dropdown is being displayed
    function turnOff() {
        setState(false);
    }

    let menuArea = useRef(); // useRef hook to keep track of the target area of the dropdown itself

    useEffect(() => {
        const handleClick = (e) => { // function to handle a click anywhere on the screen. e is the object that was clicked.
            if (!menuArea.current.contains(e.target)) { // If the object clicked WASN'T the menuArea target...
                setState(false); // set state to false (hide the menu)
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () => {document.removeEventListener("mousedown", handleClick)};
    });

    // -------------------------- Additional Components -------------------------- //
    function Reroute({rerouteDest, label}) {
        return <Link to={rerouteDest} onClick={turnOff}>{label}</Link>; // Creates a special link object that can be turned off when clicked to close the dropdown.
    }

    // ------------------------------- Website JSX ------------------------------- //
    return (
      <>
            <div className="CustomNavBar">
                {/*<img src={cnbBack} alt={"Twinkling Stars. Source: https://tenor.com/view/twinkle-little-star-night-sky-gif-13048017"}></img>*/}
                <div className={"HomeNavButton"}>
                    <Link to={"/"}>Home</Link>
                </div>

                <div className={"AboutNavButton"}>
                    <Link to={"/about"}>About</Link>
                </div>

                <div className={"DocsNavButton"}>
                    <Link to={"/docs"}>Docs</Link>
                </div>

                <div className={"ProjectDropDown"} ref={menuArea}> {/*ref allows this div to be the "target"*/}
                    <div className="dropTrigger" onClick={() => setState(!state)}> {/*this is the div that contains the actual drop menu button. onClick will flip the current vis state.*/}
                        <button>caffine fever dream</button>
                    </div>
                    <div className={`drop${state ? "Active" : "Inactive"}`}> {/*the classname here flips when required by button presses. Contains the dropdown menu.*/}
                        <Reroute rerouteDest={"projectsFunctional"} label={"Complete"}/>
                        <Reroute rerouteDest={"projectsInProgress"} label={"In Progress"}/>
                    </div>
                </div>

            </div>
        <Outlet/> {/*Ensure that the navbar is always rendered even as we switch pages*/}
      </>
    );
}