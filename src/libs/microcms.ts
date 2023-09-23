import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//microCMSで登録したイベント開催日情報を取得する
export const getEvnetDate = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: "eventdate", queries });
};
