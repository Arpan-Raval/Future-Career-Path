const headerCSS = `
    header {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: white;
    text-shadow: 0 0 20px rgb(76, 165, 233), 0 0 20px black;
    background: linear-gradient(180deg, rgb(76, 165, 233), rgb(172, 203, 227));
    position: relative;
}
header .back {
    position: absolute;
    left: 20px;
}
header .title {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding: 0 60px;
}
header button {
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 15px;
    animation: slideUP 1.5s ease;
}
header button:hover {
    background-color: rgb(80, 169, 241);
    color: white;
}
header button i {
    margin-right: 5px;
}
header h1{
    animation:slideUP 1.5s ease;
}`;
