document.querySelector('body').addEventListener('keydown',(e)=>{
    console.log('key pressed', e.key);
    document.getElementById('key').innerHTML =`
    
    <table>
    <tr>
    <th>Key</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    ` 
})