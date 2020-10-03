// import { tsvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

// function parseData(parse) {
//   return function (d) {
//     d.date = parse(d.date);
//     d.open = +d.open;
//     d.high = +d.high;
//     d.low = +d.low;
//     d.close = +d.close;
//     d.volume = +d.volume;

//     return d;
//   };
// }

const parseDate = timeParse("%s");

// export function getData() {
//   const promiseMSFT = fetch(
//     "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
//   )
//     .then((response) => response.text())
//     .then((data) => tsvParse(data, parseData(parseDate)));
//   return promiseMSFT;
// }

export function getData(rawData) {
  if (rawData === undefined) {
    return;
  }
  var out = [];
  var j = 0;
  for (var i = 0; i < rawData.c.length; i++) {
    if (i % 26 === 0) {
      out[j] = {
        open: rawData.o[i],
        high: rawData.h[i],
        low: rawData.l[i],
        date: parseDate(rawData.t[i]),
        close: rawData.c[i],
        volume: rawData.v[i],
      };
      j++;
    }
  }
  console.log(out);
  return out;
}
