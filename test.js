function func(){
        // под этими номерами поравильные ответы в тесте
    listAnswers = [4, 1, 4, 2, 3, 1, 3, 2, 2, 1];

    //список всех номеров (внутри HTML вариантов ответа)
    listNumbers = document.getElementsByClassName("test-block-answer");
    // вложенный список номеров (внутри списки с HTML вариатнов ответа)
    listNumbersWithOptions = [];
    // bool список, который содержит информыция о правильных и неправильныъ ответах пользователя
    listUserAnswers = [];
    // заполнение списка false
    for (let i = 0; i < listNumbers.length; i++){
        listUserAnswers.push(false);
    }

    let countTrue = 0;  // количество правильных ответов
    let countAll = listNumbers.length;  // количество всех ответов

    for (let i = 1; i <= listNumbers.length; i++){
        let name = "answer" + i.toString();
        let oneNumber = document.getElementsByName(name);
        listNumbersWithOptions.push(oneNumber);
    }

    // сравнение ответов пользователя с правильными ответами
    for (let i = 0; i < listNumbersWithOptions.length; i++){
        for (let j = 0; j < listNumbersWithOptions[i].length; j++){
            if (listNumbersWithOptions[i][j].checked == true && (j + 1) == listAnswers[i]){
                listUserAnswers[i] = true;
                countTrue++;
            }
        }
    }

    let procent = (countTrue / countAll) * 100;
    console.log(procent)

    let button = document.getElementById("button");
    button.style.display = "none";

    let monologBlock = document.getElementById("monolog");
    monologBlock.style.display = "block";

    let spanProcent = document.getElementById("procent");
    let spanWishes = document.getElementById("wish");

    let wishesText = "";
    if (procent < 50){
        wishesText = "Вы набрали менее 50%, я уверен, что вы разобрались в том, что такое криптовалюты, но для более глубокого понимания советую на досуге ещё раз прочитать теорию.";
    }
    else if (procent >= 50 && procent <= 80){
        wishesText = "Вы показали достойный результат, это говорит о том, что вы хорошо поняли, что такое криптовалюты";
    }
    else if (procent > 80){
        wishesText = "Можно сказать, что вы в полной мере усвоили материал и теперь уверенно разбираетесь в том, что такое криптовалюты. Так держать!";
    }

    // логика вывода ответов в таблицу
    let trueFalse = document.getElementsByClassName("table-true-false");
    for (let i = 0; i < trueFalse.length; i++){
        let trueFalseElement = trueFalse[i];
        if (listUserAnswers[i] == true){
            trueFalseElement.innerText = "Правильно";
        }
        else{
            trueFalseElement.innerText = "Неправильно";
        }
    }
    
    spanProcent.innerText = procent.toString() + "% ";
    spanWishes.innerText = wishesText;

    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    window.scrollTo(0, height);


    // for (let i = 0; i < listNumbersWithOptions.length; i++){
    //     for (let j = 0; j < listNumbersWithOptions[i].length; j++){
    //         console.log(listNumbersWithOptions[i][j].checked);
    //     }
    //     console.log("\n");
    // }
}