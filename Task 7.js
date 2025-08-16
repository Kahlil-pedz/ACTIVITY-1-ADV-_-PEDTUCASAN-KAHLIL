let colors = ["red", "blue", "yellow", "green", "blue", "red"];

let reversedColors = [];
for (let i = 0; i < colors.length; i++) {
  let reversed = "";
  
  
  for (let j = colors[i].length - 1; j >= 0; j--) {
    reversed += colors[i][j];
  }
  
  
  reversedColors.push(reversed.toUpperCase());
}

console.log("Original colors:", colors);
console.log("Reversed colors:", reversedColors);
