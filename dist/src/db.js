import { prisma } from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
export async function addUser() {
    try {
        await prisma.users.create({
            data: {
                username: "rohan",
                email: "rohanJoshi@gmail.com",
                password: "1234",
            },
        });
        console.log("User created successfully");
    }
    catch (err) {
        console.log("Error: ", err);
    }
}
addUser();
//# sourceMappingURL=db.js.map