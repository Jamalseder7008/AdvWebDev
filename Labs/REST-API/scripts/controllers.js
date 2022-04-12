const getCallbacks = () => ({
    'new-game-button': newGameMenu,
    'start-game-button': startGame
});

const getMin = () => document.getElementById('min-value').value;
const getMax = () => document.getElementById('max-value').value;

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for (let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}