import React from 'react';

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
        return <>
            <text>AAAAAA</text>
        </>
    }
}
export default Demo;