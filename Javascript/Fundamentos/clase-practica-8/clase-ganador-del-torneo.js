/*

Algorithmic Tournament winner

An algorithmic tournament is underway, where teams of programmers compete to solve algorithmic problems as
quickly as possible.

The competition follows a round-robin format, with each team facing off against all other teams. Only two teams
compete against each other at a time, and in each competition, one team is designated as the home team, while
the other is the away team. There is always a clear winner and loser in each competition, with no ties. Teams
earn 3 points for a win and 0 points for a loss. The overall winner of the tournament is the team with the highest
total points.

Your task is to write a function that determines the winner of the tournament based on the results of the
competitions. The input consists of two arrays: competitions and results. The competitions array contains
pairs of teams represented as [homeTeam, awayTeam], where each team is a string of at most 30 characters.
The results array indicates the winner of each corresponding competition in the competitions array. Specifically,
results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team won,
and a 0 means that the away team won.

It is guaranteed that exactly one team will win the tournament, and each team will compete against all other
teams exactly once. Additionally, the tournament will always have at least two teams.

*/

const competitions = [
    ["JavaScript", "C#"],
    [`C#`, "Python"],
    ["Python", "JavaScript"]
]

const results = [ 0, 0, 1]

function addVictoryToTeamInClassification (teamName, classification) {
    const indexTeam = classification.findIndex((t) => t.name === teamName)

    if (indexTeam != -1) {
        classification[indexTeam].score += 3
    }
    else {
        classification.push({
            name: teamName,
            score: 3})
    }
}

function getTournamentWinner (competitions, results) {

    const classification = []

    for (let i = 0; i < competitions.length; i++) {
        if (results[i] == 0) {
            // the away team won (1 position)
            addVictoryToTeamInClassification(competitions[i][1], classification)
        }
        else {
            // the home team won (0 position)
            addVictoryToTeamInClassification(competitions[i][0], classification)
        }
    }
    
    const winner = classification.reduce((prev, current) => {
        return prev.score > current.score ? prev : current
    })

    return winner
}


console.log(getTournamentWinner(competitions, results))