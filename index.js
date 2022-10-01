let color = document.getElementById("color");
let site = document.getElementById("site");

let net = new brain.NeuralNetwork();
net.train([
    { input: { red: 0, green: 0, blue: 0 }, output: { color: 1 } },
    { input: { red: 1, green: 1, blue: 1 }, output: { color: 0 } },
    { input: { red: 0, green: 1, blue: 0 }, output: { color: 0 } },
    { input: { red: 1, green: 0, blue: 0 }, output: { color: 0 } },
])

color.addEventListener("input", function () {
    site.style.backgroundColor = color.value;

    let rgb = color.value.substring(4, color.value.length - 1).split(",");
    let data = {
        red: rgb[0] / 255,
        green: rgb[1] / 255,
        blue: rgb[2] / 255
    }

    let result = net.run(data);

    if (result.color > .5) {
        site.style.color = "white"
    } else {
        site.style.color = "black"
    }
})
