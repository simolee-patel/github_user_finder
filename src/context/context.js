import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import { auth, provider } from './firebase';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [learn, setLearn] = useState('');
    const [request, setRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();

    const [error, setError] = useState({ show: false, msg: "" });



    const signIn = () => {
        // const isuser = auth.signInWithPopup(provider)
        //     .catch((error) => alert(error.message));
        setLearn("heloooo");
        console.log(learn);

    };
    const searchGithubUser = async (user) => {
        toggleError();
        setIsLoading(true);
        const responce = await axios(`${rootUrl}/users/${user}`)
            .catch(err => { console.log(err) })
        if (responce) {
            setGithubUser(responce.data);
            const { login, followers_url } = responce.data;
            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
                .then(responce => setRepos(responce.data));

            axios(`${followers_url}?per_page=100`)
                .then(responce => setFollowers(responce.followers));
        }
        else {
            toggleError(true, 'there is no user with this username');

        }
        checkRequest();
        setIsLoading(false);
    }

    const checkRequest = () => {

        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let {
                    rate: { remaining },
                } = data;
                setRequest(remaining);
                if (remaining === 0) {
                    toggleError(true, 'sorry you exised your hourly rate limit')
                }
            }).catch((err) => console.log(err));

    }
    function toggleError(show, msg) {
        setError({ show, msg })
    }
    useEffect(checkRequest, []);
    return <GithubContext.Provider value={{ githubUser, learn, repos, followers, request, error, searchGithubUser, user, isLoading, signIn }}>{children}</GithubContext.Provider>
}

export { GithubProvider, GithubContext }