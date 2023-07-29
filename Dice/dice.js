const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const Dice = (props) => {
  const { side } = props;

  const diceElm = document.createElement('div');
  diceElm.classList.add('dice');
  diceElm.innerHTML = `
        <div class="dice__side dice__side--${side}"></div>
        <button class="btn btn--small roll-btn">hodit</button>
    `;

  diceElm.querySelector('.btn').addEventListener('click', () => {
    const number = roll();
    const sideElm = diceElm.querySelector('.dice__side');

    // Array.from(sideElm.classList).forEach((className) => {
    //   if (className.startsWith('dice__side--')) {
    //     sideElm.classList.remove(className);
    //   }
    // });
    // sideElm.classList.add(`dice__side--${rollNumber}`);

    for (let i = 1; i <= 6; i++) {
      sideElm.classList.remove(`dice__side--${i}`);
    }
    sideElm.classList.add(`dice__side--${number}`);
  });
 
  return diceElm;
};
