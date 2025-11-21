import express from "express";
import { addUser, getUsers } from "./db";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;

interface UserType {
    username: string;
    email: string;
    password: string;
}

app.use(express.json());

app.get("/user", async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: true,
            message: "invalid request",
        });
    }
});

app.post("/user/add", async (req, res) => {
    const user: UserType = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    try {
        addUser(user);
        res.status(200).json({
            success: true,
            message: "user added successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            error: true,
            message: "invalid request",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
