import { prisma } from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export type UserType = Prisma.UsersCreateInput;

export async function addUser(user: UserType) {
    try {
        await prisma.users.create({
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
            },
        });
        console.log("User created successfully");
    } catch (err) {
        console.log("Error: ", err);
    }
}

export async function getUsers() {
    try {
        const users = await prisma.users.findMany();
        return users;
    } catch (err) {
        console.log(err);
    }
}
