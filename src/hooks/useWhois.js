import { useState } from "react";
import { useWhoisContext } from "./useWhoisContext";

export const useWhois = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { setWhoisData } = useWhoisContext();

  const findWhois = async (domain) => {
    setIsLoading(true);

    let response = await fetch(
      `${import.meta.env.VITE_API}/api/whois/${domain}`
    );

    let json = await response.json();
    const key = Object.keys(json)[1];

    if (response.status != 200) {
      setError(json.error);
      setIsLoading(false);
    }
    if (response.status === 200) {
      setWhoisData(json[key]);
      setIsLoading(false);
    }
  };

  return { isLoading, findWhois, error };
};
