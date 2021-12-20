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
        this.parentEl = parentEl
        if (this.el) {
            parentEl.append(this.el)
        } else {
            parentEl.innerHTML = this.html
            this.el = this.parentEl.querySelector('.quad-win')
            const style = document.createElement('style')
            style.innerHTML = css
            document.head.append(style)
            window.addEventListener('resize', this.updateStyles.bind(this))
        }
        this.updateStyles()

    }

    updateStyles() {
        const { width, height } = this.parentEl.getBoundingClientRect()
        const smallerSide = width < height ? width : height
        this.el.style = `width: ${smallerSide}px; height: ${smallerSide}px`
    }
}


const css = /* css */`
.quad-win__item {
    box-sizing: border-box;
    width: 45%;
    height: 45%;
    background-color: aquamarine;
    border: black solid 2px;
    align-items: center;
    text-align: center;
    line-height: 200px;

}

.quad-win {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;

}
`