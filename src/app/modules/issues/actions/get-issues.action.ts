import { sleep } from "../../";
import { environment } from "../../../../environments/environment";
import { GitHubIssue, State } from "../interfaces/github-issue.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<GitHubIssue[]> => {

  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {

    const response = await fetch(`${BASE_URL}/issues?${params}`,{
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        }
    });

    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);


    const labels:GitHubIssue[] = await response.json();

    return labels;

  }

  catch (error) {
    console.error('Error fetching labels:', error);
    throw error; // Rethrow the error for further handling if needed
  }

}

