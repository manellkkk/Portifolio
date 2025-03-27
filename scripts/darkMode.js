const btns = document.querySelectorAll('.switch-theme');
const currTheme = localStorage.getItem('theme') || 'light';

const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    btns.forEach(btn => {
        btn.checked = theme === 'dark';
    });
}

changeTheme(currTheme);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currTheme = localStorage.getItem('theme');
        const toggleTheme = currTheme === 'dark' ? 'light' : 'dark';
        changeTheme(toggleTheme);
    });
});
