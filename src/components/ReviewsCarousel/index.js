// Write your code here
import {Component} from 'react'

import './index.css'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component{

    state = {reviewIndex: 0}

    getReview=(reviewsList)=>{
        const {reviewIndex}=this.state
          const {imgUrl,username,companyName,description}= reviewsList[reviewIndex]


        return(<div className="review-container">
          <h1 className="title">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <p className="username">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>)
    }

  onChangePrevReview = () => {
    const {reviewIndex} = this.state
    const {reviewsList}=this.props
    if(reviewIndex>0){
        this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }; 

  onChangeNextReview = () => {
      const {reviewIndex} = this.state
    const {reviewsList}=this.props
    if(reviewIndex<(reviewsList.length-1)){
        this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1})
        )}
    };

render(){
    const {reviewsList} = this.props
    const {reviewIndex}=this.state
    return (
      <div className="app-container">
        <button type="button" data-testid="leftArrow" onClick={this.onChangePrevReview}>
          <img src={leftArrow} alt="left arrow" className="arrow-icon" />
        </button>
        {this.getReview(reviewsList)}
        <button type="button" data-testid="rightArrow" onClick={this.onChangeNextReview}>
          <img src={rightArrow} alt="right arrow" className="arrow-icon" />
        </button>
      </div>
    )
  }
  }

export default ReviewsCarousel 
