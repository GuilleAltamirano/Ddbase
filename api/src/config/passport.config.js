import { config } from "dotenv";
config()
import passport from "passport"
import { Strategy } from "passport-local"
import GitHubStrategy from 'passport-github2';
import { userServices } from "../daos/services/Users.services.js"
import { githubController, loginController, registerController } from "../controllers/sessions.controller.js"

export const passportConfig = () => {
    passport.use('register', new Strategy(
        {
            passReqToCallback: true,
            usernameField: 'emailAddress'
        },
        registerController
    ))

    passport.use('login', new Strategy(
        {   
            passReqToCallback: true,
            usernameField: 'emailAddress'
        },
        loginController
    ))

    passport.use('github', new GitHubStrategy(
        {
            clientID: process.env.CLIENT_ID_GITHUB,
            clientSecret: process.env.CLIENT_SECRET_GITHUB,
            callbackURL: 'http://localhost:7227/api/sessions/github',
            scope: ['user:email']
        }, 
        githubController
    ))

    passport.serializeUser((dataUser, done) => {
        done(null, dataUser)
    })
    passport.deserializeUser(async (dataUser, done) => {
        try {
            const user = await userServices.getUsers({emailAddress: dataUser.emailAddress})
            done(null, user)
        } catch (err) {done(err)}
    })
}