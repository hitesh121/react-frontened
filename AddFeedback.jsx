
import { Button } from "reactstrap";
import React, { Component,useState,useEffect,Fragment} from "react";
import {Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { data } from "jquery";
import axios from "axios";
export class AddFeedback extends Component{

  constructor(props) {
    super(props)

    this.state = {
        feedbackCriteria1:'',
        feedbackCriteria2:'',
        feedbackCriteria3:'',
        feedbackCriteria4:'',
        feedbackCriteria5:'',
        comments:'',
        suggestions:''
    }
    this.handleForm=this.handleForm.bind(this);
}
//const [error,setError]=useState({})

handleForm = (a) => {
  a.preventDefault();
  axios.post("http://localhost:8004/fdbc/addFeedback",this.state).then((response)=>
  {
      alert(response.data.feedbackId)
      
  }
  ).catch(error=>{        
      console.log(error)
  })

}
render()
{


    return ( 

 <Fragment>
   <div className="w-75 mx-auto shadow p-20">
<h1 className="text-center text-info">FILL THE FEEBACK FORM</h1>
<br/>
   <Form onSubmit ={this.handleForm}>
        <FormGroup>
        
        <Label for="How was Your experience with FeedbackCriteria1" ><strong>How was Your experience with Feedback Criteria 1</strong></Label>
        <br/><label>Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</label>
        <Input type="select"
         name="select"
          id="exampleSelect1"
          onChange={(e)=>{
            this.setState({feedbackCriteria1: e.target.value});
          }}>
             <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria1"><strong>How was Your experience with Feedback Criteria 2  </strong></Label>
      <br/><label>Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</label>
        <Input type="select" name="select" id="exampleSelect2" 
        onChange={(e)=>{
          this.setState({feedbackCriteria2:e.target.value});
        }}
        >
           <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria3"><strong>How was Your experience with Feedback Criteria 3   </strong></Label>
      <br/><label>Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</label>
        <Input type="select" name="select" id="exampleSelect3" xs="6" sm="4"
        onChange={(e)=>{
          this.setState({feedbackCriteria3:e.target.value});
        }}>
           <option></option>
          <option >1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria4"><strong>How was Your experience with Feedback Criteria 4  </strong></Label>
      <br/><label>Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</label>
        <Input type="select" name="select" id="exampleSelect4" onChange={(e)=>{
          this.setState({feedbackCriteria4:e.target.value});
        }}>
           <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
      <Label for="How was Your experience with FeedbackCriteria5"><strong>How was Your experience with Feedback Criteria 5  </strong></Label>
      <br/><label>Refer as 1=VeryPoor ,2 =Poor ,3=Satisfactory, 4=Good,5=Excellent</label>
        <Input type="select" name="select" id="exampleSelect5" 
        onChange={(e)=>{
          this.setState({feedbackCriteria5:e.target.value});
        }}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" class="mb-3"><strong>comments</strong></Label>
        <Input type="textarea" name="text" id="exampleText" 
        placeholder="Enter the comments.."style={{height:100}}
        onChange={(e)=>{
          this.setState({comments:e.target.value});
        }}  />

      </FormGroup>
      <FormGroup>
        <Label for="exampleText"><strong>suggestions</strong></Label>
        <Input type="textarea" name="text" id="exampleText1" placeholder="Enter the suggestions.."style={{height:100}}
        onChange={(e)=>{
          this.setState({suggestions:e.target.value});
        }}/>
      </FormGroup>
      <Container className="text-center">
        <Button type="submit" color="success" className="btn-lg">SUBMIT</Button>
      </Container>
        </Form>
        </div>
        <br/><br/><br/><br/>
    </Fragment>
    );
      }
    }    

     export default AddFeedback
