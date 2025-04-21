

import { sleep } from "../../";
import { environment } from "../../../../environments/environment";
import { GitHubIssue } from "../interfaces/github-issue.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;



export const  getIssuesByNumber = async (issueNumber : string) : Promise<GitHubIssue> => {

  await sleep(1500);

  try {

    const response = await fetch(`${BASE_URL}/issues/${issueNumber}`,{
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        }
    });

    if (!response.ok) throw "Can't load issues";

    const issue:GitHubIssue = await response.json();

    return issue;

  }

  catch (error) {
    console.error('Error fetching labels:', error);
    throw "Can't load issues";
    //throw error; // Rethrow the error for further handling if needed
  }

}

