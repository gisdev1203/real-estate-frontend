function processRatingStars(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="fas fa-star" key={i}></i>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <i className="fas fa-star active" key={i}></i>;
        }
    }
    return stars;
}
export { processRatingStars };