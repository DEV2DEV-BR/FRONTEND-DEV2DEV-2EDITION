import { Notify } from 'quasar'
export const notify = (type, message) => {
    Notify.create({
        position: 'top',
        message,
        type
    })
}