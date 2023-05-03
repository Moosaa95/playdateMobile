// import { useState, useEffect } from "react";
// import axios from "axios";


// const useFetch = (endpoint, query, method) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const options = {
//         method: method,
//         url: `http://localhost:8000/api/${endpoint}`,
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         data: {...query}
//     };


//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios(options);
//             setData(response.data);
//         }
//         catch (error) {
//             setError(error);
//         }
//         finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }
//     , []);

//     const refresh = () => {
//         setLoading(true);
//         fetchData();
//     }
//     return { data, loading, error, refresh };

// }

// export default useFetch;

// // const useFetch = (url) => {
//     // const [data, setData] = useState([]);
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);
    
// //     useEffect(() => {
// //         const fetchData = async () => {
// //         try {
// //             const response = await axios.get(url);
// //             setData(response.data);
// //         } catch (error) {
// //             setError(error);
// //         } finally {
// //             setLoading(false);
// //         }
// //         };
// //         fetchData();
// //     }, [url]);
    
// //     return { data, loading, error };
// //     }


// // const useFetch = (url, options = {}) => {
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
  
// //     useEffect(() => {
// //       const fetchData = async () => {
// //         try {
// //           const response = await axios(url, options);
// //           setData(response.data);
// //         } catch (error) {
// //           setError(error);
// //         } finally {
// //           setLoading(false);
// //         }
// //       };
// //       fetchData();
// //     }, [url, options]);
  
// //     return { data, loading, error };
// //   };
  
// //   // Request for user login
// //   const useLogin = () => {
// //     const login = async (email, password) => {
// //       const options = {
// //         method: "POST",
// //         data: {
// //           email,
// //           password,
// //         },
// //       };
// //       return useFetch("http://example.com/api/login", options);
// //     };
// //     return { login };
// //   };
  
// //   // Request for user signup
// //   const useSignup = () => {
// //     const signup = async (name, email, password) => {
// //       const options = {
// //         method: "POST",
// //         data: {
// //           name,
// //           email,
// //           password,
// //         },
// //       };
// //       return useFetch("http://example.com/api/signup", options);
// //     };
// //     return { signup };
// //   };
  
// //   // Request for items list
// //   const useItems = () => {
// //     const items = async () => {
// //       return useFetch("http://example.com/api/items");
// //     };
// //     return { items };
// //   };
  
// //   // Request for playdate list
// //   const usePlaydates = () => {
// //     const playdates = async () => {
// //       return useFetch("http://example.com/api/playdates");
// //     };
// //     return { playdates };
// //   };
// // //   You can use these custom hooks in your React components to fetch data from the API. For example, to fetch the items list, you can use the useItems hook as follows:
  
// // //   javascript
// // //   Copy code
// //   import { useItems } from "./useFetch";
  
// //   function ItemsList() {
// //     const { data, loading, error } = useItems();
  
// //     if (loading) {
// //       return <p>Loading...</p>;
// //     }
  
// //     if (error) {
// //       return <p>Error: {error.message}</p>;
// //     }
  
// //     return (
// //       <ul>
// //         {data.map((item) => (
// //           <li key={item.id}>{item.name}</li>
// //         ))}
// //       </ul>
// //     );
// //   }
  
  
  
  
  

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetch = async (endpoint, query = {}, method = "GET") => {
//     setLoading(true);
//     setError(null);

//     try {
//     const options = {
//       method,
//       // url: `http://127.0.0.1:8000/api/${endpoint}/`,
//       url: `https://9c3d-105-112-122-102.ngrok-free.app/api/${endpoint}`,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       data: method === "GET" ? null : query,
//       // params: method === "GET" ? { ...query } : null,
//     };
//     console.log(options, "options");

    
//       const response = await axios(options);
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error, 'catch error');
//       setLoading(false);
//       setError(error);
//     } finally {
//       setLoading(false);
//       // what is finally doing? - 
//     }
//   };

//   return { data, loading, error, fetch };
// };

// export default useFetch;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoint, query, method) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: method,
//     url: `https://9c3d-105-112-122-102.ngrok-free.app/api/${endpoint}`,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     params: { ...query },
//   };

//   const fetchData = async () => {
//     setIsloading(true);
//     try {
//       const response = await axios(options);
//       setData(response.data);
//       setIsLoading(false);

//     }catch (error) {
//       setError(error);
//       setIsLoading(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };

//   }

// export default useFetch;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetch = async (endpoint, data = {}, method = "GET") => {
//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       for (let key in data) {
//         formData.append(key, data[key]);
//       }

//       const options = {
//         method,
//         url: `https://c3a0-105-112-126-217.ngrok-free.app/api/${endpoint}`,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Accept: "application/json",
//         },
//         data: method === "GET" ? null : formData,
//       };

//       const response = await axios(options);
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error, 'catch error');
//       setLoading(false);
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { data, loading, error, fetch };
// };

// export default useFetch;

import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const fetch = (endpoint, data = {}, method = "GET") => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }

      const options = {
        method,
        url: `https://3725-105-112-121-15.ngrok-free.app/api/${endpoint}`,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        data: method === "GET" ? null : formData,
      };

      axios(options)
        .then(response => {
          setLoading(false);
          resolve(response.data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  };

  return { loading, fetch };
};

export default useFetch;
