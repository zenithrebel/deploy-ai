import { instanceApi } from "../lib/axios";

export const getAssistant = async () =>
  instanceApi.get("/assistant").then((res) => res.data);
