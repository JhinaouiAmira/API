import "./App.css";
import UserList from "./components/UserList";
import { Navbar, Container, Nav } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My checkpoint API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#UserList">User's List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <UserList />
    </div>
  );
}

export default App;
