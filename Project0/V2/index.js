/* To setup React you need to import on HTML index react and babel, use:
    Import react https://reactjs.org/docs/cdn-links.html
    Import babel https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx
*/ 
// Global variable ReactDOM is the core of React itself
// User render to render HTML into your HTML files by Id/class etc ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))


const navbar = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"));