function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 // массив с отзывами
 var reviews = [
    {
        name: 'John Doe',
        review: 'Отличное качество и сервис!'
    },
    {
        name: 'Jane Smith',
        review: 'Всем рекомендую!'
    }
];

// функция для отображения отзывов
function showReviews() {
    var reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';

    reviews.forEach(function(review) {
        var reviewDiv = document.createElement('div');
        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.review}</p>
        `;

        reviewsDiv.appendChild(reviewDiv);
    });
}

