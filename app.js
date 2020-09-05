const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Alboran', age: 31},
    {firstName: 'David', lastName: 'Bisbal', age: 40},
    {firstName: 'Alejandro', lastName: 'Sanz', age: 51}
    ],
  _games: [
    {opponent: 'FCBarcelona', teamPoints: 52, opponentPoints: 27},
    {opponent: 'Arsenal', teamPoints: 42, opponentPoints: 29},
    {opponent: 'Real Madrid', teamPoints: 26, opponentPoints: 34},
    ],
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  },
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: 'Joe',
      lastName: 'Perrett',
      age: 29
    }
    this.players.push(player);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('FCBarcelona', 52, 27);
team.addGame('Arsenal', 42, 29);
team.addGame('Real Madrid', 26, 34);

console.log(team.games);