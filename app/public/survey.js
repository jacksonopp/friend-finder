async function getValues() {
    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").value;
    if (name === "" || photo === "") {
        document.getElementById("name-title").innerText = "Please enter your name and a link to your photograph";
        const photo = document.getElementById("match-picture");
        photo.setAttribute("src", "https://images.unsplash.com/photo-1529117332242-b597eb0848db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80");
        photo.setAttribute("alt", `a photo of a sad pug`);
    } else {
        console.log("click");
        console.log(name);
        console.log(photo);
        const scores = []
        document.querySelectorAll(".survey-select").forEach((question) => {
            const result = question.options[question.selectedIndex].value;
            scores.push(result);
        })

        await axios.post("/api/friends", { name, photo, scores })
            .then(response => response)
            .catch(err => console.log(err));
        await modal();
    }
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