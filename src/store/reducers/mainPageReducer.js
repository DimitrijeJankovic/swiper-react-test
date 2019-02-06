const initState = {
    mainSlider:[
        {
            id: '1', 
            name:"Ivana i Marko", 
            photographer: "Dragan Smiljkovic", 
            date:'',
            url: 'ivana-i-marko', 
            img: {
                backgroundImage: 'url("images/img1.jpg")'
            }
        },
        {
            id: '2', 
            name:"Maja i Pera", 
            photographer: "Dragan Smiljkovic", 
            date:'', 
            url: 'maja-i-pera',
            img: {
                backgroundImage: 'url("images/img2.jpg")'
            }
        },
        {
            id: '3', 
            name:"Kristina i Aca", 
            photographer: "Dragan Smiljkovic", 
            date:'', 
            url: 'kristina-i-aca',
            img: {
                backgroundImage: 'url("images/img3.jpg")'
            }
        },
        {
            id: '4', 
            name:"Sofija i Nikola",
            photographer: "Dragan Smiljkovic", 
            date:'', 
            url: 'sofija-i-nikola',
            img: {
                backgroundImage: 'url("images/img4.jpg")'
            }
        }
    ]
}

const mainPageReducer = (state = initState, action) => {
    return state
}

export default mainPageReducer