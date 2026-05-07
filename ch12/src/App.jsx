import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import Modal from 'react-modal';
Modal.setAppElement("#root");



function EditModal(isOpen, onClose) {
  return <modal isOpen={isOpen} onRequestClose={onClose}>

      <div>
        <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
        <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
        <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
    </div>

  </modal>
  
}

function App() {
  const initUser = {
    id: "",
    username: "",
    email: "",
  }
  const [inputValues, setInputValues] = useState(initUser);
  const [users, setUsers] = useState([]);
  const currentId = useRef(0);
  const [isValid, setValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

  const REGEX = {
    username: /^[a-z]+[a-z0-9_-]{4,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  }

  useEffect(() => {
    const entries = Object.entries(inputValues);
    const validList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if (!regex) return true;
      return regex.test(value);
    });

    // return 대신 setValid로 상태 업데이트
    setValid(validList.length === entries.length);

  }, [inputValues]);

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }
  const handleEditOnClick = (e) => {
    setModalOpen(true);
  }

  const handleModalOnClose = () => {
    setModalOpen(false);
  }
  const handleRegisterOnClick = () => {
    currentId.current += 1;

    const newUser = {
      ...inputValues,
      id: currentId.current,
    }

    setUsers([...users, newUser]);
    setInputValues(initUser)
  }

  const handleDeleteOnClick = (e) => {
    const userID = parseInt(e.target.value);
    setUsers(users.filter(user => user.id !== userID))

  }

  const thAndTdStyle = (width = "70px") => ({
    padding: "0px 10px",
    width,
    height: "30px",
    border: "1px solid #dbdbdb",
    textAlign: "center",
  })

  return (
    <div>
      <div>
        <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
        <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
        <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
      </div>
      <table style={{ boxSizing: 'border-box', border: '1px solid #dbdbdb', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thAndTdStyle()}>ID</th>
            <th style={thAndTdStyle("140px")}>USERNAME</th>
            <th style={thAndTdStyle("240px")}>E-MAIL</th>
            <th style={thAndTdStyle()}></th>
            <th style={thAndTdStyle()}></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={thAndTdStyle()}>{user.id}</td>
              <td style={thAndTdStyle("140px")}>{user.username}</td>
              <td style={thAndTdStyle("240px")}>{user.email}</td>
              <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleEditOnClick}>수정</button>}</td>
              <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleDeleteOnClick}>삭제</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && <EditModal isOpen={modalOpen} onClose={handleModalOnClose} />}
    </div>
  )
}

export default App