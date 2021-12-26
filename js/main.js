// import { doctors } from "./sample.json";

const doctors =[
    {
        name: "Pediatric BMT",
        list: [{
        img: "user.png",
        name:"Dr. Vijay Agarwal",
        education:"MD, MRCP, PhD,CCT ",
        education1:"Lead & Sr. Consultant - Medical Oncology & Haematology",
        experiance:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."

    },
    {
        img: "user.png",
        name:"Dr. Vijay Agarwal",
        education:"MD, MRCP, PhD,CCT ",
        education1:"Lead & Sr. Consultant - Medical Oncology & Haematology",
        experiance:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."

    }]
    },
    {
        name: "Adult BMT ",
        list: [
    {
        img: "user.png",
        name:"Dr. Vijay Agarwal",
        education:"MD, MRCP, PhD,CCT ",
        education1:"Lead & Sr. Consultant - Medical Oncology & Haematology",
        experiance:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."

    },
    {
        img: "user.png",
        name:"Dr. Vijay Agarwal",
        education:"MD, MRCP, PhD,CCT ",
        education1:"Lead & Sr. Consultant - Medical Oncology & Haematology",
        experiance:"Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."

    }]
  }
]

const boneAnsList =[
        "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.",
        "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.",
        "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad. ",
        "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.",
        "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.",
]

const immuneList = [
    {
        img :"Group 2.png",
        description: "Failure to thrive – not gaining weight and height as per the age norms"
    },
    {
        img :"Group.png",
        description: "Infections warranting multiple hospitalizations"
    },
    {
        img :"Group (1).png",
        description: "Requirement of intravenous antibiotics to clear infections"
    },
    {
        img :"Group (2).png",
        description: "2 or more episodes of pneumonia"
    },
    {
        img :"Group (3).png",
        description: "Family history of death of children at young age due to immune deficiency "
    },
    {
        img :"Group (4).png",
        description: "Repeated episodes of diarrhea"
    },
    {
        img :"Group 2 (1).png",
        description: "2 or more episodes of sinus infections within a year"
    },
    {
        img :"Group 2 (2).png",
        description: "2 or more episodes of ear discharge"
    },
    {
        img :"Group 2 (3).png",
        description: "Repeated skin infections"
    },
    {
        img :"Group (5).png",
        description: "Repeated abscess formation (liver abscess, brain abscess)"
    },
]

const testimonials = [
    [
        {
            name:"John Deo",
            designation: "Software Engeeneer",
        },
        {
            name:"John Deo",
            designation: "Software Engeeneer",
        }
    ],
    [
        {
            name:"John Deo",
            designation: "Software Engeeneer",
        },
        {
            name:"John Deo",
            designation: "Software Engeeneer",
        }
    ]
]

function loadCard(list){
    var x = "";
    for (let i=0; i<list.length; i++) {
        let data = list[i];
        x = x + `<div class="cardWrp">
                        <img class="img" src="./image/${data.img}" />
                        <div class="name">${data.name}</div>
                        <div class="education">${data.education} </div>
                        <div class="education">${data.education1} </div>

                        <div class="under-line"></div>
                        <div class="information">${data.experiance}
                        </div>
                        <button class="know-more">Know More</button>
                        <div class="doctor-line"></div>

                    </div>`
    }
    return x;
}

function testimonialsItem(list){
    var x = "";
    for (let i=0; i<list.length; i++) {
        let data = list[i];
        x = x + ` <div class="carouselItem">
        <div class="top">
            <div class="top-img"><img src="./image/Bitmap.png" width="100%" height="100%" />
            </div>
            <div class="top-text">
                <h4>John Doe</h4>
                <p>Softwere Engineer</p>
            </div>
            <div class="top-rigth-img"><img src="./image/semi.png" width="100%" height="100%" />
            </div>
        </div>
        <div class="bottom">It is a long established fact that a reader will be distracted by
            the readable
            content of a page when looking at its layout. </div>
    </div>`
    }
    return x;
}

function loadDocturesProfile(){
    var element = document.getElementsByClassName("doctor-wrapper")[0];
    var doctorContent = "";
    for(let i=0; i<doctors.length; i++){
        let item = doctors[i];
        doctorContent = doctorContent + `
        <div class="doctorInformation">
                    <div class="headline">${item.name}</div>
                    ${loadCard(item.list)}
                </div>
        `
    }
    element.innerHTML = doctorContent;
}

function loadBoneQuestions(){
    var element = document.getElementsByClassName("answerWrap")[0];
    var boneContent = "";
    for(let i=0; i<boneAnsList.length; i++){
        let item = boneAnsList[i];
        boneContent = boneContent + `
        <div class="answer"><div class="iconWrap"><img src="./image/hospitalIcon.png" width="100%" height="100%"/> </div>
        <div class="content">${item}</div></div>
        `
    }
    element.innerHTML = boneContent;
}

function loadImmune(){
    var element = document.getElementsByClassName("immune-container")[0];
    var immuneContent = "";
    for(let i=0; i<immuneList.length; i++){
        let item = immuneList[i];
        immuneContent = immuneContent + `
        <div class="immune-item">
                        <div class="Groupimg"><img src="./image/${item.img}" /></div>
                        <div class="Failure">${item.description}</div>
                    </div>`
    }
    element.innerHTML = immuneContent;
}



function loadTestimonials(){
    var element = document.getElementsByClassName("carousel-inner")[0];
    var testimonialContent = "";
    for(let i=0; i<testimonials.length; i++){
        let item = testimonials[i];
        testimonialContent = testimonialContent + `
        <div class="carousel-item ${i===0? 'active':''}" data-bs-interval="1000">
                        <div class="carouselContentWrap">
                            ${testimonialsItem(item)}
                        </div>
                    </div>`
    }
    element.innerHTML = testimonialContent;
}


function initalLoad(){
    loadDocturesProfile();
    loadBoneQuestions();
    loadImmune();
    loadTestimonials();
  }

