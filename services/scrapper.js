import { load } from "cheerio";

function Get_Results() {
  let counter = 0;
  let resultsJson = {};

  fetch(
    "https://www.google.com/search?q=i5+12400f+vs+ryzen+5600+reddit&oq=i5+12400f+vs+ryzen+5600+reddit"
  )
    .then((response) => response.text())
    .then((body) => {
      const $ = load(body);

      // Select all 'a' elements and filter them
      const relevantStrings = $("a")
        .map((index, element) => $(element).attr("href"))
        .get()
        .filter((href) => href && href.includes("comments"));

      relevantStrings.forEach((string) => {
        resultsJson[`result_${counter}`] = string.slice(7,-86);
        counter = counter + 1;
      });
      console.log(JSON.stringify(resultsJson,null,`\t`));
    })
    .catch((error) => console.error("Error:", error));
}

function run(params) {
    let resjson = Get_Results()
    let comments = Get_Comments_Res()
}
Get_Results("s");
