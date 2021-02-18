function perjungtiTurini(taboId)
{
    var tabcontentai = document.getElementsByClassName("turinys");
    var tabMygtukai = document.getElementsByClassName("hov");
    var rodomasTab = document.getElementById(taboId);

    for (let i = 0; i < tabcontentai.length; i++)
    {
        tabcontentai[i].style.display = "none"; 
    }
    rodomasTab.style.display = "initial";
}
/*
function perjungtiTaba(taboId)
{
    var tabContentai = document.getElementsByClassName("tabas");
    var tabMeniuMygtukai = document.getElementsByClassName("meniu-mygtukas");
    var rodomasTab = document.getElementById(taboId);
    for (let i = 0; i < tabContentai.length; i++)
    {
        tabContentai[i].style.display = "none";
    }
    rodomasTab.style.display = "initial";


}
*/
/*
function paspaudusPirma()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "initial";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "none";
}

function paspaudusAntra()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "initial";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "none";
}
function paspaudusTrecia()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "initial";
    ketvirtasTabContent.style.display = "none";
}
function paspaudusKetvirta()
{
    var pirmasTabContent = document.getElementById("pirmas-turinys");
    var antrasTabContent = document.getElementById("antras-turinys");
    var treciasTabContent = document.getElementById("trecias-turinys");
    var ketvirtasTabContent = document.getElementById("ketvirtas-turinys");

    pirmasTabContent.style.display = "none";
    antrasTabContent.style.display = "none";
    treciasTabContent.style.display = "none";
    ketvirtasTabContent.style.display = "initial";
}
*/
