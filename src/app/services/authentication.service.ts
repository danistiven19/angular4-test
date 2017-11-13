import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    private registeredUsers = [
        { email: 'danistiven19@gmail.com', password: 'test123'},
        { email: 'danistiven20@gmail.com', password: 'test1234'},
        { email: 'danistiven21@gmail.com', password: 'test1235'},
    ];


    private user: any;
    public isLoggedIn: boolean;

    public login = (email, password) => {
        let user = this.registeredUsers.find((item) => item.email === email && item.password === password);
        if (user) {
            this.isLoggedIn = true;
            return user;            
        }

        return null;
    };
}