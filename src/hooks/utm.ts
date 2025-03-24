import { useEffect } from "react";

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_adgroup?: string;
  utm_adcopy?: string;
  [key: string]: string | undefined;
}

export const useUTMTracking = () => {
  useEffect(() => {
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams: UTMParams = {};

    // Check and store specific UTM parameters
    const utmKeys = ["utm_source", "utm_medium", "utm_adgroup", "utm_adcopy"];
    utmKeys.forEach((key) => {
      const value = urlParams.get(key);
      if (value) {
        utmParams[key] = value;
      }
    });

    // If any UTM parameters are present, store them in localStorage
    if (Object.keys(utmParams).length > 0) {
      localStorage.setItem("utm_parameters", JSON.stringify(utmParams));
    }
  }, []); // Run only once when component mounts

  // Function to retrieve stored UTM parameters
  const getStoredUTMParams = (): UTMParams | null => {
    const storedParams = localStorage.getItem("utm_parameters");
    return storedParams ? JSON.parse(storedParams) : null;
  };

  return { getStoredUTMParams };
};
