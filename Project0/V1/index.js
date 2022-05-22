/* To setup React you need to import on HTML index react and babel, use:
    Import react https://reactjs.org/docs/cdn-links.html
    Import babel https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx
*/ 
// Global variable ReactDOM is the core of React itself
// User render to render HTML into your HTML files by Id/class etc ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

function Navbar() {
    return (    
    <div class="navbar sticky">
        <ul>
            <li><a href="/HTML/index.html" class="selected">Home</a></li>
            <li><a href="/HTML/ejercicios.html">Ejercicios</a></li>
            <li><a href="/HTML/recuros.html">Recursos</a></li>
        </ul>
    </div> )
}

function ContentResourceList(props) {
    return (
    <div class="content">
        <ul class="resource-list">
            <ContentResourceListMember number={props.number} name={props.name} desc={props.desc}/>
        </ul>
    </div> )
}

function ContentResourceListMember(props) {
    return (
    <li>
    <h2>{props.number}</h2>
    <h3>{props.name}</h3>
    <p>{props.desc}</p>
    <a href="https://www.w3schools.com/html/default.asp" 
        target="_blank" class="button">Visit</a>
    </li> )
}

const content = 
<div>
    <Navbar />
    <ContentResourceList number="01" name="HTML W3School" desc="w3school resources regarding html language"/>
</div>
ReactDOM.render(content, document.getElementById("root"));