//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, chekAnswers ;
var answers = [];



do { //Выводим первый вопрос 
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
        if (ok) {
            if (event == 1) {
                answers.push(works.a1);
            } else {
                answers.push(works.a2);
            }
        }
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
                if (ok) {
                    if (event == 1) {
                        answers.push(works.b1);
                    } else {
                        answers.push(works.b2);
                    }
                }

            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                answers.push(works.d1);
                            } else {
                                answers.push(works.d2);
                            }
                        }

                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                answers.push(works.d1);
                            } else {
                                answers.push(works.d2);
                            }
                        }

                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
                if (ok) {
                    if (event == 1) {
                        answers.push(works.c1);
                    } else {
                        answers.push(works.c2);
                    }
                }

            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                answers.push(works.d1);
                            } else {
                                answers.push(works.d2);
                            }
                        }

                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            if (event == 1) {
                                answers.push(works.d1);
                            } else {
                                answers.push(works.d2);
                            }
                        }

                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');


console.log(answers);
  
chekAnswers = prompt("Чтобы узнать свой ответ введите его номер: 1, 2 или 3. " + "\nДля выхода из игры нажмите -1");

if (chekAnswers == 1){
    alert( works.a00 + "\n" +answers[0]);
} else if (chekAnswers == 2){
    alert( works.b00 + "\n" +answers[1]);
} else if (chekAnswers == 3)   {
    alert( works.c00 + "\n" +answers[2]);
}



//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

