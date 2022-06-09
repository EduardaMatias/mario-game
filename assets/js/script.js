const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const repeat = document.querySelector('.repeat');
        
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; //pega o deslocamento esquerdo do pipe

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //o sinal de mais no inicio converte os valores da propriedade para number

    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        repeat.style.display = 'block';
        repeat.addEventListener('click', gameRepeat);

        clearInterval(loop);
    }
}, 10)

const gameRepeat = () => {
    document.location.reload(true);
}

document.addEventListener('keydown', jump);
