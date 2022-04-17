import {getDoc,doc} from "firebase/firestore";
import db from "./Database";
export async function getData(userID,options=""){
    try{
        const docRef = doc(db, "users", userID);
        const user = await getDoc(docRef);
        if(user.exists()){
            if(options==="username"){
                return user.get("username");
            }
            return{
            username:user.get("username"),
            };
        }
    }
    catch{
        return null;
    }
  };