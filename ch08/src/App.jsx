import { useState } from 'react'

<<<<<<< HEAD

function App() {
  const userinit = {
    userName: "",
    email: "",
    password: "",
    phone: "",
  }

  const [member, setMember] = useState([])
  const [inputValues, setInputvalues] = useState(userinit)
  // { ...values, [e.target.name]: e.target.value }

  const handleOnChange = (e) => {
    const{name,value}= e.target;
    const newInputValues = {
      ...inputValues,
      [name]:value
    }

    setInputvalues(newInputValues)
  
  }

  const handleSignInOnClick = () =>{
    console.log(inputValues)
    setInputvalues(userinit)
  }

  const handleAddOnClick = () => {
    setMember([...member, { userName: inputValues.userName, email: inputValues.email, phone: inputValues.phone }])
  }

  return (
    <>

      <div>
        <label htmlFor="username">사용자 이름</label>
        <input type="text" name="userName" value={inputValues.userName} id="username" onChange={handleOnChange} />
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" value={inputValues.email} id="email" onChange={handleOnChange} />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="password" value={inputValues.password} id="password" onChange={handleOnChange} />
      </div>

      <div>
        <label htmlFor="phone">핸드폰 번호</label>
        <input type="text" name="phone" value={inputValues.phone} id="phone" onChange={handleOnChange} />
      </div>

      <div>
      <button onClick={handleSignInOnClick}>회원가입</button>
      </div>

    </>
  )
=======
function App() {
    const initUser = {
        username: "",
        email: "",
        password: "",
        phone: "",
    }

    const [inputValues, setInputValues] = useState(initUser);

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        const newInputValues = {
            ...inputValues,
            [name]: value,
        }

        setInputValues(newInputValues);
    }

    const handleSignUpOnClick = () => {
        console.log(inputValues);
        setInputValues(initUser);
    }

    return (
        <>
            <div>
                <label htmlFor="username">사용자이름</label>
                <input type="text" id='username' name='username' value={inputValues.username} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="email">이메일</label>
                <input type="text" id='email' name='email' value={inputValues.email} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="password">비밀번호</label>
                <input type="text" id='password' name='password' value={inputValues.password} onChange={handleInputOnChange} />
            </div>
            <div>
                <label htmlFor="phone">연락처</label>
                <input type="text" id='phone' name='phone' value={inputValues.phone} onChange={handleInputOnChange} />
            </div>
            <div>
                <button onClick={handleSignUpOnClick}>회원가입</button>
            </div>
        </>
    )
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
}

export default App
