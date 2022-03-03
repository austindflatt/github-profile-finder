import React, { useEffect, useState } from 'react'

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  return (
    <div>UserResults</div>
  )
}

export default UserResults