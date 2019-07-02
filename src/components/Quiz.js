
//# sourceMappingURL=main.js.map   

import React, {Component} from 'react';


class Quiz extends Component {
    constructor(props) {
    super(props);
    this.state = {
        completed: false,
        questionCount: 0,
        isOpen: false,
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
            isOpen: !this.state.isOpen,
            answers:{},
            questionCount: 0,
            completed: false
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
        let questionTotal = Object.keys(this.props.questions).length ;
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
        let questionTotal = Object.keys(this.props.questions).length ;
        if((this.state.questionCount <= (questionTotal - 1)) && (this.state.questionCount > 0)){
            this.setState({
                questionCount: this.state.questionCount - 1
            })
        }
    }

    render() {
    let { 
        completed,
        answers, 
        isOpen,
        questionCount,
        } = this.state;
    
    let {
        questions,
        options,
        title,
        description,
        single,
        bannerImage
    } = this.props

    let total = Object.keys(questions).length;

    
    let dummyData = {
        0: {
        'title': "ULD",
        'url' : "https://www.uniqlo.com/us/en/women-reversible-parka-410091.html",
        'price' : "$9.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/409111/item/goods_69_409111.jpg'
        },
        1: {
        'title': "ULD",
        'url' : "https://www.uniqlo.com/us/en/women-reversible-parka-410091.html",
        'price' : "$9.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/409111/item/goods_69_409111.jpg'
        },
        2: {
        'title': "ULD",
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
        </div>
        )
    })
    if(window.location.href.includes('uniqlo.com')){
        return null
    }


    let imageCheck = (/\.(gif|jpg|jpeg|tiff|png)$/i);

    console.log('answer',this.state.answers)
    let quizBuild = Object.keys(questions).map((question, i ) =>{
        let quizOptions = Object.keys(options[i]).map((option, j)=>{
            let opt = options[i][option];
            if(opt['type'] === 'text'){
                return (
                    <button 
                        id={"opt-" + j} 
                        className={"option " + (answers[i] === option ? "active" : "" ) }key={j} 
                        onClick={() => this.onChangeHandler(option, i)} >
                        {opt['src']}
                    </button>
                )
            }else
            if(opt['type'] === 'color'){
                console.log(opt['src'])
                return(
                    <button 
                    id={"opt-" + j} 
                    style={{backgroundColor: opt['src']}}
                    className={"option color-btn " + (answers[i] === option ? "active" : "" ) }key={j} 
                    onClick={() => this.onChangeHandler(option, i)} >
                </button>
                )
            }else
            if(opt['type'] === 'image'){
                return(
                    <button 
                    id={"opt-" + j} 
                    style={{bacgroundColor: option}}
                    className={"option img-btn" + (answers[i] === option ? "active" : "" ) }key={j} 
                    onClick={() => this.onChangeHandler(option, i)} >
                      <img className='optionImage' src={opt['src']} alt={option + " Image"} />
                </button>
                )
            }else{
                return null
            }
            
        })
        return(
            <div id={'q-' + i } className="question-card"key={i}>
            <h2 className="question">{questions[question]}</h2>
            <div className="optionsContainer">{quizOptions}</div>
        </div>
        )
    })
    if(completed){
        return(
            <div className="productModal-">
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
                <br/>
                <br/>
                <button>Share this quiz!</button>
                <br/>
                <button onClick={this.restart}>Start Over</button>
            </div>
        )
    }
    return (
        <div className="quiz">
            {single ?
            <div style={{textAlign:'center'}}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="bannerImage" >
                    <img src={bannerImage} alt={title + " Image"}/>
                </div>
            </div>
            :
             null
            }
            <button onClick={this.startQuiz}>Start</button>
            <div className={"quizContainer " + (isOpen ? "" : "hide")}>
                <div  className="quizModal">
                    <span className="progress-bar" style={{width:(questionCount/(total-1))*100 + '%'}}></span>
                    {quizBuild[questionCount]}
                    <div className="button-container">
                        {questionCount > 0 ?
                            <button className="prev-btn" onClick={this.prevQuestion}>Previous</button>
                        :   null
                        }
                            <button className="next-btn" onClick={this.nextQuestion} disabled={answers[questionCount] == null ? true : false}>Next</button>
                    </div>
                </div>
                <div onClick={this.startQuiz} className="overlay"></div>
            </div>
        </div>
    );
    }
}

export default Quiz;
