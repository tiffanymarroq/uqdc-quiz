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
            'Summer': 'text',
            'Winter': 'text',
            'Spring': 'text',
            'Fall': 'text'
          },
          1: {
            'blue': 'color',
            'black': 'color',
            'green': 'color',
            'grey': 'color',

          },
          2: {
            'yes': 'text',
            'no': 'text'
          },
          3: {
            'yes': 'text',
            'no': 'text'
          },
          4: {
            'Women': 'text',
            'Men': 'text',
            'Kids': 'text',
            'Baby': 'text'
          }
        }
      }
    },
    q2: {
      title: 'UT',
      description: 'Find your next favorite shirt!',
      bannerImage: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
      quiz: {
        questions: {
          0: "Pick a season",
          1: "What's your favorite color?",
          2: "Looking for something light-weight?",
          3: "How active are you?",
          4: "How would you like to shop?"
        },
        options: {
          0: {
            'Summer': 'text',
            'Winter': 'text',
            'Spring': 'text',
            'Fall': 'text'
          },
          1: {
            'blue': 'color',
            'black': 'color',
            'green': 'color',
            'grey': 'color',

          },
          2: {
            'yes': 'text',
            'no': 'text'
          },
          3: {
            'yes': 'text',
            'no': 'text'
          },
          4: {
            'Women': 'text',
            'Men': 'text',
            'Kids': 'text',
            'Baby': 'text'
          }
        }
      }
    },
    q3: {
      title: 'Jeans',
      description: 'Find your perfect pair of jeans.',
      bannerImage: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
      quiz: {
        questions: {
          0: "Pick a season",
          1: "What's your favorite color?",
          2: "Looking for something light-weight?",
          3: "How active are you?",
          4: "How would you like to shop?"
        },
        options: {
          0: {
            'Summer': 'text',
            'Winter': 'text',
            'Spring': 'text',
            'Fall': 'text'
          },
          1: {
            'blue': 'color',
            'black': 'color',
            'green': 'color',
            'grey': 'color',

          },
          2: {
            'yes': 'text',
            'no': 'text'
          },
          3: {
            'yes': 'text',
            'no': 'text'
          },
          4: {
            'Women': 'text',
            'Men': 'text',
            'Kids': 'text',
            'Baby': 'text'
          }
        }
      }
    }
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
          <QuizCard questions={quizzes[q].quiz.questions} options={quizzes[q].quiz.options} />
        </div>
      </div>
    )
  })
  return ( 
    <div className = "App"
      style = {{ padding: " 0 20px" }} >
        <h1>Quizzes</h1>
        <div className="quiz-content">
          {quizCard}
        </div>
    </div>
  );
}

export default App;