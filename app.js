let objectarray =[
    {
        imgSRC: "images\\photosnap.svg",
        companyName: "Photosnap",
        isNew: true,
        isFeatured: true,
        jobTitle: "Senior Frontend Developer",
        days: "1d ago",
        contractType: "Full Time",
        location: "USA",
        jobtags: ["CSS","Frontend","Senior","HTML","Javascript"]
    },
    {
        imgSRC: "images\\manage.svg",
        companyName: "Manage",
        isNew: true,
        isFeatured: true,
        jobTitle: "Fullstack Developer",
        days: "1d ago",
        contractType: "Part Time",
        location: "Remote",
        jobtags: ["Fullstack", "Midweight", "Python", "React"]
    },
    {
        imgSRC: "images\\account.svg",
        companyName: "Account",
        isNew: true,
        isFeatured: false,
        jobTitle: "Junior Frontend Developer",
        days: "2d ago",
        contractType: "Part Time",
        location: "USA only",
        jobtags: ["Frontend", "Junior", "JavaScript", "React", "Sass"]
    },
    {
        imgSRC: "images\\myhome.svg",
        companyName: "MyHome",
        isNew: false,
        isFeatured: false,
        jobTitle: "Junior Frontend Developer",
        days: "5d ago",
        contractType: "Contract",
        location: "USA only",
        jobtags: ["Frontend", "Junior", "CSS", "JavaScript"]
    },
    {
        imgSRC: "images\\loop-studios.svg",
        companyName: "Loop Studios",
        isNew: false,
        isFeatured: false,
        jobTitle: "Software Engineer",
        days: "1w ago",
        contractType: "Full Time",
        location: "Worldwide",
        jobtags: ["Fullstack", "Midweight", "JavaScript", "Ruby", "Sass"]
    },
    {
        imgSRC: "images\\faceit.svg",
        companyName: "FaceIt",
        isNew: false,
        isFeatured: false,
        jobTitle:"Junior Backend Developer",
        days: "2w ago",
        contractType: "Full Time",
        location: "UK only",
        jobtags: ["Backend", "Junior", "Ruby", "RoR"]
    },
    {
        imgSRC: "images\\shortly.svg",
        companyName: "Shortly ",
        isNew: false,
        isFeatured:false,
        jobTitle: "Junior Developer",
        days: "2w ago",
        contractType: "Full Time",
        location: "Worldwide",
        jobtags: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"]
    },
    {
        imgSRC: "images\\insure.svg",
        companyName: "Insure",
        isNew: false,
        isFeatured: false,
        jobTitle:"Junior Frontend Developer",
        days:"2w ago",
        contractType:"Full Time",
        location:"USA only",
        jobtags: ["Frontend", "Junior", "JavaScript", "Vue", "Sass"]
    },
    {
        imgSRC: "images\\eyecam-co.svg",
        companyName: "Eyecam Co.",
        isNew: false,
        isFeatured: false,
        jobTitle:"Full Stack Engineer",
        days:"3w ago",
        contractType:"Full Time",
        location: "Worldwide",
        jobtags: ["Fullstack", "Midweight", "JavaScript", "Python", "Django"]
    },
    {
        imgSRC: "images\\the-air-filter-company.svg",
        companyName: "The Air Filter Company",
        isNew: false,
        isFeatured: false,
        jobTitle:"Front-end Dev",
        days:"1mo ago",
        contractType:"Part Time",
        location:"Worldwide",
        jobtags: ["Frontend", "Junior", "JavaScript", "React", "Sass"]
    }
]
let lower_body = document.getElementById("lower_body")

let select_category = document.getElementById("select_category")
let search_icon = document.getElementById("search_icon")
let close_icon = document.getElementById("close_icon")

search_icon.addEventListener("click", ()=>{
    select_category.style.display = "block"
})

close_icon.addEventListener("click", ()=>{
    select_category.style.display = "none"
})
let Mainarray = []
let selection_HTML_checkbox = document.getElementById("selection_HTML_checkbox")
selection_HTML_checkbox.addEventListener("click", ()=>{
    if(selection_HTML_checkbox.checked === true){
        Mainarray.push("HTML")
    }else{ 
        let index_HTML = Mainarray.indexOf("HTML")
        Mainarray.splice(index_HTML,1)}
})
let selection_CSS_checkbox = document.getElementById("selection_CSS_checkbox")
selection_CSS_checkbox.addEventListener("click", ()=>{
    if(selection_CSS_checkbox.checked === true){
        Mainarray.push("CSS")
    }else{ 
        let index_CSS = Mainarray.indexOf("CSS")
        Mainarray.splice(index_CSS,1)}
})
let selection_Senior_checkbox = document.getElementById("selection_Senior_checkbox")
selection_Senior_checkbox.addEventListener("click", ()=>{
    if(selection_Senior_checkbox.checked === true){
        Mainarray.push("Senior")
    }else{ 
        let index_Senior = Mainarray.indexOf("Senior")
        Mainarray.splice(index_Senior,1)}
})
let selection_Javascript_checkbox = document.getElementById("selection_Javascript_checkbox")
selection_Javascript_checkbox.addEventListener("click", ()=>{
    if(selection_Javascript_checkbox.checked === true){
        Mainarray.push("Javascript")
    }else{ 
        let index_Javascript = Mainarray.indexOf("Javascript")
        Mainarray.splice(index_Javascript,1)}
})
let selection_Fullstack_checkbox = document.getElementById("selection_Fullstack_checkbox")
selection_Fullstack_checkbox.addEventListener("click", ()=>{
    if(selection_Fullstack_checkbox.checked === true){
        Mainarray.push("Fullstack")
    }else{ 
        let index_Fullstack = Mainarray.indexOf("Fullstack")
        Mainarray.splice(index_Fullstack,1)}
})
let selection_Midweight_checkbox = document.getElementById("selection_Midweight_checkbox")
selection_Midweight_checkbox.addEventListener("click", ()=>{
    if(selection_Midweight_checkbox.checked === true){
        Mainarray.push("Midweight")
    }else{ 
        let index_Midweight = Mainarray.indexOf("Midweight")
        Mainarray.splice(index_Midweight,1)}
})
let selection_Python_checkbox = document.getElementById("selection_Python_checkbox")
selection_Python_checkbox.addEventListener("click", ()=>{
    if(selection_Python_checkbox.checked === true){
        Mainarray.push("Python")
    }else{ 
        let index_Python = Mainarray.indexOf("Python")
        Mainarray.splice(index_Python,1)}
})
let selection_React_checkbox = document.getElementById("selection_React_checkbox")
selection_React_checkbox.addEventListener("click", ()=>{
    if(selection_React_checkbox.checked === true){
        Mainarray.push("React")
    }else{ 
        let index_React = Mainarray.indexOf("React")
        Mainarray.splice(index_React,1)}
})
let selection_Junior_checkbox = document.getElementById("selection_Junior_checkbox")
selection_Junior_checkbox.addEventListener("click", ()=>{
    if(selection_Junior_checkbox.checked === true){
        Mainarray.push("Junior")
    }else{ 
        let index_Junior = Mainarray.indexOf("Junior")
        Mainarray.splice(index_Junior,1)}
})
let selection_Sass_checkbox = document.getElementById("selection_Sass_checkbox")
selection_Sass_checkbox.addEventListener("click", ()=>{
    if(selection_Sass_checkbox.checked === true){
        Mainarray.push("Sass")
    }else{ 
        let index_Sass = Mainarray.indexOf("Sass")
        Mainarray.splice(index_Sass,1)}
})
let selection_Ruby_checkbox = document.getElementById("selection_Ruby_checkbox")
selection_Ruby_checkbox.addEventListener("click", ()=>{
    if(selection_Ruby_checkbox.checked === true){
        Mainarray.push("Ruby")
    }else{ 
        let index_Ruby = Mainarray.indexOf("Ruby")
        Mainarray.splice(index_Ruby,1)}
})
let selection_Backend_checkbox = document.getElementById("selection_Backend_checkbox")
selection_Backend_checkbox.addEventListener("click", ()=>{
    if(selection_Backend_checkbox.checked === true){
        Mainarray.push("Backend")
    }else{ 
        let index_Backend = Mainarray.indexOf("Backend")
        Mainarray.splice(index_Backend,1)}
})
let selection_RoR_checkbox = document.getElementById("selection_RoR_checkbox")
selection_RoR_checkbox.addEventListener("click", ()=>{
    if(selection_RoR_checkbox.checked === true){
        Mainarray.push("RoR")
    }else{ 
        let index_RoR = Mainarray.indexOf("RoR")
        Mainarray.splice(index_RoR,1)}
})
let selection_Vue_checkbox = document.getElementById("selection_Vue_checkbox")
selection_Vue_checkbox.addEventListener("click", ()=>{
    if(selection_Vue_checkbox.checked === true){
        Mainarray.push("Vue")
    }else{ 
        let index_Vue = Mainarray.indexOf("Vue")
        Mainarray.splice(index_Vue,1)}
})
let selection_Frontend_checkbox = document.getElementById("selection_Frontend_checkbox")
selection_Frontend_checkbox.addEventListener("click", ()=>{
    if(selection_Frontend_checkbox.checked === true){
        Mainarray.push("Frontend")
    }else{ 
        let index_Frontend = Mainarray.indexOf("Frontend")
        Mainarray.splice(index_Frontend,1)}
})
let selection_Django_checkbox = document.getElementById("selection_Django_checkbox")
selection_Django_checkbox.addEventListener("click", ()=>{
    if(selection_Django_checkbox.checked === true){
        Mainarray.push("Django")
    }else{ 
        let index_Django = Mainarray.indexOf("Django")
        Mainarray.splice(index_Django,1)}
})


let check_categories_btn  = document.getElementById("check_categories_btn")
check_categories_btn.addEventListener("click", ()=>{
    lower_body.innerHTML = ""
    for(let i = 0;i< objectarray.length;i++){
        if(Mainarray.every(e => objectarray[i].jobtags.includes(e))){
            
            let cards = document.createElement("DIV")
            cards.id ="card"
            lower_body.appendChild(cards)
            let companyImage = document.createElement("IMG")
            companyImage.id = "companyImage"
            companyImage.setAttribute("src", `${objectarray[i].imgSRC}`)
            cards.appendChild(companyImage)
            let cardFirstLine = document.createElement("DIV")
            cardFirstLine.id = "cardFirstLine"
            cards.appendChild(cardFirstLine)
            let companyname = document.createElement("DIV")
            companyname.id = "companyname"
            companyname.innerHTML = `${objectarray[i].companyName}`
            cardFirstLine.appendChild(companyname)
            let companyname_TAGNew = document.createElement("DIV")
            companyname_TAGNew.id = "companyname-TAGNew"
            companyname_TAGNew.innerHTML = `${objectarray[i].isNew ===true ? "NEW" : companyname_TAGNew.style.display = "none"}`
            cardFirstLine.appendChild(companyname_TAGNew)
            let companyname_TAGFeatured = document.createElement("DIV")
            companyname_TAGFeatured.id = "companyname-TAGFeatured"
            companyname_TAGFeatured.innerHTML = `${objectarray[i].isFeatured ===true ? "FEAUTURED" : companyname_TAGFeatured.style.display = "none"}`
            cardFirstLine.appendChild(companyname_TAGFeatured)
            let jobDescription = document.createElement("DIV")
            jobDescription.id = "jobDescription"
            jobDescription.innerHTML = `${objectarray[i].jobTitle}`
            cards.appendChild(jobDescription)
            let cardlastline = document.createElement("DIV")
            cardlastline.id = "cardlastline"
            cards.appendChild(cardlastline)
            let postdate = document.createElement("DIV")
            postdate.id = "postdate"
            postdate.innerHTML = `${objectarray[i].days}`
            cardlastline.appendChild(postdate)
            let emptyspace = document.createElement("DIV")
            emptyspace.classList.add("emptyspace")
            cardlastline.appendChild(emptyspace)
            let contractType = document.createElement("DIV")
            contractType.id = "contractType"
            contractType.innerHTML = `${objectarray[i].contractType}`
            cardlastline.appendChild(contractType)
            let emptyspace2 = document.createElement("DIV")
            emptyspace2.classList.add("emptyspace")
            cardlastline.appendChild(emptyspace2)
            let location = document.createElement("DIV")
            location.id = "location"
            location.innerHTML = `${objectarray[i].location}`
            cardlastline.appendChild(location)
            let line = document.createElement("hr")
            cards.appendChild(line)
            let tagsDiv = document.createElement("DIV")
            tagsDiv.id = "tagsDiv"
            cards.appendChild(tagsDiv)
            for(let tag of objectarray[i].jobtags){
                let tagel = document.createElement("DIV")
                tagel.innerHTML = tag
                tagel.classList.add("tags")
                tagsDiv.appendChild(tagel)
            }
            
        }
        
    } 
            let cards = document.createElement("DIV")
            cards.id ="card"
            cards.innerHTML = "NO SUCH JOBS AVAILABLE NOW"
            lower_body.appendChild(cards)
    
    select_category.style.display = "none"
    
})



