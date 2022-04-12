import Question from './components/Question.js';
import HUD from './components/HUD.js'; //Import HUD function
import Skip from './components/Skip.js'; //Import Skip function
import Leaderboard from './components/Leaderboard.js';

const renderDOM = (html) => document.getElementById('view').innerHTML = html; //Set HTML in view

export const PlayScene = (props) => { //Function for HTML view
    const {timer, score, trivia} = props; //Destructure properties
    renderDOM( //Render the Scene's HTML to DOM
    `${HUD(timer, score)}
    ${Question(trivia)}
    ${Skip()}`
    )
}

export const StartMenu = (props) => {
    const {timer, score, trivia} = props;
    renderDOM(
        `${HUD(timer,score)}
        ${Leaderboard(topScores)}
        <hr>
        <button onclick='createGame()'>Play</button>`
    )
}
    

export const GameoverScene = (props) => { //Function for HTML view
    const {timer, score, trivia} = props; //Destructure properties
    renderDOM( //render the Gameover HTML to DOM
        `${HUD(timer, score)}
        <h1>Game Over!</h1>
        <button onclick='start()'>Start Menu</button>`
    )
}