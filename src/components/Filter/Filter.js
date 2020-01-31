import React from 'react'
import './Filter.css'

const Filter = () => (
  <div className="filter-container">
    <div>
      <p className="filter-title">FILTER COURSES RESULTS</p>
    </div>
    <form>
      <div className="filter-type">
        <div className="filter-type-title">
          <p>Course type</p>
          <i class="fas fa-chevron-up"></i>
        </div>
        <input type="radio" name="course-type" /> Self paced <br />
        <input type="radio" name="course-type" /> Live <br />
      </div>
      <div className="filter-type">
        <div className="filter-type-title">
          <p>Delivery type </p>
          <i class="fas fa-chevron-up"></i>
        </div>
        <input type="radio" name="delivery-type" /> Any delivery type <br />
        <input type="radio" name="delivery-type" /> Computer-Based Training
        <br />
        <input type="radio" name="delivery-type" /> Correspondence
        <br />
        <input type="radio" name="delivery-type" /> Mailed Material
        <br />
        <a href="#">View more</a>
      </div>
      <div className="filter-type">
        <div className="filter-type-title">
          <p>Subject area</p>
          <i class="fas fa-chevron-up"></i>
        </div>
        <input type="radio" name="subject-area" /> Any subject area <br />
        <input type="radio" name="subject-area" /> HIV/AIDS
        <br />
        <input type="radio" name="subject-area" /> End-of-Life Care and
        Palliative Health Care
        <br />
        <input type="radio" name="subject-area" /> Domestic Violence <br />
        <a href="#">View more</a>
      </div>
    </form>
  </div>
)

export default Filter
