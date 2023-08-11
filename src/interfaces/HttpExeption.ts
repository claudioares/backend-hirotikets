class HttpExeption extends Error {
    public status: number
    public messege: string | undefined
    constructor(status:number, messege:string){
        super(messege)
        this.status = status
        this.message = messege
    }
}

export { HttpExeption }