const btn = document.getElementById('switch-theme');
const currTheme = localStorage.getItem('theme');

const changeTheme = (theme) => {
     if (theme === 'dark') {
          btn.checked = true;
          document.documentElement.setAttribute('data-theme','dark');
     } else {
          btn.checked = false;
          document.documentElement.setAttribute('data-theme','light');
     }
     localStorage.setItem('theme', theme);
}

if (currTheme === 'dark') {
     changeTheme(currTheme);
}

btn.addEventListener('click',(e)=>{
     const currTheme = localStorage.getItem('theme');
     const toggleTheme = currTheme === 'dark' ? 'light' : 'dark';
     changeTheme(toggleTheme);
})