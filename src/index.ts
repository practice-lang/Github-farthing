//http://www.omdbapi.com/?t=endgame&apikey=f7f1e883
import {GithubApiService} from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from 'lodash';

  let svc = new GithubApiService();
  if (process.argv.length < 3){
     console.log("유저 입력!")
    }else{
        let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
       svc.getRepos(username, (repos: Repo[]) => {
          let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount]);
          let filterRepos = _.take(sortedRepos, 5);
          user.repos = filterRepos;
          console.log(user);
       }); 
    });
}