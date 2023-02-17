import { useClientIpContext } from "./useClientIpContext";
import { useState } from "react";

export const useClientIpInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { setClientIpData } = useClientIpContext();

  const getClientIpData = async () => {
    setIsLoading(true);

    const response = await fetch(`${import.meta.env.VITE_API}/api/myip/info`);

    const json = await response.json();

    if (response.status != 200) {
      setError(json.error);
      setIsLoading(false);
    }

    if (response.status === 200) {
      setClientIpData(json);
      setIsLoading(false);
    }
  };

  return { isLoading, error, getClientIpData };
};
