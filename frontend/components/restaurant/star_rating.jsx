import React from 'react'

const StarRating = (props) => {
    let avgScore = props.averageScore;
    
    let size = props.size === 'lg' ? "star-lg" : "star-reg"
    let className;
    function determineStar(avgScore){
        if(avgScore === 5) {
            return `five-${props.size}`
        } else if(avgScore >= 4.5 && avgScore < 5){
            return `four_five-${props.size}`
         
        } else if(avgScore >= 4 && avgScore < 4.5){
            return `four-${props.size}`
         
        } else if(avgScore >= 3.5 && avgScore < 4){
            return `three_five-${props.size}`
         
        } else if(avgScore >= 3 && avgScore < 3.5){
            return `three-${props.size}`
         
        } else if(avgScore >= 2.5 && avgScore < 3){
            return `two_five-${props.size}`
         
        } else if(avgScore >= 2 && avgScore < 2.5){
            return `two-${props.size}`
         
        } else if(avgScore >= 1.5 && avgScore < 2){
            return `one_five-${props.size}`
         
        } else if(avgScore >= 1 && avgScore < 1.5){
            return `one-${props.size}`
        } 
        else {
            return `zero-${props.size}`
        }
    }

    function determineStarWithGivenValue(score){
        return determineStar(score)
    }

    let stars = determineStar(avgScore)
    className = `${size} star-rating ${stars}`
    return (
        <div className={className}></div>
    )
}


export default StarRating;