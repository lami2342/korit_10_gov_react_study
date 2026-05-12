import { useState } from 'react'
<<<<<<< HEAD
import UserListTable from './components/UserListTable'
=======
import UserListTable from './components/UserListTable';
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
import UserRegister from './components/UserRegister';

function App() {
    const [users, setUsers] = useState([]);

    return (
        <div>
            <UserRegister users={users} setUsers={setUsers} />
            <UserListTable users={users} setUsers={setUsers} />
        </div>
    )
}

export default App
<<<<<<< HEAD

=======
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
