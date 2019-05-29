export const fetchRestaurants = () =>{
    return $.ajax({
        method: "GET",
        url: '/api/restaurants',
    })
}

export const fetchRestaurant = (id) =>{
    
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${id}`
    })
}

export const createRestaurant = (restaurant) =>{
    
    return $.ajax({
        method: "POST",
        url: '/api/restaurants',
        data:  restaurant,
        contentType: false,
        processData: false 
    })
}

export const updateRestaurant = (restaurant) =>{
    return $.ajax({
        method: "GET",
        url: `/api/restaurants/${restaurant.id}`,
        data: {restaurant}
    })
}

export const deleteRestaurant = id => {
    return $.ajax({
        method: "delete",
        url: `api/restaurants/${id}`
    })
}
