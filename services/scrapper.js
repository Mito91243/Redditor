import { load } from "cheerio";

async function Get_Results(x) {
  let counter = 0;
  let resultsJson = {};

  await fetch(
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
        resultsJson[`result_${counter}`] = string.slice(7, -86);
        counter = counter + 1;
      });
      //console.log(JSON.stringify(resultsJson, null, `\t`));
    })
    .catch((error) => console.error("Error:", error));
  console.log(JSON.stringify(resultsJson));
  return JSON.stringify(resultsJson, null);
}

function Get_Comments_Res(resjson) {
  for (const key in resjson) {
  }
}

function run(params) {
  let resjson = Get_Results("prop");
  let comments = Get_Comments_Res(resjson);
}
run("prop")
