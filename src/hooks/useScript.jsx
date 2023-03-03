import { useEffect } from 'react';

export const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };
  
  

  export const useStyle = url => {
    useEffect(() => {
      const script = document.createElement('link');
      script.id   = url.split('.').slice(-2,-1).join().split("/").pop();
      script.type = "text/css";
      script.rel = "stylesheet";
      script.href = "url";
      document.getElementsByTagName("head")[0].appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };
    

