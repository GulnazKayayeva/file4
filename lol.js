let name = prompt('Введите свое имя.')

let a = name.slice(0,1)

let peop = 8



if( a === 'A' || a === 'a'){
    let age = +prompt('Ваш возраст.')
    if(age > 20 && age < 40 ){
        let money = +prompt('Введите свой счет.')
        if(money > 100){
            let b = +prompt('Сколько вас человек?')
            if(peop + b <= 10){
                console.log('Добро пожаловать!');
            } else {
                console.log('Простите вас слишком много...');
            }

        } else{
            console.log('Недостаточно средств');
        }
    } else{
    console.log('Вы не подходите по возрасту...');
}
} else{
    console.log('До свидания.');
}