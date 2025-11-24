import { prisma } from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
import { StringFilter } from "../generated/prisma/commonInputTypes.js";

export type UserType = Prisma.UsersCreateInput;
type TodoType = Pick<
    Prisma.TodosUncheckedCreateInput,
    "title" | "priority" | "userId"
>;

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

export async function addTodo(todo: TodoType) {
    try {
        const data: Prisma.TodosUncheckedCreateInput = {
            title: todo.title,
            userId: todo.userId,
        };
        if (todo.priority !== undefined) {
            data.priority = todo.priority;
        }
        await prisma.todos.create({ data });
        console.log("User created successfully");
    } catch (err) {
        console.log("Error: ", err);
    }
}
