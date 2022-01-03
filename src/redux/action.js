import { ADD, DELETE,DONE } from "./types"

export const add=(payload,x)=>{
return{type:ADD,
 payload, x

}

}

export const Delete= (payload)=>{
    return {type:DELETE,
    payload
    }
}

//  export const done=()=>{

//     return{type:DONE,
//         payload
//  }
// }