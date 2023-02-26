export default function increment(num){
    return {
        type: 'INCREMENT',
        payload: num
    };
}