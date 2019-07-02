import React,{Component} from 'react';
import './App.css';
import QuizCard from './components/Quiz'

function App() {

  let quizzes = {
    q1: {
      title: 'Jackets',
      description: 'Find your match',
      bannerImage: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
      quiz: {
        questions: {
          0: "Pick a weather",
          1: "What's your favorite color?",
          2: "Looking for something light-weight?",
          3: "How active are you?",
          4: "How would you like to shop?"
        },
        options: {
          0: {
            'Summer': {
              type: 'text',
              src: 'summer'
            },
            'Winter': {
              type: 'text',
              src: 'winter'
            },
            'Spring': { 
              type: 'text',
              src: 'spring'
            },
            'Fall': {
              type: 'text',
              src: 'fall'
            }
          },
          1: {
            '00': {
              type: 'color',
              src: '#fff'
            },
            '34':  {
              type: 'color',
              src: '#f0f'
            },
            '12':  {
              type: 'color',
              src: '#ff0022'
            },
            '122':  {
              type: 'color',
              src: '#ff0022'
            },
          },
          2: {
            'yes': {
              type: 'text',
              src: 'yes'
            },
            'no': {
              type: 'text',
              src: 'no'
            }
          },
          3: {
            'yes': {
              type: 'text',
              src: 'yes'
            },
            'no': {
              type: 'text',
              src: 'no'
            }
          },
          4: {
            'Women':  {
              type: 'text',
              src: 'Women'
            },
            'Men':  {
              type: 'text',
              src: 'Men'
            },
            'Kids':  {
              type: 'text',
              src: 'Kids'
            },
            'Baby':  {
              type: 'image',
              src: 'https://image.uniqlo.com//UQ/ST3/us/imagesother/What-is-AIRism/AIRism-asset-airismlogo-1.png'
            }
          }
        }
      }
    },
 
   
   
  }

  let quizCard = Object.keys(quizzes).map((q, i) => {
    console.log("data",q)
    console.log("background", quizzes[q].bannerImage)
    return (
      <div className="quiz-card" >
        <div className="quiz-card-inner" >
          <h1>{quizzes[q].title}</h1>
          <p>{quizzes[q].description}</p>
          <div className="bannerImage">
            <img src={quizzes[q].bannerImage} width={'100%'} style={{margin:"10px 0 "}}/>
          </div>
          <QuizCard title={quizzes[q].title} questions={quizzes[q].quiz.questions} options={quizzes[q].quiz.options} />
        </div>
      </div>
    )
  })
  return ( 
    <div className = "App">
        <h1>Quizzes</h1>
        <div className="quiz-content">
          {quizCard}
        </div>
    </div>
  );
}

export default App;