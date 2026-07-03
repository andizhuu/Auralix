import { AuralixMusic } from '@auralix/music';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    AuralixMusic.echo({ value: inputValue })
}
