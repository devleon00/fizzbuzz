const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission =
        ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountExplorersInMission =
        ExplorerController.getExplorersAmonutByMission(mission);

    response.json({ mission: mission, quantity: amountExplorersInMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernamesExplorersInMission =
        ExplorerController.getExplorersUsernamesByMission(mission);

    response.json(usernamesExplorersInMission);
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    response.json(ExplorerController.applyValidationInNumber(number));
});

app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    response.json(ExplorerController.getExplorersByStack(stack));
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt(request.params.score);
    const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
    response.json({score: score, trick: fizzbuzzTrick});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
