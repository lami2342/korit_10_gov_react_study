import { Route, Routes } from "react-router";


function P1(){
const getPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("안녕하세요");
        }, 1000);
    })
    getPromise.then ((value)=>{
        
        console.log(value);
    }) 

    return(
       <>

       </>
    ) 
    
}



function App() {
    
    return(
        <>
        <Routes>
            <Route path="/p1" element={<P1 />}/>
        </Routes>
        </>
    )
}

export default App;