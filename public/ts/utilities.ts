export function getRandomStr(length:number){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const characterslength = characters.length;
    let result = ''
    
    for (let i = 0; i < length; i++) {
        result += characters[(Math.floor(Math.random() * characterslength))];
    }

    return result;
}

export function getRandomInt(num:number){
    return Math.floor(Math.random() * num + (num/1.5))
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}