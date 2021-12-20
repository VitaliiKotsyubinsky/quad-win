export default class QuadWin {
    constructor(labels) {
        this.html = /* html*/`
            <div class="quad-win">
                <div class="quad-win__item">${labels[0]}</div>
                <div class="quad-win__item">${labels[1]}</div>
                <div class="quad-win__item">${labels[2]}</div>
                <div class="quad-win__item">${labels[3]}</div>
            </div>
        `
    }

    appendTo(parentEl) {
        parentEl.innerHTML = this.html
        const style = document.createElement('style')
        style.innerHTML = css
        document.head.append(style)
    }

    calcStyles() {

    }
}


const css = /* css */`
.quad-win__item {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    border: black solid 2px;
    align-items: center;
    text-align: center;
    line-height: 200px;

}

.quad-win {
    margin: 0 auto;
    max-width: 450px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

}
`