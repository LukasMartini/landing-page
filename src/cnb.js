import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import {useState, useEffect, useRef} from "react";

function Reroute({rerouteDest, label, off}) { // TODO: make it so that I don't have to pass turnOff like this
    return <Link to={rerouteDest} onClick={off}>{label}</Link>; // Creates a special link object that can be turned off when clicked to close the dropdown.
}

export default function CustomNavBar() {
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


    return (
      <>
        <div className="main">
            <div className="CustomNavBar">
                <div className={"HomeNavButton"}>
                    <Link to={"/"}>Home</Link>
                </div>
                <div className={"ProjectDropDown"} ref={menuArea}> {/*ref allows this div to be the "target"*/}
                    <div className="dropTrigger" onClick={() => setState(!state)}> {/*this is the div that contains the actual drop menu button. onClick will flip the current vis state.*/}
                        <button>I am likely to kill myself very soon</button>
                    </div>
                    <div className={`drop${state ? "Active" : "Inactive"}`}> {/*the classname here flips when required by button presses. Contains the dropdown menu.*/}
                        <Reroute rerouteDest={"working"} label={"Functional"} off={turnOff}/>
                    </div>
                </div>
            </div>
        <Outlet/> {/*Ensure that the navbar is always rendered even as we switch pages*/}
        </div>
      </>
    );
}