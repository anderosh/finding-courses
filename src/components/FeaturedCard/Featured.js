import React from 'react'
import './Featured.css'

const baseUrl = 'https://test.storage.cebroker.com/cebroker/'

const FeaturedCard = results => (
  <div className="course-card">
    <img
      className="course-img"
      src={`${baseUrl}${results.course.course.featuredBanner}`}
    ></img>

    <div className="course-info info-featured">
      <h4>{results.course.course.name}</h4>
      <span className="featured">FEATURED</span>
      <p>{results.course.course.provider.name}</p>
      <div className="time-type">
        <i class="far fa-clock"></i>
        {results.course.course.components[0].profession.totalHours} Hours
        <i class="fas fa-desktop"></i>
        {results.course.course.deliveryMethod.description}
      </div>
    </div>
    <div className="share-course">
      {results.course.price === '0.0' ? (
        <span className="course-price">Free</span>
      ) : (
        <span className="course-price">{results.course.price}</span>
      )}

      <a>
        <i class="fas fa-share"></i>
      </a>
    </div>
  </div>
)

export default FeaturedCard
