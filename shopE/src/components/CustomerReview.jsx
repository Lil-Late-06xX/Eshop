/* eslint-disable react/prop-types */


function CustomerReview({ name, rating, comment }) {
  return (
    <div className="customer-review">
      <div className="customer-info">
        <h3>{name}</h3>
        <p>Rating: {rating}/5</p>
      </div>
      <p className="customer-comment">{comment}</p>
    </div>
  );
}

export default CustomerReview;
