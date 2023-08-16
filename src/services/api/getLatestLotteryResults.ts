import instance from "./instance";

export interface getLatestLotteryResultsParams {
  name: string;
}

async function getLatestLotteryResults({
  name,
}: getLatestLotteryResultsParams) {
  try {
    const response = await instance.get(`/${name}/latest`);
    return { error: false, data: response.data };
  } catch (error) {
    console.error(error);
    return { error: true, data: {} };
  }
}

export default getLatestLotteryResults;
