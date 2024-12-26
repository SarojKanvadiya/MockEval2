const navbar =()=>{
    let navbar =`<div id="nav-container">
            <a href="./index.html" id="logo">Mini Quiz App</a>
            <div id="nav-links">
                <a href="./index.html">Home</a>
                <a href="./quiz.html">Quiz</a>
                <a href="./questions.html">Questions</a>
            </div>
        </div>`;
    document.getElementById("nav").innerHTML = navbar;
}
navbar()