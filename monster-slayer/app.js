new Vue({
  el: '#app',
  data: {
    playerScore: 100,
    monsterScore: 100,
    gameIsRunning: false,
    moves: ['a', 'b']
  },
  methods: {
    newGame: function() {
      console.log("new game");
      this._reset();
      this.gameIsRunning = true;
    },
    attack: function() {
      console.log("attack");
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1);
      this.monsterScore -= damage;
      this.moves.push("attack");
      this._monsterAttack();
    },
    specialAttack: function() {
      console.log("special attack");
    },
    heal: function() {
      console.log("heal");
      this.playerScore += 10;
      this._monsterAttack();
    },
    giveUp: function() {
      console.log("give up");
      this._reset();
    },
    _reset: function() {
      this.gameIsRunning = false;
      this.playerScore = 100;
      this.monsterScore = 100;
    },
    _monsterAttack: function() {
      this.playerScore -= 9;
    }
  },
  watch: {
    playerScore: function (score, oldScore) {
      console.log(`score went from ${oldScore} to ${score}`)
      if (score <= 0) {
        console.log("you lost");
      }
    }
  }
});
