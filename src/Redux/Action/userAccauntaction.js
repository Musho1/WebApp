export const UserAccauntData=(data,history)=>{
    history.push(`user/${data.uid}`)
    return {
        type:"UserAccauntData",
        data:data,
        // history:history,
    }
}