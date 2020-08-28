import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Axios from "axios";



class EmployeePortfolio extends Component {
    state = {
        results:[],
        search: ""
    };
   Search = ()=> {
    return Axios.get(
        "https://randomuser.me/api/?results=200"
    ).then(
       res =>{
           this.setState({
              results:res.data.results 
           })
       } 
    )
   }
   componentDidMount(){
       this.Search();
   }
   SortByFirst =()=>{
       var sorted = this.state.results.sort(
           compare
       )
       function compare(a, b) {
           const nameA = a.name.first.toUpperCase();
           const nameB = b.name.first.toUpperCase();
           let comparison = 0;
           if (nameA > nameB) {
               comparison = 1;
           } else if (nameA < nameB) {
               comparison = -1;
           }
           return comparison;
       }
       this.setState({
           results:sorted
       })
   }
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    // Render is used to render content on page but it doesn't seem to work 
    
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Employee") {
            return <Employee />;
        } else {
            return <Home />;
        }
    };
    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
                <Employee
                    results = {this.state.results}
                    SortByFirst ={this.SortByFirst}
                 />
            </div>
        );
    }
}

export default EmployeePortfolio;
