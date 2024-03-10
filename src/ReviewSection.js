// ReviewSection.js
import React from 'react';
import './css/ReviewSection.css';

// Similar to ProductExploreButton but for reviews
const ReviewExploreButton = ({ text, href }) => (
    <div className="review-explore-button-wrapper">
      <a href={href} target="_blank" rel="noopener noreferrer" className="review-explore-link">
        {text}
      </a>
    </div>
  );

// Adapt ProductCard component to ReviewCard for review items
const ReviewCard = ({ reviewText, reviewerName, reviewerImageUrl }) => (
    <div className="review-card">
      <img src="https://i.ibb.co/yyb44Wr/home-star-card-icon.png" alt="Quote Icon" className="quote-icon" />
      <div className="review-text-container">
        <p className="review-card-text">{reviewText}</p>
      </div>
      <div className="reviewer-details">
        <img src={reviewerImageUrl} alt={reviewerName} className="reviewer-image" />
        <span className="reviewer-name">{reviewerName}</span>
      </div>
    </div>
  );
  
  
  const reviewsData = [
    {
        reviewText: "Best app to generate image....n it's totally free...jus luv it....🤩🤩",
        reviewerName: "Pragnesh Parmar",
        reviewerImageUrl: "https://i.ibb.co/58pRyPM/Screenshot-2024-02-15-180813.png",
      },
    {
      reviewText: "Thank you for helping me get access to large language models. I appreciate it. You rock",
      reviewerName: "Marco Meyers",
      reviewerImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZgltD7V_Y9HlKBbauKAKz0w_1NvioprPQTXpVqZtnnq6tjE7",
    },
    {
      reviewText: "I have used the AI platform designed by you. Convenient and free to use. grateful",
      reviewerName: "hock sing",
      reviewerImageUrl: "https://i.ibb.co/zNSpsYc/images-1.jpg",
    },
    {
        reviewText: "This is wonderful app. I never thought it would be easy going into my life. Good and happy. I do not know how to use it yet. Learning.",
        reviewerName: "Krishna Gopal",
        reviewerImageUrl: "https://media.licdn.com/dms/image/D4D03AQFnbtLU_ZNwEA/profile-displayphoto-shrink_100_100/0/1703839081446?e=1713398400&v=beta&t=ArFPckkzOftsooJpooAGRJtyTLTeVd9exavSqOzirDY",
      },
      {
        reviewText: "If this goes on like this in the future, it has a chance to become one of the best apps you can download if you want an answer to your questions.",
        reviewerName: "Diogo",
        reviewerImageUrl: "https://i.ibb.co/5Lk7CVs/images-2.jpg",
      },
      {
        reviewText: "After 15 minutes I can say this looks very cool. Simple and effective. 5 stars and recommendation from me.",
        reviewerName: "An Pol",
        reviewerImageUrl: "https://i.ibb.co/N2KPfpM/Screenshot-2024-02-15-181841.png",
      },
      {
        reviewText: "App is easy to use..and we can get a proper reply through gpt..It's very helpful, great thanks a lot to the developers",
        reviewerName: "Hanee Ko",
        reviewerImageUrl: "https://framerusercontent.com/images/1qOlVnV2OGWz5QUAwfV5EkSHxNc.jpg?scale-down-to=512",
      },
      {
        reviewText: "It's free!, easy to use, no annoying ads, high resolution image outputs, all in one, highly recommended",
        reviewerName: "Vivek Mishra",
        reviewerImageUrl: "https://photo.isu.pub/vgrowsoft/photo_large.jpg",
      },
      {
        reviewText: "Seems to be a good one. I will try it out more and give a better review!",
        reviewerName: "Björn Backe",
        reviewerImageUrl: "https://i.ibb.co/MG362y3/1613061059457-e-1713398400-v-beta-t-DA76i-l-OUYN0r-P1c6-Yc7-OQLpa-Sd1-Fugh-W7-I6o-Mdpw-AU.jpg",
      },
      {
        reviewText: "I like this app. It gives well thought out answers. Overall, it is a good app. Gives quick and logical answers.",
        reviewerName: "Zola Mazibuko",
        reviewerImageUrl: "https://i.ibb.co/1zR84XN/Ygb-Wwq-KE-400x400.jpg",
      },
      {
        reviewText: "I like this app it's just like an answer key! It's easy try 3-5 it will type really fast just type things like '1000 word essay about the ozone layer' boom! Magic!",
        reviewerName: "Joe Myers",
        reviewerImageUrl: "https://i.ibb.co/d0LndjZ/cat-looking-towards-right-2077372.jpg",
      },
  ];
  

  const duplicatedReviews = Array(10).fill(reviewsData).flat();


const ReviewSection = () => (
  <section className="review-section">
    <div className="section-top-border"></div>
    <div className="review-header-container">
      <h2 className="review-heading">Reviews</h2>
      {/* Adjust descriptions and button text for reviews */}
      <div className="review-description-wrapper">
      <p className="review-description">
          Authentic reviews from Project Hit users around the world, receiving highly favorable reviews!
        </p>
        <p className="review-description second-line">
        </p>
      </div>
      <ReviewExploreButton 
      text="Read all reviews"
      href="https://play.google.com/store/apps/developer?id=Project+Hit"
    />
      <div className="review-cards-wrapper">
      <div className="review-cards-container">
        {duplicatedReviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewText={review.reviewText}
            reviewerName={review.reviewerName}
            reviewerImageUrl={review.reviewerImageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  </section>
);

export default ReviewSection;
