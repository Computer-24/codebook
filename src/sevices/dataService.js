function getUserInfoFromSession() {
    const token = JSON.parse(sessionStorage.getItem('token'))
    const cbid = JSON.parse(sessionStorage.getItem('cbid'))
    return {token, cbid};
}

export async function getUser() {
    const {token, cbid} = getUserInfoFromSession();

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw {message: response.statusText, status: response.status,}
    }
    return await response.json()
}

export async function getUserOrders() {
    const {token, cbid} = getUserInfoFromSession();

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    });
    if (!response.ok) {
        throw {message: response.statusText, status: response.status,}
    }
    return await response.json();
}

export async function createOrder(cartList, total, user) {
    const {token} = getUserInfoFromSession();

    const order = {
        cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    })
    if (!response.ok) {
        throw {message: response.statusText, status: response.status,}
    }
    return await response.json()
}