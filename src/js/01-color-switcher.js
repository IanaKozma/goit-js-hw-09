startBtn = document.querySelector('button[data-start]');
stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
    constructor(updateBodyBgColor) {
        this.intervalID = null;
        this.isActive = false;
        this.updateBodyBgColor = updateBodyBgColor;
        stopBtn.disabled = true;
    }

    startChangeBgColor() {
        if (this.isActive) {
            return;
        }

        startBtn.disabled = true;
        stopBtn.disabled = false;

        this.isActive = true;
        this.intervalID = setInterval(() => updateBodyBgColor(getRandomHexColor()), 1000);
    }

    stopChangeBgColor() {
        startBtn.disabled = false;
        stopBtn.disabled = true;

        clearInterval(this.intervalID);
        this.isActive = false;
    }
}

const colorSwitcher = new ColorSwitcher();
startBtn.addEventListener("click", () => colorSwitcher.startChangeBgColor());
stopBtn.addEventListener("click", () => colorSwitcher.stopChangeBgColor());