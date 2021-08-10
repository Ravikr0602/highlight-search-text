function searching()
{
    let Search_text = document.getElementById("search_text").value;
    let paragraph = document.getElementById("full_paragraph");
    Search_text = Search_text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${Search_text}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
