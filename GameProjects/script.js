function loadHTML(path, target) 
    {
        fetch(`${path}`)
        .then(res => {
            if(res.ok)
                {
                    return res.text();
                }
        })
        .then(html => {
            document.querySelector(target).innerHTML = html;
        });
    };

window.onload = function()
{
    loadHTML('../Modules/body.html', '#con');
}