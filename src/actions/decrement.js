export default function decrement(num){
    return {
        type: 'DECREMENT',
        payload: num
    };
}