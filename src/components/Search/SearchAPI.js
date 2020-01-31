import axios from 'axios'
const baseUrl =
  process.env.REACT_APP_API_URL ||
  'https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&'

// pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true
// pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME

export async function getFeaturedCourses(term) {
  try {
    const courses = await axios({
      method: 'get',
      url: `${baseUrl}pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true&term=${term}`
    })
    return courses.data
  } catch (error) {
    console.log(error)
  }
}
export async function getCourses(term) {
  try {
    const courses = await axios({
      method: 'get',
      url: `${baseUrl}pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME&term=${term}`
    })
    return courses.data
  } catch (error) {
    console.log(error)
  }
}
