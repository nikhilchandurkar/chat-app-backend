

const corsOption = {
    origin: [
        "http://3.6.102.111/",
        "http://localhost:5173",
        // "http://localhost:4173",
        // 'https://chat-app-client-lime-three.vercel.app/',
        // 'https://chat-app-api-wine.vercel.app/',
        process.env.CLIENT_URL,
        process.env.NODE_ENV === 'production' ,
        "http://localhost:3000",
    ],
    methods:["GET",
              "POST",
              "PUT",
              "PATCH",
              "DELETE",
              "OPTIONS" ],
    credentials: true,
}
console.log("")

const chitChatTocken="chitChat-Token"

export { chitChatTocken, corsOption }
