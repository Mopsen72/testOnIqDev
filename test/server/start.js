let express = require('express');
let fs = require('fs');
var bodyParser = require('body-parser')


const app = express();
app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var summary = 0

app.post('/data/result', (req, res) => {
    let summ = req.body.deposit;
    let month = req.body.year * 12;
    let date = new Date(req.body.dateDepositYear, req.body.dateDepositMonth, req.body.dateDepositDay);
    let summadd = req.body.resupplyDeposit;

    let result = calk(summ, month, date, summadd)
    summary = Math.round(result)

    fs.readFile('./server/data/result.json', 'utf-8', (err, data) => {
        let total = JSON.parse(data);
        total = {
            summary: summary
        };
        fs.writeFile('./server/data/result.json', JSON.stringify(total), (err) => {
            console.log('done');
            res.send('ok')
        })
    })

    function calk(summ, month, date, summadd) {
        let result = summ;
        for (let i = 0; i <= month; i++) {
            result = +summ + +summadd + (+summ + +summadd) * +date.getDate(0) * (0.1 / 365);
            summ = result
            if (date.getMonth() == 11) {
                date.setMonth(0);
                date.setYear(+1);
            } else {
                date.setMonth(+1)
            }
        }
        return result;
    }
})
app.get('/data/result', (req, res) => {
    fs.readFile('./server/data/result.json', 'utf8', (err, data) => {
        res.send(data)
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});



//summn = summn-1 + (summn-1 + summadd)daysn(percent / daysy)
// 4.5.2 где summn – сумма на счете на месяц n (руб),

// 4.5.3 summn-1 – сумма на счете на конец прошлого месяца

// 4.5.4 summadd – сумма ежемесячного пополнения

// 4.5.5 daysn – количество дней в данном месяце, на которые приходился вклад

// 4.5.6 percent – процентная ставка банка - 10%

// 4.5.7 daysy – количество дней в году.