import QuadWin from './quadWin.js'

const letters = ['alfa', 'beta', 'gama', 'delta']
const quadWin1 = new QuadWin(letters)
quadWin1.appendTo(container1)
setTimeout(() => {
    quadWin1.appendTo(container2)
}, 1000);
console.log(quadWin1);

