import React, {useEffect, useState} from 'react'
import Loading from "./Loader/loading"

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading,setLoading] =useState(true);

    const getUsers = async () => {
        try{
            const data = await fetch('https://reqres.in/api/users?page=1');
            const realData = await data.json();
            setUsers(realData.data);
            setLoading(false);;
         
    }catch(err){
        console.log(err);
    }
    if (loading){
        return <Loading />;
    }
}
    return (
        <div >
            <ul className="navbar-nav me-auto mb-2 mb-lg-4">
                <li className="nav-item text-center mt-5">
                   <button className="btn btn-success btn-lg " id="btn" onClick={getUsers}>Get Users</button>
                </li>
             </ul>
             <div className="container-fluid d-flex row">
          {
        users.map((curElem) => {
            return(
                <div className ="col-3 col-md-4 mt-5 ">
                     <div className="card p-2 ">
                         <div className="d-flex align-items-center">
                             <div className="image"><img src={curElem.avatar} className="rounded m-5"/></div>
                             <div className="ml-3 w-100">
                                 <h4 className="mb-0 mt-0 textLeft">{curElem.first_name} {curElem.last_name}</h4>
                                 <span className="textleft">{curElem.email}</span>
                             </div>
                         </div>
                      </div>
                    </div>
                 )
              })
            }
            </div>
            </div>
          )
      }
      
export default UseEffectAPI