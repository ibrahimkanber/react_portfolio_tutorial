import React,{useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"

function Navi(props) {
    const [search,setSearch]=useState("")
    const handleChange=(e)=>{
      setSearch(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      props.setSearchedValue(search)
    }
    return (
      <div style={{marginBottom:60}}>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
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
