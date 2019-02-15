$('table').hide()
$('button').on('click', event => {
    let tbody = $('tbody')
    tbody.html('')
    $('button').text('Listando ...')

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        
        json.forEach(user => {
            let tableRow = `<tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                </tr>
            `
            tbody.append(tableRow)
        })
        $('table').show('fast')
        $('button').text('Listar Novamente')
    })
})