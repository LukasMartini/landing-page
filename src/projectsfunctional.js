import HTMLReactParser from "html-react-parser";
export default function ProjectsFunctional() {
    return (
        <>
            <h3>projectsFunctional</h3>
            {getREADME("https://github.com/LukasMartini/SudokuAppandAutoSolver")}
        </>
    );
}

function getREADME(URL) {
    // This solution works because I force it to run the request synchronously. This lags the website, so if I can find a better way to do this I will.
    const page = new XMLHttpRequest();
    let final = "";
    page.open("GET", `https://api.codetabs.com/v1/proxy?quest=${URL}`, false);
    page.onload = () => {
        let start = page.responseText.search("<article class=\"markdown-body entry-content container-lg\"");
        let end = page.responseText.search("</article>")+10;
        let temp = page.responseText.substring(start, end);
        final = HTMLReactParser(temp);
    }
    page.send();
    return final;
}