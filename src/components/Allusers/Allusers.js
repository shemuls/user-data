import React, { useState } from 'react';
import userData from '../../fakeData/userData';
import User from '../User/User';
import AddedUsers from '../AddedUsers/AddedUsers';

const Allusers = () => {

    const allUsers = userData;
    const [users, setUsers] = useState(allUsers);
    const [ addUsers, setAddUsers] = useState([]);
    
    const handleAddUserBtn = (userAdd) => {
        const newAddedUser = [...addUsers, userAdd];
        setAddUsers(newAddedUser);
    }

    const totalSalary = addUsers.reduce( (total, usrSlry) => total + usrSlry.salary, 0);
    
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <section className="team-section text-center my-5">
                        <div className="row text-center">
                            {
                                users.map(usr => <User users={usr} handleAddUserBtn={handleAddUserBtn}></User>)
                            }
                        </div>
                    </section>
                </div>
                <div className="col-md-3 mt-5">
                    <div className="d-flex justify-content-between">
                        <div className="total-user">
                            <h6 className="text-center"><strong>Total Added: </strong><br/>{addUsers.length}</h6>
                        </div>
                        <div className="total-salary">
                            <h6 className="text-center"><strong>Total Salary: </strong><br/>{totalSalary}</h6>
                        </div>
                    </div>
                        
                    {
                        addUsers.map(addedUsr => <AddedUsers addUsers={addedUsr}></AddedUsers>)
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default Allusers;