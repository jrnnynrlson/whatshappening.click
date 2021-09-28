var currentIndex = 0;

var colors = [
    "blue",
    "pink",
    "red",
    "silver",
    "yellow",
    "orange",
    "midnightblue",
    "maroon",
    "gray",
    "firebrick",
    "blueviolet",
    "indigo",
    "darkgreen",
    "cyan",
    "orangered",
    "olive",
    "turquoise"
]

const bodyTag = document.querySelector("body");

function change () {
    var newIndex = Math.floor(Math.random() * colors.length)
    while (newIndex == currentIndex) {
        newIndex = Math.floor(Math.random() * colors.length)
    }
    currentIndex = newIndex;

    const color = colors[newIndex]
    bodyTag.style.backgroundColor = color

    setTimeout (change, 6000);
}

change ();