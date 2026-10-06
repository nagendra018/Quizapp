function Status({isLoggedIn}){
    return(
        <h1>
            hii im in status function name
            {isLoggedIn ? "Welcome back!" : "please log in."}
        </h1>
    );
}
function Notification({hasUnread}){
    return(
        <div>
            <p>hii im in Notification</p>
            <h2>Inbox</h2>
            {hasUnread && <p> you have unread message!</p>}
        </div>
    );
}
function Conditional(){
    return(
        <>
        <h2>{ Status({isLoggedIn:true})}</h2>
        <h1>im in conditional</h1>
        <h1>{Notification({hasUnread:true})}</h1>
        </>
    )
}
export default Conditional;