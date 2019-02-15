$('table').hide()
$('button').on('click', event => {

    $('button').text('Listando ...')

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
})