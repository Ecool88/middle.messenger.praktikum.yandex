window.onload = () => {
    const loginData = document.querySelector('#btnClick');
    if (loginData) {
        loginData.addEventListener('click', (e) => {
            e.preventDefault();

            const arr = Array.prototype;
            const elements = document.forms.formData.elements;
            const formData = arr.reduce.call(elements, (acc, current) => {
                if (current.name && current.value !== '') {
                    acc[current.name] = current.value;
                }
                return acc;
            }, {});

            console.log(formData)
        });
    } else {
        console.log('Selector not found')
    }
};
