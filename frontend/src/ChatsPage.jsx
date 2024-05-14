import { PrettyChatWindow } from 'react-chat-engine-pretty';
// import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '03adce73-fa2e-41a5-8dd9-a4843ea0d25c',
//         props.user.username, 
//         props.user.secret
//     );
    return (
        <div style={{ height: '100vh' }}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
            <PrettyChatWindow
                projectId='03adce73-fa2e-41a5-8dd9-a4843ea0d25c'
                username='props.user.username'
                secret='props.user.secret'
                style={{ height: '100%' }}
            />
        </div>
    );
}

export default ChatsPage;
