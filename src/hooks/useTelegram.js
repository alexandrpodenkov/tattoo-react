const tg  = window.Telegram.WebApp;

const useTelegram = () => {
    const onClose = () => {
        tg.onClose();
    }

    return {
        tg,
        onClose, 
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_Id,
    }
}