// const h1 = document.querySelector('h1')

const btn = document.querySelector('button');

function randColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

btn.addEventListener('click', function () {
    const randomColor = randColor();
    document.body.style.backgroundColor = randomColor;

    const h2 = document.createElement('h2');
    h2.innerHTML = `This color is ${randomColor}`
    document.body.append(h2)
})

