    let score =
      JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        loses: 0,
        ties: 0
      };
    updateScoreElement();
    function playgame(playerMove) {
      const computermove = pickComputerMove();
      let result = '';
      if (playerMove === 'rock') {
        if (computermove === 'rock') {
          result = 'Tie.';
        }
        else if (computermove === 'paper') {
          result = 'You Lost.';
        }
        else if (computermove === 'scissors') {
          result = 'You Won.';
        }
      }
      else if (playerMove === 'scissors') {
        if (computermove === 'rock') {
          result = 'You Lost.';
        }
        else if (computermove == 'paper') {
          result = 'You Won.';
        }
        else if (computermove == 'scissors') {
          result = 'Tie.';
        }
      }
      else if (playerMove === 'paper') {
        if (computermove === 'rock') {
          result = 'You Won.';
        }
        else if (computermove == 'paper') {
          result = 'Tie.';
        }
        else if (computermove == 'scissors') {
          result = 'You Lost.';
        }
      }


      if (result === 'You Won.') {
        score.wins += 1;
      }
      else if (result === 'You Lost.') {
        score.loses += 1;
      }
      else if (result === 'Tie.') {
        score.ties += 1;
      }
      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computermove}-emoji.png" class="move-icon"> Computer`;

    }
    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computermove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computermove = 'rock';
      }
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computermove = 'paper';
      }
      else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computermove = 'scissors';
      }
      return computermove;
    }
