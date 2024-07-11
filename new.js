// import fs from 'fs';
const svg = document.getElementById("svg");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");


const bbox1 = path1.getBBox();
const bbox2 = path2.getBBox();


const combinedBBox = {
  x: Math.min(bbox1.x, bbox2.x ),
  y: Math.min(bbox1.y, bbox2.y),
  width: Math.max(bbox1.x + bbox1.width, bbox2.x + bbox2.width) - Math.min(bbox1.x, bbox2.x),
  height: Math.max(bbox1.y + bbox1.height, bbox2.y + bbox2.height) - Math.min(bbox1.y, bbox2.y)
};

const surroundingPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
const d = `M ${combinedBBox.x} ${combinedBBox.y} 
           H ${combinedBBox.x + combinedBBox.width} 
           V ${combinedBBox.y + combinedBBox.height} 
           H ${combinedBBox.x} Z`;
console.log(d);
surroundingPath.setAttribute("d", d);
surroundingPath.setAttribute("stroke", "black");
surroundingPath.setAttribute("fill", "none");

svg.appendChild(surroundingPath);

// function writeDToFile(d) {
// fs.writeFile('pathData.txt', d, (err) => {
// if (err) {
//   console.error('Error writing to file:', err);
// } else {
//   console.log('Successfully wrote to pathData.txt');
// }
// });
// }