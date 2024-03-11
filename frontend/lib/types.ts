interface User{
    userId: number,
    firstName: string,
    lastName: string,
    email: string
}

interface Blog{
    id: number,
    title: string,
    content: string,
    userId: number,
    createdAt?: Date,
    author: string
}