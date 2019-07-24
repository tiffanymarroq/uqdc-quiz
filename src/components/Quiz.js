
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

    linkBuilder = (e)=>{
        e.preventDefault()
        console.log(this.state.answers)
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
        'title': "Jeans",
        'url' : "https://www.uniqlo.com/us/en/women-high-rise-ultra-stretch-ankle-jeans-416513.html?dwvar_416513_color=COL69&cgid=",
        'price' : "$39.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/416513/item/goods_69_416513.jpg?width=380'
        },
        1: {
        'title': "Jeans",
        'url' : "https://www.uniqlo.com/us/en/women-high-rise-ultra-stretch-ankle-jeans-416513.html?dwvar_416513_color=COL69&cgid=",
        'price' : "$39.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/416513/item/goods_69_416513.jpg?width=380'
        },
        2: {
        'title': "Jeans",
        'url' : "https://www.uniqlo.com/us/en/women-high-rise-ultra-stretch-ankle-jeans-416513.html?dwvar_416513_color=COL69&cgid=",
        'price' : "$39.90",
        'productImage' : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/416513/item/goods_69_416513.jpg?width=380'
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
                        className={"option img-btn " + (answers[i] === option ? "active" : "" ) }key={j} 
                    onClick={() => this.onChangeHandler(option, i)} >
                      <img className='optionImage' src={opt['src']} alt={option + " Image"} />
                      {opt['text'] ? <div className="img-text"><p>{opt['text']}</p></div> : null}
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
            <div>
                <div className="product-result">
                    <div>
                        <h2 style={{textAlign:'center'}}>Your best match is: <strong>Skinny Fit</strong></h2>
                        <p style={{textAlign: 'center'}}> 
                        Densley-woven fabric with roughly twice the stretch of normal denim for a flattering fit that hugs your curves.</p>
                        {/* <button style={{margin: '0 auto 20px'}} >
                            <a href="https://www.uniqlo.com/us/en/women/jeans/skinny-fit-jeans/gray/27inch?ptid=women-jeans-skinny-fit-jeans">
                                Shop Now!
                            </a>
                        </button> */}
                        <button style={{margin: '0 auto 20px'}} onClick={this.restart}>Start Over</button>
                    </div>
                
                    <div >
                        <img style={{width: "100%", maxWidth: '400px', margin: '0 auto'}} src="https://image.uniqlo.com//UQ/ST3/us/imagesother/quiz/quiz19-jeans-regularfit.jpg" alt=""/>
                    </div>
                
                </div>
                <div className="productContainer"  style={{marginTop:'60px'}}>
                    {products}
                </div>
            </div>

        )
    }
    return (
        <div className="quiz">
      
            <div style={{textAlign:'center'}}>
                <div className="bannerImage" >
                    <div className="bannerText">
                        <div className="bannerText-inner">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <button onClick={this.startQuiz}>Start</button>

                        </div>
                    </div>
                    <img src={bannerImage} alt={title + " Image"}/>
                </div>
            </div>
         
            <div className={"quizContainer " + (isOpen ? "" : "hide")}>
                <div className="quizModal">
                    <span className="progress-bar" style={{width:(questionCount/(total-1))*100 + '%'}}></span>
                    {quizBuild[questionCount]}
                    <div className="button-container">
                        {questionCount > 0 ?
                            <button className="prev-btn" onClick={this.prevQuestion}>Prev</button>
                        :   null
                        }
                            <button className="next-btn" style={{marginLeft: 'auto'}} onClick={this.nextQuestion} disabled={answers[questionCount] == null ? true : false}>Next</button>
                    </div>
                </div>
                <div onClick={this.startQuiz} className="overlay"></div>
            </div>
        </div>
    );
    }
}

export default Quiz;
