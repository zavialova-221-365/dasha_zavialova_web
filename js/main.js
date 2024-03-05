document.addEventListener('DOMContentLoaded', function () {
    const routesTableBody = document.getElementById('routesTableBody');
    const pagination = document.getElementById('pagination');
    const guidesTableBody = document.getElementById('guidesTableBody');
    let currentPage = 1;
    const itemsPerPage = 10; // Определение количества записей на странице
    let allRoutesData = []; // Данные о всех маршрутах
    function getRoutesData() {
        const apiUrl = `http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=3990d76f-4908-438c-a2e9-90a0a642eb96`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                allRoutesData = data;
                updateTable(currentPage);
            })
            .catch(error => {
                console.error('Ошибка получения данных о маршрутах:', error);
            });
    }
});