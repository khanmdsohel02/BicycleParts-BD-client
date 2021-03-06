import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        const email = user?.user?.email;
        const client = user?.user?.displayName
        console.log(user)
        const currentUser = { email, client}
        if(email){
            fetch(`https://ancient-beyond-42134.herokuapp.com/user/${email}`,{
                method: 'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log('usetoken', data)
                const token = data.token;
                localStorage.setItem('accessToken', token);
                setToken(token)
            })
        }
    }, [user])
    return [token];
}

export default useToken;