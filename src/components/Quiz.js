import React,{useEffect,useState} from 'react';
import {Progress,Button,Alert} from 'reactstrap';
import DisplayQuestion from './DisplayQuestion';
import questions from './Questions'



function randomShuffle(q){
  for(let i=q.length-1;i>=0;i--){
      let id=Math.floor(Math.random()*(i+1));
      let temp=q[i];
      q[i]=q[id];
      q[id]=temp;
  }
  return q;
}

function Timer(props){
    const {time}=props;
    return(
        <div className="container">
            <div className="text-center">
                {time===0 ?"Time's Up": time +" seconds remaining"}
            </div>
                <Progress value={100-time} color="danger" />
        </div>
    )
}

function Quiz(props){
    const [time, settime] = useState(100);  //Time remaining 
    const [active,setactive]=useState(true);
    const [problem,setproblem]=useState(null);
    const [current,setcurrent]=useState(0);
    const [selected,setselected]=useState([null,null,null,null,null]);
     
    const finishquiz=()=>{
           setactive(false);
           let score=0;
           for(let i=0;i<problem.length;i++){
               if(problem[i].correct===selected[i])
               score+=10;
           }
           alert('Congrats! Your score is '+score+"out of 50");
    }
    const setuserschoice=(index,choice)=>{
        let t=selected;
        t[index]=choice;
        setselected(t);
    }
    useEffect(() => {
        if(time===0)
        finishquiz();
        if(active&&time!==0){
            setTimeout(()=>{
                settime(time-1);
            },300);
        }
      
    }, [time]);
    useEffect(()=>{
        setproblem(randomShuffle(questions).splice(0,5));
    },[]);
    return(
        <div className="container text-white">
            <div className="row">
                <div className="col-12">
                     <Timer time={time}/>
                     <br></br>
                     <br></br>
                     <DisplayQuestion
                         index={current}
                         problem={!problem
                         ?null
                         :problem[current]}
                         active={active}
                         userschoice={selected[current]}
                         setuserschoice={setuserschoice}
                     />
                     
                     {current !== 0 ? (
            <>
              <Button
                color='info'
                onClick={() => {
                  setcurrent(current - 1);
                }}
              >
                Previous
              </Button>{' '}
            </>
          ) : (
            ''
          )}

            {
                current!==4
                ?(<><Button color="secondary" onClick={
                    ()=>{
                        setcurrent(current+1);
                    }
                }>Next</Button>{' '}</>)
                :
                ('')

            }

            {
                active?
                <>
                <Button color="success" onClick={
                    ()=>{
                        finishquiz();
                    }
                }>Submit</Button>{' '}
                </>
                :
                ""
            }

           
        
           
                </div>
            </div>
        </div>
    )
}

export default Quiz;
