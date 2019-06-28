
//# sourceMappingURL=main.js.map   

import React, {Component} from 'react';


class Quiz extends Component {
    constructor(props) {
    super(props);
    this.state = {
        completed: false,
        questionCount: 0,
        isOpen: false,
        questions:{
        0: "Pick a weather",
        1: "What's your favorite color?",
        2: "Looking for something light-weight?",
        3: "How active are you?",
        4: "How would you like to shop?"
        },
        options:{
        0: [
            'Summer',
            'Winter',
            'Spring',
            'Fall'
        ],
        1: [
            'blue',
            'black',
            'green',
            'grey',
            'white',
            'pink',
            'yellow'
        ],
        2: [
            'yes',
            'no'
        ],
        3:[
            'yes',
            'no'
        ],
        4:[
            'Women',
            'Men',
            'Kids',
            "Baby"
        ]
        },
        answers:{},
        
    };
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler = (answer, i, e) => {
        let answersDict = this.state.answers;
        answersDict[i] = answer;
        this.setState({
            answers: answersDict
        })
        this.nextQuestion();
    }
    startQuiz = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        }, ()=>{
        })
    }

    isCompleted = ()=>{
        this.setState({
            completed: !this.state.completed,
            isOpen: false
        })
    }

    restart =()=>{
        this.setState({
            completed: !this.state.completed,
            questionCount: 0,
            answers: {},
            isOpen: false
        })
    }

    nextQuestion = () => {
        let questionTotal = Object.keys(this.state.questions).length ;
        if(this.state.questionCount < (questionTotal - 1)){
            this.setState({
            questionCount: this.state.questionCount + 1
            })
        }else{
            this.setState({
                completed: true
            })
        }
    
    }
    prevQuestion = () => {
        let questionTotal = Object.keys(this.state.questions).length ;
        if((this.state.questionCount <= (questionTotal - 1)) && (this.state.questionCount > 0)){
            this.setState({
                questionCount: this.state.questionCount - 1
            })
        }
    }

    render() {
    let { 
            completed,
            questions,
            options, 
            answers, 
            isOpen,
            questionCount,
        } = this.state;
    let total = Object.keys(questions).length;

    
    let dummyData = {
        0: {
        'title': "testing",
        'url' : "https://www.uniqlo.com/us/en/women-reversible-parka-410091.html",
        'price' : "$9.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/409111/item/goods_69_409111.jpg'
        },
        1: {
        'title': "testing",
        'url' : "https://www.uniqlo.com/us/en/women-reversible-parka-410091.html",
        'price' : "$9.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/409111/item/goods_69_409111.jpg'
        },
        2: {
        'title': "testing",
        'url' : "https://www.uniqlo.com/us/en/women-reversible-parka-410091.html",
        'price' : "$9.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/409111/item/goods_69_409111.jpg'
        }
    }
    let products = Object.keys(dummyData).map((product, i) => {
        return(
        <div key={i} className="productCard">
            <a  href={dummyData[product].url} >
                <img src={dummyData[product].productImage} alt={dummyData[product].title}/>
            </a>
            <p className="productTitle">{dummyData[product].title}</p>
            <p>{dummyData[product].price}</p>
            <a  href={dummyData[product].url}>Shop Now</a>
            <br/>
            <a >Share this product</a>
        </div>
        )
    })
    if(window.location.href.includes('uniqlo.com')){
        return null
    }
    if (completed) {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Your best match is: <strong>ULD Jacket</strong>
                    <br/>
                    [short description]
                    <br/>
                    [learn more btn]
                </h2>
                <p>Here are your matches</p>
                <div className="productContainer">
                    {products}
                </div>
                <button>Share this quiz!</button>
                <br/>
                <button onClick={this.restart}>Start Over</button>
            </div>
        );
    } 

    let questionsList = Object.keys(questions).map((q, i) => {
        let optionsList = Object.keys(options[i]).map((o, j) => {
            if(options[i][j] != null){
                return(
                    <button 
                        id={"opt-" + j} 
                        className={"option " + (answers[i] == options[i][j] ? "active" : "" ) }key={j} 
                        onClick={() => this.onChangeHandler(options[i][j], i)} >
                        {options[i][j]}
                    </button>
                )
            }
        })
            return(
            <div id={'q-' + i } className="question-card"key={i}>
                <h2 className="question">{questions[q]}</h2>
                <div className="optionsContainer">{optionsList}</div>
            </div>
            )
    })
    return (
        <div className="quiz">
            <h2>Find the best Match!</h2>
            <button onClick={this.startQuiz}>Start</button>
            <div className={"quizContainer " + (isOpen ? "" : "hide")}>
                <div  className="quizModal">
                    <span className="progress-bar" style={{width:(questionCount/(total-1))*100 + '%'}}></span>
                    {questionsList[questionCount]}
                    <div className="button-container">
                        {questionCount > 0 ?
                            <button onClick={this.prevQuestion}>Previous</button>
                        :   null
                        }
                    </div>
                </div>
                <div onClick={this.startQuiz} className="overlay"></div>
            </div>
        </div>
    );
    }
}

export default Quiz;
