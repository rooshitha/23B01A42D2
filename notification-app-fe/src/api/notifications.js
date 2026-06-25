import logger from "../../logging-middleware/logger";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb29zaGk3NjY3QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM3NTYzNSwiaWF0IjoxNzgyMzc0NzM1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTA2MTc4NjctMzY0Ni00OGM1LThlMzUtOGNlOGMxZTkxNjJhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicm9vc2hpdGhhIiwic3ViIjoiNmExZmRhYTctMWIxOS00YTExLTg0YjYtYzQwMWY2NGUyYjg5In0sImVtYWlsIjoicm9vc2hpNzY2N0BnbWFpbC5jb20iLCJuYW1lIjoicm9vc2hpdGhhIiwicm9sbE5vIjoiMjNiMDFhNDJkMiIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6IjZhMWZkYWE3LTFiMTktNGExMS04NGI2LWM0MDFmNjRlMmI4OSIsImNsaWVudFNlY3JldCI6IlhLRmdLU0tKc2JYTVR5ZWcifQ.lDKjjJkMdUFBL3vT0d6wyPd01qiERAZ97D_CenuIpo";

export async function fetchNotifications() {

  logger.info("Fetching notifications started");

  try {

    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    logger.info("Notification API response received");

    if (!response.ok) {
      logger.error(`HTTP error: ${response.status}`);
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    logger.info("Notifications fetched successfully");

    return data;

  } catch (error) {

    logger.error(`Failed to fetch notifications: ${error.message}`);

    throw error;
  }
}