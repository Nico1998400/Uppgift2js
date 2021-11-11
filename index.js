console.log(document);

const body = document.querySelector("body"); // Hämtar elementet Body

//funktion för att skapa nya element
const createAndAppend = (tag, parent) => {
    const newElement = document.createElement(tag);
    parent.appendChild(newElement);
    return newElement;
};

//funktion för att skapa nya styling element i array form
const createStyle = (element, styleArrayArray) => {
    if (element.length) {
        element.forEach((item) => {
            styleArrayArray.forEach((styleArray) => {
                item.style[styleArray[0]] = styleArray[1];
            });
        });
    } else {
        styleArrayArray.forEach((styleArray) => {
            element.style[styleArray[0]] = styleArray[1];
        });
    }
};

//header
const header = createAndAppend("header", body);
const headerh1 = createAndAppend("h1", header);
const headerp = createAndAppend("p", header);
const main = createAndAppend("main", body);

//first section
const section = createAndAppend("section", main);
const sectionh2 = createAndAppend("h2", section);
const sectiondiv = createAndAppend("div", section);
const sectiondivdiv = createAndAppend("div", sectiondiv);
const sectiondivdivp1 = createAndAppend("p", sectiondivdiv);
const sectiondivdivp2 = createAndAppend("p", sectiondivdiv);
const sectiondivimg = createAndAppend("img", sectiondiv);

//second section 
const section2 = createAndAppend("section", main);
const section2h2 = createAndAppend("h2", section2);
const section2div = createAndAppend("div", section2);

//first div in section2
const section2divdiv = createAndAppend("div", section2div);
const section2divdivh3 = createAndAppend("h3", section2divdiv);
const section2divdivp = createAndAppend("p", section2divdiv);

//second div in section2
const section2divdiv2 = createAndAppend("div", section2div);
const section2divdivh32 = createAndAppend("h3", section2divdiv2);
const section2divdivp2 = createAndAppend("p", section2divdiv2);

//third div in section2
const section2divdiv3 = createAndAppend("div", section2div);
const section2divdivh33 = createAndAppend("h3", section2divdiv3);
const section2divdivp3 = createAndAppend("p", section2divdiv3);

//forth div in section2
const section2divdiv4 = createAndAppend("div", section2div);
const section2divdivh34 = createAndAppend("h3", section2divdiv4);
const section2divdivp4 = createAndAppend("p", section2divdiv4);

//fifth div in section2
const section2divdiv5 = createAndAppend("div", section2div);
const section2divdivh35 = createAndAppend("h3", section2divdiv5);
const section2divdivp5 = createAndAppend("p", section2divdiv5);

//sixth div in section2
const section2divdiv6 = createAndAppend("div", section2div);
const section2divdivh36 = createAndAppend("h3", section2divdiv6);
const section2divdivp6 = createAndAppend("p", section2divdiv6);

//footer 
const footer = createAndAppend("footer", body);
const footerh2 = createAndAppend("h2", footer);
const footerdiv = createAndAppend("div", footer);
const footerdiva1 = createAndAppend("a", footerdiv);
const footerdiva2 = createAndAppend("a", footerdiv);
const footerdiva3 = createAndAppend("a", footerdiv);

//text for header 
headerh1.innerText = "This i a page made in HTML";
headerp.innerText = "Try to build it using only JavaScript";

//text for first section
sectionh2.innerText = "This is the main section";
sectiondivdivp1.innerText = "Lets have some text next to an image";
sectiondivdivp2.innerText = "And some more text just to make it interesting";

//img for first section
sectiondivimg.setAttribute("src", "https://images.unsplash.com/photo-1544377712-f7a323240581?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYXJ8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

//text for section2
section2h2.innerText = "Now a grid of nice info cards";

//text for firstdiv in section2
section2divdivh3.innerText = "This is a thing";
section2divdivp.innerText = "It works like this and it is amazing";

//text for seconddiv in section2
section2divdivh32.innerText = "This is another thing";
section2divdivp2.innerText = "It works like the first and it is amazing";

//text for thirddiv in section2
section2divdivh33.innerText = "This is doodad";
section2divdivp3.innerText = "It doesn't really work, but thats okay";

//text for forthdiv in section2
section2divdivh34.innerText = "A rock, perhaps";
section2divdivp4.innerText = "Hard and sturdy";

//text for fifthdiv in section2
section2divdivh35.innerText = "Something creative";
section2divdivp5.innerText = "It is more so than that bearded teacher guy";

//text for sixthdiv in section2
section2divdivh36.innerText = "This is a thing";
section2divdivp6.innerText = "It works like this and it is amazing";

//text for footer 
footerh2.innerText = "Let put some links in here";
footerdiva1.innerText = "JavaScript-kursen";
footerdiva2.innerText = "Utbildaren på kursen";
footerdiva3.innerText = "Lektionerna";

//hrefs for footer
footerdiva1.href = "https://javascript.aappelblom.tech/";
footerdiva2.href = "https://javascript.aappelblom.tech/utbildaren";
footerdiva3.href = "https://javascript.aappelblom.tech/lektioner";


//styling for body
createStyle(body, [
    ["display", "flex"],
    ["flex-direction", "column"],
    ["align-items", "center"],
    ["background-color", "#030303"],
    ["color", "#fff"],
]);

//styling for header 
createStyle(header, [
    ["margin", "3rem auto"],
]);

createStyle(headerh1, [
    ["font-size", "2.5rem"],
    ["margin-bottom", "1rem"],
    ["color", "darkgoldenrod"],
]);

createStyle(headerp, [
    ["text-align", "center"],
]);

//styling for section
createStyle(section, [
    ["margin", "2rem auto"],
]);

createStyle([sectionh2, section2h2, footerh2], [
    ["font-size", "1.5rem"],
    ["margin-bottom", "1rem"],
    ["color", "darkgoldenrod"],
    ["text-align", "center"],
]);

createStyle(sectiondiv, [
    ["display", "grid"],
    ["grid-template-columns", "1fr 1fr"],
]);

createStyle(sectiondivdiv, [
    ["display", "grid"],
    ["place-content", "center"],
]);

//styling for section2
createStyle(section2, [
    ["display", "grid"],
    ["place-content", "center"],
]);

createStyle(section2div, [
    ["display", "grid"],
    ["grid-template-columns", "repeat(3, 1fr)"],
    ["gap", "1rem"],
]);

createStyle(section2div, [
    ["display", "grid"],
    ["grid-template-columns", "repeat(3, 1fr)"],
    ["gap", "1rem"],
]);

createStyle([section2divdiv, section2divdiv2, section2divdiv3, section2divdiv4, section2divdiv5, section2divdiv6], [
    ["text-align", "center"],
    ["border", "1px solid #fff"],
    ["border-radius", "1rem"],
]);

//footer
createStyle(footer, [
    ["width", "100%"],
    ["margin", "2rem auto"],
    ["text-align", "center"],
]);

createStyle(footerdiv, [
    ["display", "flex"],
    ["justify-content", "space-around"],
    ["width", "100%"],
]);

createStyle([footerdiva1, footerdiva2, footerdiva3], [
    ["color", "#fff"],
    ["text-decoration", "none"],
]);

//hover effect 
footerdiva1.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";
})

footerdiva2.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";
})

footerdiva3.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";
})