import { cronJobConfig } from "./cronJobFunction.js"
import 'dotenv/config'
export const handler = async (event) => {
  const cronjobName = event.detail.cronjobName;
  const timeStamp = event.detail.timeStamp;
  const apiUrl = `${process.env.apiUrl}${cronjobName}`;
  try {
    const cronJobFunction = cronJobConfig[cronjobName];
    if (cronJobFunction) {
      const response = await cronJobFunction(apiUrl);
      response.cronjobName = cronjobName;
      response.timeStamp = timeStamp;
      console.log(response);
      return response;
  } else {
      const error = {};
      error.message = 'Unknown cron job name';
      throw error;
  }
  } catch (error) {
    error.cronjobName = cronjobName;
    error.timeStamp = timeStamp;
    console.log(error);
    return error;
  }
};
// handler({detail:{cronjobName:1,timeStamp:new Date().toLocaleString('en-Us', {timeZone: 'America/Los_Angeles'})}})