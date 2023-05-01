import { useSelector } from "react-redux";

export function useAuth(){
    const email = useSelector((state) => state.user.email);
    const token= useSelector((state) => state.user.token);
    const id = useSelector((state) => state.user.id);
    const name = useSelector((state) => state.user.name);
    const surname = useSelector((state) => state.user.surname);

    return{
        isAuth: !!email,
        email, 
        token, 
        id, 
        name,
        surname
    }
}