import React, { Component } from "react";
import Form from "./form"
import Cards from "./card"
import FetchData from "./fetchdata"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_data:{
                username:"",
                location:"",
                img_path:null
            },
            user_details:[]
        }
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState=>({user_data:{...prevState.user_data, [name]:value}}));

        console.log(this.state);

    }

    selectImage = event => {
        console.log('hello');
        
        const files = event.target.files;
        this.saveFiles(files);
    };

    saveFiles(files) {
        console.log(files);
    
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = e => {
            console.log(e);
            //console.log(reader.result)
            let image = reader.result;
    
            this.setState(prevState => ({
              user_data: { ...prevState.user_data, img_path: image }
            }));
            // console.log(reader.result + "");
          };
          reader.readAsDataURL(files[i]);
        }
        console.log(this.state);
    }

    submitHandler = event =>{
        event.preventDefault();
        let new_arr = [];
        new_arr = this.state.user_details;
        new_arr.push(this.state.user_data);
        this.setState({
            user_data: {
              username: "",
              location: "",
              img_path: null
            }
        });
    }

    render(){
        return(
            <div>
                <div className="row">
                <Form
                    state={this.state.user_data}
                    changeHandler={this.changeHandler}
                    selectImage={this.selectImage}
                    submitHandler={this.submitHandler}
                >
                </Form>
                </div>
                <div className="row">
                    {
                        this.state.user_details.map((item,index)=>{
                            return (
                                <div className="col-lg-4" >
                                    <Cards value={item}></Cards>
                                </div>
                            )
                        })
                    }
                
                </div>
                {/* <FetchData></FetchData> */}
            </div>
        )
    }
}

export default App