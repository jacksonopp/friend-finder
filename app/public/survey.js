const getValues = () => {
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

    axios.post("/api/friends", { name, photo, scores })
        .then(response => console.log(response))
        .catch(err => console.log(err));
}