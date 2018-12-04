
    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series" : {
            start: "1968",
            end: "1973",
        }
    };
    let article = document.querySelector("article");
    let section = document.createElement("h1");
    article.appendChild(section);
    section.innerHTML = "The Mod Squad";
    
    
    const modAdd = (member) => {
        let modMember = document.createElement("p");
        section.appendChild(modMember);
        modMember.innerHTML= member;
    };

    modSquad.members.forEach(member => {
        modAdd(member)
    });