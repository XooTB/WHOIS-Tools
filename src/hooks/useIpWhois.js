import { useIpContext } from "./useIpContext";
import { useState } from "react";

export const useIpWhois = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { setIpData } = useIpContext();

  const findIpWhois = async (ip) => {
    setIsLoading(true);

    let response = await fetch(`${import.meta.env.VITE_API}/api/whois/${ip}`);

    const data = await response.json();

    if (response.status != 200) {
      setError(json.error);
      setIsLoading(false);
    }

    if (response.status === 200) {
      setIpData(data);
      setIsLoading(false);
    }
  };
  return { isLoading, error, findIpWhois };
};
