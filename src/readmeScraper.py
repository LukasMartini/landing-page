import selenium.common.exceptions
from selenium import webdriver
from selenium.webdriver.common.by import By
import sys
import re
import os

def parseTags(toParse: str, parsedTags: list) -> list:
    # Base Case:
    if toParse == "":
        return parsedTags
    # Implementation:
    firstEndTag = toParse.find(">")
    if toParse.find(" ") != -1 and toParse.find(" ") < firstEndTag and toParse[0] == "<":
        tag = toParse[1:toParse.find(" ")]
        parsedTags.append(tag)
        toParse = toParse[firstEndTag+1:]
    elif toParse.find(" ") == -1 or toParse.find(" ") > toParse.find("/"):
        toParse = ""
    else:
        toParse = toParse[toParse.find("<"):] # TODO: Specify which tags go with which text (maybe dict?)
    return parseTags(toParse, parsedTags)

def main(args: list):
    # A note about the CLI formatting and arguments.:
        # python3 readmeScraper.py "Repo URL" <- This is the minimum required.
        # --debug                             <- This argument will run the pytest unit tests in RMSTests.py.
    # Preconditions:
    URL = re.search("^https://github\.com/.+/.+$", args[1])
    if type(args) != type([]) or len(args) < 2 or not URL: # Ensures correct function call formatting.
        # NOTE: the regex check MAY fail if there are repos not attached to an account or organization that I am unaware of.
        # For now, the intention of the /.+/.+ is to ensure that a call can never be made to a user page.
        raise Exception("Scrapper call must be formatted exactly as 'python3 readmeScraper.py \"Repo URL\"'.")
    if len(args) > 2 and args[2] == "--debug": # Checks for the argument to run unit tests.
        os.system("cd testfiles")              # Moves to the testfiles folder.
        os.system("pytest")                    # Runs all python unit tests.
        # TODO: set up a test repo with a README specifically for the unit tests.
    # Implementation:
                                    # ----- Find README ----- #
    page = webdriver.Chrome()                                        # Initializes the webdriver.
    page.get(URL.string)                                             # Gets the page source.
    links = page.find_elements(By.TAG_NAME, "a")                     # Finds all links on the page.
    for each in links: # TODO: create formatted output for when there is no README.(may need a second test repo for related UTs.)
        if "title=\"README.md\"" in each.get_attribute("outerHTML"):  # If the necessary title is in the link HTML... Note that this will always choose the last README.
            URL = each.get_attribute("href")                          # Set the URL to the URL for the README.
                                    # ----- Get README Text ----- #
    # page.get("https://raw.githubusercontent.com/LukasMartini/landing-page/master/README.md") TODO: consider using github API to get formatting information
    # print(page.page_source)
    page.get(URL)                                                                                                                                                    # Switch webdriver to the new URL
    # text = page.find_elements(By.TAG_NAME, "article")[0].text.split("\n")                                                                                          # Get all the enclosed text and split by newline.
    tags = page.page_source[page.page_source.find("<article class=\"markdown-body entry-content container-lg\""):page.page_source.find("</article>")+10]             # Cut the page source down to just the article tags surrounding the README text.
    print(tags)
    # print(text)
    # TODO: Try just handing off the page source.
                                    # ----- Parse Tags ----- #
    # tags[0] = tags[0][tags[0].find(">")+1:] # Removes the opening article tag from the first tags item, as this is always irrelevant to formatting.
    # for each in tags:
    #     tagNames = parseTags(each, [])
    #     print(tagNames)
    # Post-conditions:
    # Return Value:


main(sys.argv)