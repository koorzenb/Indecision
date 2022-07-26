console.log("App is running");
// https://reactjs.org/docs/events.html for all React events

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
};

const numbers = [55, 20, 101];

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onDecision}>What should I do</button>
            move react app on Github to its own repo
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map(o => <li key={o}>{o}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById("app"));
};

render();

