import Options from "./Options.js";
const Question = (trivia) => (
    // if(!(trivia.category.equals("Mythology"))){
        `<h3>
            <div>Category - ${trivia.category}</div>
            <div>Difficulty - ${trivia.difficulty}</div>
        </h3>
        <h4>Question: </h4>
        <p>${trivia.question}</p>
        ${Options(trivia)}`
    // }
    // else{
    //     `<h3>A different question will be better for you.</h3>`
    // }
)

export default Question;
    
