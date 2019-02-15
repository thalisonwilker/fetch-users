$('table').hide()
$('button').on('click', event => {

    $('button').text('Listando ...')
    
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
        method: 'GET',
        dataType: 'jsonp'
    }).done( users => {
        let tbody = $('tbody')
        users.forEach( user =>{
            let tableRow = `<tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                </tr>
            `
            tbody.append(tableRow)
        })
    })
    .always( () => {
        $('table').show('fast')
        $('button').text('Listar Novamente')
    })
})