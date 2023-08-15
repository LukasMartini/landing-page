import {WebDriver, By} from "selenium-webdriver";

export default function ReadmeComponent({URL}) {
    let rmHTML = <text>hell</text>
    // const page = new WebDriver();
    // page.get(URL);
    // const links = page.findElements(By.tagName("a"));
    // let noREADME = true;
    // for (const link of links) {
    //     if ("title=\"README.md\"" in link.getAttribute("outerHTML")) {
    //         URL = link.getAttribute("href");
    //         noREADME = false;
    //     }
    // }
    // if (noREADME) {
    //     return (
    //         <>
    //             <article className="markdown-body entry-content container-lg" itemProp="text"><h1 tabIndex="-1" dir="auto"><a id="user-content-this-project-has-no-readmes" className="anchor" aria-hidden="true" href="#this-project-has-no-readmes"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>This project has no READMEs.</h1><p dir="auto">Please ensure that the README file is in the root directory. If that is not the issue, good luck.</p></article>
    //         </>
    //     );
    // } else {
    //     page.get(URL);
    //     let tags = page.getPageSource().then((result) => {return result.substring(result.search("<article class=\"markdown-body entry-content container-lg\""), result.search("</article>"+10));})
    //     return tags;
    // }
    return rmHTML;
}