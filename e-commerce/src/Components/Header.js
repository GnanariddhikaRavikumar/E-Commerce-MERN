import { Link } from "react-router-dom";

const Header = ()=>{
    return(
      <nav className='header'>
      <img 
      className="app-logo"
      src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD8/Pz5+fn29vaEhITk5OTn5+fd3d3w8PDt7e3h4eFra2sFBQXIyMjOzs6urq6UlJRRUVFwcHCioqIODg7ExMQuLi46Ojo/Pz+bm5u2trbX19cmJiapqakaGhpkZGRJSUl5eXlVVVWMjIwfHx9+fn4zMzNeXl5TU1MTExMvnKmsAAAJMUlEQVR4nO2cC5uiuBKGU0nkqgLKRQUvINqO//8HnqogCD1j7zmze7bNPPWOMw009uTrSlKXBIVgGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZh/l9IeknzxRz+eaAuKT8d/XFIJQn1x9pQDZaTf6RCIfxlvEuSZBcvg+9uyj+IVEoqIXR0WAFyvx/vGR2sDpH+M0akJH1O+gNgM08jzyXCKJ1vUWQaCvsFkgIvIZNVdKbNJfMN74CqW0/Qb8BqdJDs4bpEoQrVPryFeSkZXbNjEthuxOgMt6ibSDuHL7t5lMYnfvcEdfTdTfx9fK31Doq8P+/EyT646ci3gGaU+pva+PdQ2m9g7Qk19ENy91p2PG4R3hrWvqXzjQ5ukNDsMoy+h1ZlXqI/TuDs2qnQOUNMo0095KAK7S3LpadEP6HiRIodtIRz+H3N/BusIDYTqO4UYk/M5+TsYb4crGkmHRHDj29s52+hpNYNHHp/riji1kFD8kxEsw607IIBYTpqCWsMfazyjFrsoFVC9wMPJaoZwHGXh/luj65ejuZT7MgJ7IRV86mUVVaThGEISrQT/PBMWFNhiFrSt/opCE19Bs+ufEPfikqQZ3ic43xSQBF2rkJVBWyeKaK5FhZnq2wocux12DUHV6hECOg6NEU2ON52AI7o00VNA1Ie0Kx2YFodfKzGXZCI4egNN1V3o0eNKhti9RGY4PVfbu9voVBO/PR4Whya+byG7DTvOWVQz+dNPATjZpzGwpLqBjZ6X48mShkZL7iAEYvurBpLrAthhUIaVEs0h+7rahLDskW26Ojl0XG2wMGq+vxQiQMshbIhQsXppTmGg/9Wg0J4Klw8FCZDjo9fw/v1OTW9MWhD99I8qxPY5iu8Yjby+0o0+0DakPJLuaSJcmSc5qXCZlJXLMGObFiit/OHWZ+8+fylwtModxTKx3FpQS/FNp6OQsnBH2J881LhWY9MrUR2EjaE31Jsbs+ADb+455cKV3oUuymx2ggLBArlUmbfg3Oq8/FS4Ycrx+4hyQIbFGIEehidSensXyrcu5N3puDY4A9FBfnkPLy/VJg5kztzCnL+zab+FlJEGJuMz72XAgHCSVl/aYW7+N8Uej8ptMGGy0kvlTL/QuFyMnna0UtpHI5yWWnKFy8pJ4pi8H76ae+IS/n9iPQLhYfJncnCjqVTVcwn58kXCpOJDU8f0gJvgaFJvZlcab9Q2E4UfqyEBemTyXhHUZsSr8NSgPlTIZqPTPr+QY18ZEF9pVR+qfA0vE9RtaO0Y9VbhpdW9FUMpP5C4Wp4F3bPdm9F0Ebp0qkORgNq84XC7WgcBtuTtqEUJYVG/xA966DidWqByUX/m5AUCx2EsmCmMXUJOD3LL8E4tXgW3Dr2fl+wUvIEFhiQoFbOFtWQ4zvHrK+umYLb+CQ7uqJf764Ws/7tFuAdm8cRpviXSb+cFIYxQXwo0mJ9sWYhmEZgAsthfJXtbKCdw3w2Ih7cQ06VASsMaBopnWO/WCb1pN3RJAWUQ2SgbhfHCn0PFHr91izif5ob0atXP92t8c4WUy6bFOLUuMZ+6hvvOEkBK8g/x2UUbS9hbdeuIbSeWx8jnR9yVwTjpruQfr4ZQ9FqX7t2bYxS2NhwsanhDkU5icR0vfI/3yy8zRHnUW2VQhp/mNunXr6drF5j4pH9NBCDmgahtsqGhgT2xVIEJ1qN6HdlSBFc6n4xm+Yh/E0si/vy65/0rqzqqAAchjdTURu66g52ZksGbSOirUX5Ym+pQEr1K8rhw8ts2IFAy/pXuOrO0ePfoIGbZ8V6zC9IaQSikfx6/VRIq2gzqMuu5OSkH1mr7Fjb/gXhZmHKof7HbJTyU9csM9i0hzKdFVBEJN6GnOlXOCtyfnqNgZqeWknFa1rM2De5HWWLFygRruDU1NAINd2WR/ug3TB0XCm0XbHaFHT7/m5TnGN6HGjcD0mgKeMo6zzgFDN/KG3i70lnfGyq7YRabMLHk2q0CkzbgqY2fGx4k9ZOowzDMAzDMPZC8VkXcKquCto9h9cHpvSPKcx0z5VQ3KZMLeN5RpG4euN8gzII3/F8bKvrYENdrV3afCgDH1+ozwskXtMh3ai9ylM+XhG+Q4UArwrwqhsEjpJvrFDkK4B7LKILxCKHQwgnEgZztYdWVovG3WLiWziYctDj+VEEVylmeG+I1y+J8Gmtce789X/1TUhR7aEs63vuXWDrRlC6plhfwVxsYB+5MHM3+zQtNZUa22gXoEI6zN0iS/GXE+usjmaQvO0+WiVT2g5VohWKDaQRxKRQGoXFFho805tN96z6jB7QE6hQ6xksS7SlyuEUwEp42fptS2+0Zz0S2MSLe2znkHcKlVG4v+2g3F819dKz1mbT6U51T9PAsqGyXFhsw+NHuaInM79bygukWEOulZdt3HuSZzdSOMfpo4I12tA73u5rvT0mSUllUy/ZwCGCuk1qyFt6yMa91O4FsqIN3lYhPdizpnF1de4zfQI4kEI0qumltPvr6pteinNnQHsvThXMzDjMcS4SKax9qD3yGO+qUMqwhvkcNqGXXWnjbBzCZbW9mnH4IZwCGuyl5/rsCtFu5h8QR9DQJrFc3+C2zsDRUOt3rmso7KENLOaVCjepFNdj6WyRtZvNRH0S8rBP9I2uoDs47KE4qKhIhEiPkQqud3rE21+duvDgu6X81wwtVWZB//N1mjK1PWp+gmIyTSu7WjyOVFdJNIsyXRyHZ8qsQ313Y3+LMlYqR3Flgi5kmThSlZWUpWN2q+uluxRhUokqzaWf5n/9496QNvdlK2S4E1c/bENXimYnZJvQipv0m7QU5c4XUZoIp7Fms9AE2VaiFcq/ikY7iZOI6DoXMi1XNP6CWYkK405h2DpC2rAB+hNxLGSeuiJK0EIRdcigCkTl0Lq+VJUTUi+VYZArncbf3djf4vGhCcPH0dDHnJg/3Xe7x0XVc43fPkw+TDrogPZ3mQ/36JM/Wvl9fACBsnWV2yyq6W6ByWxN0L05zaqT2S2rjdfQFuxf/xVK9R9/ZSoVWpkF+14M6Tch6GOJimEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhvnH+A+feWaxi6hn6AAAAABJRU5ErkJggg==" 
      alt ="website-logo" ></img>
      <center>All Goods Galore</center>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact"> CONTACT</Link></li>
        <img src =
        "https://static.vecteezy.com/system/resources/previews/008/302/513/non_2x/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg" 
        alt ="Profile"></img>
      </ul>
      </nav>
    )
  }

export default Header;