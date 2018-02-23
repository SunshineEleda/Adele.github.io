var colours = [
  "#17DB94", "#0DB1ED", "#EC1897", "#E50A4B",
  "#ED6F06", "#DCD50D", "#B6F008", "#1EDB86", "#F781F3"
];

function randomColor {
	var max = colours.length + 1;
	return Math.floor(Math.random() * Math.floor(max));
};

