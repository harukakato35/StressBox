import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useUser } from 'reactfire';

function Fire() {
    const user = useUser();
    return (
        <div className="App">
            {
                user &&
                <SignOut />
            }
            {
                !user &&
                <>
                    <SignUp />
                    <SignIn />
                </>
            }
        </div>
    );
}

export default Fire;