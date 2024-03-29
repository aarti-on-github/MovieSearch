import React, { useEffect, useState } from "react";

  export const API_URL=`http://www.omdbapi.com/?apikey=f7a0af6`;

const AppContext= React.createContext();
const AppProvider=({children})=>{

    const[isLoading,setIsLoading]=useState(true)
    const[movie,setMovie]=useState([]);
    const[isError,setIsError]=useState({show:'false', msg:''});
    const[query,setQuery]=useState("titanic");


    const getMovies=async(url)=>{
          setIsLoading(true);
          try{
                const res= await fetch(url);
                const data= await res.json();
                console.log(data);
                if(data.Response==="True"){
                    setIsLoading(false);
                    setIsError({  
                      show:false,
                      msg:""
                    });
                    setMovie(data.Search);
                }
                else{
                  setIsError({  
                    show:true,
                    msg:data.Error
                  });
                }
          }
          catch(error){      
            console.log(error);
          }
    }

    useEffect(()=>{
    let timedebounce=setTimeout(()=>{ getMovies(`${API_URL}&s=${query}`)
    },500);
    return ()=>clearTimeout(timedebounce);
    },[query]);
    

    return<AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}
export {AppContext,AppProvider};