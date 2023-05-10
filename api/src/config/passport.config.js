import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt";
import { cookieController, jwtController } from "../controllers/sessions.controller.js";

const JWT_SECRET = process.env.JWT_SECRET
const options = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieController]),
    secretOrKey: JWT_SECRET
}

export const passportConfig = async () => {
    passport.use('jwt', new Strategy(options, jwtController))
}

    // import GitHubStrategy from 'passport-github2';
    // import { githubController, loginController, registerController } from "../controllers/sessions.controller.js"
    // passport.use('github', new GitHubStrategy(
        //     {
            //         clientID: process.env.CLIENT_ID_GITHUB,
            //         clientSecret: process.env.CLIENT_SECRET_GITHUB,
            //         callbackURL: 'http://localhost:7227/api/sessions/github',
            //         scope: ['user:email']
            //     }, 
            //     githubController
            // ))