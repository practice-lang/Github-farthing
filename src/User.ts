import { Repo } from "./Repo";

export class User {
    login: string | undefined;
    fullName: string | undefined;
    repoCount: number | undefined;
    followerCount: number | undefined;
    followingCount: number | undefined; 
    bio: any | undefined;
    created_at: any | undefined;
    avatar_url: any | undefined;
    repos: Repo[] | undefined;

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this.followingCount = userResponse.following;
        this.bio = userResponse.bio;
        this.created_at = userResponse.created_at;
        this.avatar_url = userResponse.avatar_url;
        //this.login = userResponse.login;
    }
}