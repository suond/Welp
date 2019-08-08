export const fetchReview = (id) =>{
    
    return $.ajax({
        method: "GET",
        url: `/api/reviews/${id}`
    })
}

// export const searchRestaurant = (q) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/search?q=${q}`
//     })
// }

export const createReview = (review) =>{
    
    return $.ajax({
        method: "POST",
        url: '/api/reviews',
        data:  {review} 
    })
}

export const updateReview = (review, id) =>{
    return $.ajax({
        method: "PATCH",
        url: `/api/reviews/${id}`,
        data: review
    })
}

export const deleteReview = id => {
    return $.ajax({
        method: "delete",
        url: `api/reviews/${id}`
    })
}
