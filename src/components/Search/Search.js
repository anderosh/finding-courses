import React, { useEffect, useState } from 'react'
import { getFeaturedCourses, getCourses } from './SearchAPI'
import Filter from '../Filter/Filter'
import CourseCard from '../CourseCard/CourseCard'
import './Search.css'

const Search = () => {
  const [featured, setFeatured] = useState('')
  const [courses, setCourses] = useState('')
  const [term, setTerm] = useState('')
  const [items, setItems] = useState('')

  useEffect(() => {
    getFeaturedCourses(term).then(res => setFeatured(res.items))
    getCourses(term).then(res => setCourses(res.items))
    getCourses(term).then(res => setItems(res.totalItems))
  }, [])

  const handleText = event => {
    setTerm(event.target.value)
    console.log(courses)
  }

  const handelSubmit = event => {
    event.preventDefault()
    getCourses(term).then(res => setCourses(res.items))
    getCourses(term).then(res => setItems(res.totalItems))
  }
  return (
    <div className="main-container">
      <div className="banner-container">
        <div className="find-options">
          <span>Find CE for a </span>
          <a href="#">Florida</a>
          <a href="#">Medical Doctor</a>
        </div>
        <form onSubmit={handelSubmit}>
          <i class="fas fa-search"></i>
          <input
            className="search-bar"
            type="text"
            placeholder="Search courses and providers"
            onChange={handleText}
          ></input>
        </form>
        <div className="categories">
          <a className="active-cat" href="#">
            COURSES
          </a>
          <a href="#">PROVIDERS</a>
        </div>
      </div>

      <div className="results-container">
        <Filter />
        <div className="results">
          <div className="pages-header">
            <span>Page 1 of ... {Math.ceil(items / 10)} </span>
            <div>
              Sorted by: <a href="#">Relevance</a>
            </div>
          </div>
          <div>
            {featured.length > 0 &&
              featured.map(course => <CourseCard course={course} />)}
          </div>
          <div>
            {courses.length > 0 &&
              courses.map(course => <CourseCard course={course} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
