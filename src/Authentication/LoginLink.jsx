import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../Redux/Action/ActionUser';

function LoginLink(props) {
  const dispatch = useDispatch();

  const onRedirect = () => {
    dispatch(userLogout());
    localStorage.removeItem('curUser');
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <a className="nav-link" href="/login">
        ( Logout )
      </a>
    </li>
  );
}

export default LoginLink;
