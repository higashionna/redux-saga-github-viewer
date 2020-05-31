import axios from 'axios'

/* eslint-disable no-undef */
const username = process.env.REACT_APP_GITHUB_USERNAME;
const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;
/* eslint-enable no-undef */

const client = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    auth: {
        username,
        password: accessToken,
    },
});

export const fetchIssueList = async () => {
    try {
        const res = await client.get(`/repos/${username}/${repo}/issues`)
        return (
            res.data
        )

    } catch (e) {
        console.error(e);
    }
};