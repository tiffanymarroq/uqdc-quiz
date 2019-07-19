import React from 'react';
import './App.css';
import QuizCard from './components/Quiz';
import Quizzes from './components/Quizzes';

function App() {
  let singlePage = true;
  let quizzes = {
    q1: {
      title: 'Jeans',
      description: 'Find your match',
      bannerImage: 'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg',
      quiz: {
        questions: {
          0: "How do you like your jeans to fit?",
          1: "What type of cut are you looking for?",
          2: "What's your style?",
          3: "Sizing?",

        },
        options: {
          0: {
            'Tight': {
              type: 'text',
              src: 'Tight'
            },
            'Loose': {
              type: 'text',
              src: 'Loose'
            },
            'Regular': { 
              type: 'text',
              src: 'Regular'
            },
            'Straight': {
              type: 'text',
              src: 'Straight'
            }
          },
          1: {
            'Flared': {
              type: 'color',
              src: '#C5C3C6'
            },
            'Wide':  {
              type: 'color',
              src: '#1985A1'
            },
            'Straight':  {
              type: 'color',
              src: '#8797B2'
            }
          },
          2: {
            'Stretchy': {
              type: 'text',
              src: 'Stretchy'
            },
            'Ripped': {
              type: 'text',
              src: 'Ripped'
            },
            'High Rise': {
              type:'text',
              src:'High Rise'
            }
          },
          3: {
            'XXS - XS': {
              type: 'text',
              src: 'XXS - XS'
            },
            'S - M': {
              type: 'text',
              src: 'S - M '
            },
            'L - XL': {
              type: 'text',
              src: 'no'
            },
            'XXL -XXXL' : {
              type: 'text',
              src: 'text'
            }
          },
        }
      }
    },
    q2: {
      title: 'Jeans',
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
              src: '#1985A1'
            },
            '34':  {
              type: 'color',
              src: '#4C5C68'
            },
            '12':  {
              type: 'color',
              src: '#C5C3C6'
            },
            '122':  {
              type: 'color',
              src: '#ff2022'
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
    q3: {
      title: 'ULD',
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
              src: '#1985A1'
            },
            '34':  {
              type: 'color',
              src: '#4C5C68'
            },
            '12':  {
              type: 'color',
              src: '#C5C3C6'
            },
            '122':  {
              type: 'color',
              src: '#ff2022'
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
            <img src={quizzes[q].bannerImage} width={'100%'} alt={quizzes[q].title + " Banner"}style={{margin:"10px 0 "}}/>
          </div>
          <QuizCard title={quizzes[q].title} questions={quizzes[q].quiz.questions} options={quizzes[q].quiz.options} />
        </div>
      </div>
    )
  })
  return ( 
    <div className = "App">
        <h1>Quizzes</h1>
        {singlePage ? 
              <QuizCard
                single={singlePage} 
                title={quizzes["q1"].title}
                bannerImage={quizzes["q1"].bannerImage}
                description={quizzes["q1"].description}
                questions={quizzes["q1"].quiz.questions} 
                options={quizzes["q1"].quiz.options} />
          :
          <div className="quiz-content">
            {quizCard}
          </div>
        }
        
    </div>
  );
}

export default App;