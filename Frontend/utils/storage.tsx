"use client";

export const setToken = (token: string) => {
    localStorage.setItem("token", token);};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const clearToken = () => {
    localStorage.removeItem("token"); 
};

export const setUser = (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user") || '{}');
}

export const clearUser = () => {
    localStorage.removeItem("user");
}