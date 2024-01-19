import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users">
      <div className="page-title">
        <h1>List of Users</h1>
        {users && users.length > 0 ? users.map((user) => (
          <div className="user" key={user.id}>
            Name:
            {' '}
            {user.name}
            <br />
            Username:
            {' '}
            {user.username}
            <br />
            Email:
            {' '}
            {user.email}
            <br />
            Address:
            {' '}
            {user.address.street}
            ,
            {' '}
            {user.address.suite}
            ,
            {' '}
            {user.address.city}
            ,
            {' '}
            {user.address.zipcode}
            {' '}
            <br />
            Geo Location:
            {' '}
            {user.address.geo.lat}
            ,
            {' '}
            {user.address.geo.lng}
            <br />
            Phone:
            {' '}
            {user.phone}
            <br />
            Website:
            {' '}
            {user.website}
            <br />
            {user.company.name}
            <br />
            <br />
          </div>
        )) : (
          <h2>Loading user data...</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
