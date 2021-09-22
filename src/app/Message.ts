export class Message{
    public msg_code: string
    public instruction: string
constructor(public m_code: string,public inst: string)
    {
        this.msg_code=m_code
        this.instruction=inst
        //console.log(msg_code);
    }
}