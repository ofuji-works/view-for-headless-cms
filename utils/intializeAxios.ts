import  axios  from 'axios'

const cliant = axios.create(
    {
        baseURL: 'https://ofuji-blog.microcms.io/api/v1/',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.X_API_KEY
        },
        data: {},
        responseType: 'json',
        timeout: 30000,
    }
)

export default cliant
