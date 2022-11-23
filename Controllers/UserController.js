import user from "../Schema/UserSchema";

export const addUser =(req, res)=>{
    const Input = req.body
    const NewUser = new user(Input)
    try {
        NewUser.save()
        res.status(200).json(NewUser)
    } catch (error) {
        console.log('error in adding in backend');
    }
}