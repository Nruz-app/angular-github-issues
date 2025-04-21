import { sleep } from "../../";
import { environment } from "../../../../environments/environment";
import { GitHubIssue } from "../interfaces/github-issue.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async (issueNumber: string): Promise<GitHubIssue[]> => {

  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();
    console.log({ issues });

    return issues;
  }
  catch (error) {

    throw "Can't load issues";
  }

};
