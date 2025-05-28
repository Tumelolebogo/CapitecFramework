//Tumelo Lebogo

//POST with JSON data

fetch('https://example.com/api/v1/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        product_id: '12345',
        quantity: 2,
        shipping_address: '541 Moriting Section, Tembisa'
    })
})
    .then(res => res.json())
    .then(data => console.log('Order response:', data))
    .catch(err => console.error('Error:', err));

//GET with query parameters

const params = new URLSearchParams({
    query: 'passionate reading',
    sort: 'latest',
    limit: '10'
});

fetch(`https://example.com/search?${params.toString()}`)
    .then(res => res.json())
    .then(data => console.log('Search results:', data))
    .catch(err => console.error('Error:', err));

//POST with form-url encoded data

const formData = new URLSearchParams();
formData.append('username', 'tumeloLeb');
formData.append('password', 'Lebogo123!');

fetch('https://example.com/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
})
    .then(res => res.json())
    .then(data => console.log('Login response:', data))
    .catch(err => console.error('Error:', err));

//PUT request with JSON body

fetch('https://example.com/api/users/5678', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        bio: 'Fueled by passion and creativity in every line of code.',
        location: 'Tembisa City'
    })
})
    .then(res => res.json())
    .then(data => console.log('Update response:', data))
    .catch(err => console.error('Error:', err));

//GET with date filter query params

const dateParams = new URLSearchParams({
    start_date: '2025-05-01',
    end_date: '2025-05-25'
});

fetch(`https://example.com/api/events?${dateParams.toString()}`)
    .then(res => res.json())
    .then(data => console.log('Filtered events:', data))
    .catch(err => console.error('Error:', err));




//GET with Authorization header (Bearer token)

fetch('https://example.com/api/profile', {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    }
})
    .then(res => res.json())
    .then(data => console.log('Profile data:', data))
    .catch(err => console.error('Error:', err));

//POST with API key header

fetch('https://example.com/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '89a7f3b2c18d4e7a9f0c'
    },
    body: JSON.stringify({ data: 'Passion-driven payload!' })
})
    .then(res => res.json())
    .then(data => console.log('API response:', data))
    .catch(err => console.error('Error:', err));

//GET with Accept-Language header

fetch('https://example.com/blog/posts', {
    headers: {
        'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8'
    }
})
    .then(res => res.json())
    .then(data => console.log('Localized posts:', data))
    .catch(err => console.error('Error:', err));


//PUT with If-Match header


fetch('https://example.com/api/documents/4321', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'If-Match': '"e0023aa4e"'
    },
    body: JSON.stringify({ content: 'Updating with fiery enthusiasm!' })
})
    .then(res => res.json())
    .then(data => console.log('Update result:', data))
    .catch(err => console.error('Error:', err));


//DELETE with X-Request-ID header


fetch('https://example.com/api/items/999', {
    method: 'DELETE',
    headers: {
        'X-Request-ID': '123e4567-e89b-12d3-a456-426614174000'
    }
})
    .then(res => {
        if (res.ok) {
            console.log('Item deleted successfully');
        } else {
            console.error('Failed to delete item');
        }
    })
    .catch(err => console.error('Error:', err));