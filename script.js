const select = document.querySelector('#select');
const total = document.querySelector('#total');

const url =
    'https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1647046799&s=dft9g-lpi9WduCdnph9KPA';

// ^ cars.json по ссылке в уроке

const getData = () => {
    return fetch(url).then(res => res.json());
};

getData().then(data => {
    data.cars.forEach(car => {
        const option = document.createElement('option');
        option.setAttribute('value', car.brand);
        option.textContent = car.brand;
        select.append(option);
    });
});

select.addEventListener('change', e => {
    if (e.target.value) {
        getData().then(data => {
            data.cars.forEach(car => {
                if (car.brand === e.target.value) {
                    total.innerHTML = `Тачка ${car.brand} ${car.model}<br>
                    Цена: ${car.price}$`;
                }
            });
        });
    } else {
        total.innerHTML = 'выбери тачку';
    }
});
