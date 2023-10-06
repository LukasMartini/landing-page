import React from 'react';
import { testDemo } from './testPythonScriptHost';

class Demo extends React.Component {
    // A NOTE ABOUT THE ORIGINAL ISSUE:
    /*
        My problem was that I could not get custom Javascript scripts to run under any circumstances. I had tried running them
        straight, using Helmet, and a few other things but they either did not run the script or returned an error. The
        solution here then is simply that I am creating a React element, something I had already tried with functions.
        However, I needed to change componentDidMount(), which I do not know how to do for a functional component. Thus,
        the solution is ultimately to run the script when this component mounts.
     */
    componentDidMount() {
        console.log("I'm dying");
    }
    render () {
        let fileText = testDemo(); // TODO: figure out evalPython issue and make this function an argument of the class for flexibility.
        return <div dangerouslySetInnerHTML={{__html: fileText}}/>; // Converts the response text into an object with a parameter __html (i.e. an html string)
    }
}
export default Demo;