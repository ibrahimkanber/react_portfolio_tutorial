import React,{useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"

function Navi(props) {
  
  const history=useHistory()
    const [search,setSearch]=useState("")
    const handleChange=(e)=>{
      setSearch(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      props.setSearchedValue(search)
    }
    return (
      <div style={{marginBottom:90}}>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  >
            <Button onClick={()=>history.push("/")}>Home</Button>
          </Nav.Link>
         
          <Nav.Link ><Button onClick={()=>history.push("/signin")}>Sign in</Button></Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
          <Button variant="outline-info" type="submit" >Search</Button>
        </Form>
      </Navbar>
      </div>
    )
}

export  {Navi}
