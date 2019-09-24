async function getValues() {
    console.log("click");
    const scores = []
    document.querySelectorAll(".survey-select").forEach((question) => {
        const result = question.options[question.selectedIndex].value;
        scores.push(result);
    })
    const name = document.getElementById("name").value;
    console.log(name);
    const photo = document.getElementById("photo").value;
    console.log(photo);

    await axios.post("/api/friends", { name, photo, scores })
        .then(response => response)
        .catch(err => console.log(err));
    await modal();
}
const modal = () => {
    axios.get("/api/friends").then((response) => {
        const data = response.data;
        // console.log(data);
        calculate(data);
    })
}

const calculate = (data) => {
    const user = data.slice(-1)[0];
    const userScore = user.scores;
    scoresList = [];

    data.forEach(i => {
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

    console.log("#@($*&@#(*$&@#(*$&#@(*$&@#(*&$@#($*&", match);

    document.getElementById("name-title").innerText = match.name;
    const photo = document.getElementById("match-picture");
    photo.setAttribute("src", match.photo);
    photo.setAttribute("alt", `a photo of ${match.name}`);
}