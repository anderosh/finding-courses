import React from 'react'
import './CourseCard.css'

const baseUrl = 'https://test.storage.cebroker.com/cebroker/'

const CourseCard = results => (
  <div className="course-card">
    {results.course.course.featuredBanner ? (
      <img
        className="course-img"
        src={`${baseUrl}${results.course.course.featuredBanner}`}
      ></img>
    ) : null}

    <div className="course-info">
      <h4>{results.course.course.name}</h4>
      <p>{results.course.course.provider.name}</p>
      <div>
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

export default CourseCard
