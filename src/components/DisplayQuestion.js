import React, { useState } from 'react';
import { Form,Alert,Spinner, FormGroup, Label, Input } from 'reactstrap';
function DisplayQuestion(props) {
    const { index, problem, active ,userschoice,setuserschoice} = props;
    if(!problem){
        return <Spinner color="success" />
     }
     
    const { question, correct, choices, image, desc } = problem;
   
    return (
        <>
        {
            image==="None"
            ?""
            :
            (
                <div className="row">
                <div className="col-12">
                     <img src={image}></img>
                </div>
                </div>
            )
        }
            <div className="row">
                <div className="col-12 text-center">
                    <h5>
                        {(index+1) + '. ' + question};
              </h5>
                </div>

            </div>
            {
                choices.map((option,i)=>(
                <Form key={i.toString()}>
                <FormGroup check>
                    <Label check>
                        <Input  type="radio" name={"radio1"+i} 
                            checked={userschoice===i+1}
                            onChange={
                                ()=>{
                                    setuserschoice(index,i+1);
                                }
                            }
                        />{' '}{option}
           
          </Label>
                </FormGroup>
            </Form>
            ))
            }

            {  
                !active?
               <> <Alert color="primary">
        <b>Correct answer: {correct}</b>
        <br></br>
        <br></br>
        <b>  Desc :{desc}</b>
        
      </Alert></>
      :
      ''
            }


            


        </>
    )
};

export default DisplayQuestion;