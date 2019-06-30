import React from 'react';
import './App.css';
import QuizCard from './components/Quiz';
import Quizzes from './components/Quizzes';

function App() {
  let quizData={
    0:{
      title:'Jackets',
      description:'Choose the best jacket',
      quiz: {
        questions:{
          0: "Pick a weather",
          1: "What's your favorite color?",
          2: "Looking for something light-weight?",
          3: "How active are you?",
          4: "How would you like to shop?"
        },
        options:{
          0: {
              'Summer' : 'text' ,
              'Winter' : 'text' ,
              'Spring' : 'text' ,
              'Fall' : 'text' 
          },
          1: {
              'blue' : 'color',
              'black' : 'color' ,
              'green' : 'color' ,
              'grey' : 'color',
            
          },
          2: {
              'yes' : 'text',
              'no' : 'text'
          },
          3:{
              'yes' : 'text',
              'no' : 'text'
          },
          4:{
              'Women' : 'text',
              'Men' : 'text',
              'Kids' : 'text',
              'Baby' : 'text'
          }
        }
      }
    }
  }
  let quizzes = {

  }
  return (
    <div className="App" style={{maxWidth: "900px"}}>
      <Quizzes data={quizData}/>
    </div>
  );
}

export default App;
