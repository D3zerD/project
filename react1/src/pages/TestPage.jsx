import React from "react";
import useGetSingleUser from "../hooks/useGetSingleUser";
const TestPage = () => {
    const [user] = useGetSingleUser(52)

    console.log(user)
    return(
        <section className="profile">
            <div className="profile__list">
                <ul className="list">
                    <li className="list__item" key={user.id}>
                        <span className="user__name">
                            Name: {user.name}
                        </span>
                        <span className="user__password">
                            Password: {user.password}
                        </span>
                        <span className="user__email">
                            Email: {user.email}
                        </span>
                        <span className="user__role">
                            Role: {user.role}
                        </span>
                    </li>
                    <li className="list__image">
                        <img src={user.avatar} alt="52" className="avatar" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TestPage;