const friends = require("../data/friends");

const user = friends[1];
const userScore = user.scores;
scoresList = [];

friends.forEach(i => {
    if (i.name !== user.name) {
        const scoresArr = [];
        const test = i.scores;
        for (let i = 0; i < userScore.length; i++) {
            let diff = userScore[i] - test[i];
            scoresArr.push(Math.abs(diff))
        }
        const totalDiff = scoresArr.reduce((a, b) => a + b, 0);
        scoresList.push(
            {
                name: i.name,
                difference: totalDiff,
                photo: i.photo
            }
        );
    }
})

// console.log(scoresList);

function getMinScore() {
    return scoresList.reduce((min, p) => p.difference < min ? p.difference : min, scoresList[0].difference);
}

// console.log("minScore:", getMinScore())

const match = scoresList.find(match => match.difference === getMinScore());

console.log(match);

module.exports = {
    match,
    user,
};