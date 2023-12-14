import { useState } from "react"



export default function SignUpForm ({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    
    
    async function handleSubmit(e) {
        
        e.preventDefault()
        console.log(username)
        console.log(password)
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: 'POST',
                headers: { 
                'Content-Type':'application/json'
                },
                body: JSON.stringify({username, password})
            })
                const json = await response.json()
                console.log(json)
                
                setToken(json.token)
        } catch (error) {
            setError(error.message)
        }
        
        
    }
 
    return (
    <div>
        <h2>Sign Up</h2>
       
        <form method='post' onSubmit={handleSubmit} >
            <label >Username:<input value={username} type="text" placeholder='username' onChange={(e) => {setUsername(e.target.value)}} />
            </label> <br />
            <label >Password:<input  value={password} type="password" placeholder='password' onChange={(e) => {setPassword(e.target.value)}} />
            </label> <br />
            <button type="submit">Submit</button>
        </form>
        
    </div>
    )
  
}