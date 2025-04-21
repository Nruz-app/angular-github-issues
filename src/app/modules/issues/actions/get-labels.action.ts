import { sleep } from "../..";
import { environment } from "../../../../environments/environment";
import { GitHubLabel } from "../interfaces/github-label.interface";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;



export const  getLabels = async () : Promise<GitHubLabel[]> => {

  await sleep(1500);

  try {

    const response = await fetch(`${BASE_URL}/labels`,{
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        }
    });

    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);


    const labels:GitHubLabel[] = await response.json();

    return labels;

  }

  catch (error) {
    console.error('Error fetching labels:', error);
    throw error; // Rethrow the error for further handling if needed
  }

}

