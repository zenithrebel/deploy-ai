import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deployScript, generateScript } from "../services/script";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { generateRandomUser } from "../lib/utils";

export const ScriptContext = createContext(null);

export const ScriptContextProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  const [script, setScript] = useState("");
  const [temp, setTemp] = useState({});
  const location = useLocation();
  const assistantId = location.pathname.slice(11);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) => generateScript(data),
    onError: (error) => {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    },
    onSuccess: (data) => {
      const newAssistantStrategy = {
        role: "assistant",
        content: data.explanation,
      };

      setMessage((prevMessage) => [...prevMessage, newAssistantStrategy]);
      setTemp(data);

      if (data?.generatedScript !== "N/A") setScript(data.generatedScript);
    },
  });

  // scripts

  const { isLoading: isLoadingDeploy, mutateAsync: mutateAsyncDeploy } =
    useMutation({
      mutationFn: (data) => deployScript(data),
      onError: (error) => {
        if (error instanceof AxiosError) toast.error(error.message);
        else toast.error("Something went wrong");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["deployed", "launched"] });
      },
    });

  const apiCall = async (strategyDescription) => {
    try {
      const newStrategy = { role: "user", content: strategyDescription };
      setMessage((prevMessage) => [...prevMessage, newStrategy]);
      return await mutateAsync({
        strategyDescription: strategyDescription,
        threadId: temp?.threadId ?? "",
        assistantId: assistantId,
      });
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };

  const deploy = async () => {
    try {
      if (script.length === 0) {
        return toast.error("Cannot deploy");
      }
      const author = generateRandomUser();
      await mutateAsyncDeploy({
        assistantId: assistantId,
        explanation: temp.explanation,
        title: temp.title,
        script: script,
        tags: temp.tags,
        author: author,
      });
      toast.success("Deploy succes");
      navigate("/strategy-feed");
      return;
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error.message);
      else toast.error("Something went wrong");
    }
  };

  const value = {
    apiCall,
    deploy,
    isLoading: isLoading || isLoadingDeploy,
    message,
    script,
  };

  return (
    <ScriptContext.Provider value={value}>{children}</ScriptContext.Provider>
  );
};
