import axios from 'axios'

/* eslint-disable no-undef */
const username = process.env.REACT_APP_GITHUB_USERNAME
const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN
const repo = process.env.REACT_APP_GITHUB_REPO
/* eslint-enable no-undef */

const client = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    auth: {
        username,
        password: accessToken,
    },
})

export const fetchUser = async () => {
    try {
        const res = await client.get('/user')
        return res.data
    } catch (e) {
        console.error(e)
    }
}

export const fetchIssueList = async () => {
    try {
        const res = await client.get(`/repos/${username}/${repo}/issues`)
        return (
            res.data
        )
    } catch (e) {
        console.error(e)
    }
}

export const createIssue = async ({ owner, data }) => {
    const res = await client.post(`/repos/${owner}/${repo}/issues`, data)
    return res.data
}

export const updateIssue = async ({ owner, issueNumber, data }) => {
    const res = await client.post(
        `/repos/${owner}/${repo}/issues/${issueNumber}`,
        data
    )
    return res.data
}
