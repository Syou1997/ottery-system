//清單
const fullList = [
    {
        "name": "Ronnie Tseng",
        "team": ["Manager"]
    },
    {
        "name": "Helen Lu",
        "team": ["Manager"]
    },
    {
        "name": "Amber Hsu",
        "team": ["QDPM", "PM"]
    },
    {
        "name": "Wendy Chang",
        "team": ["QDPM", "PM"]
    },
    {
        "name": "Alisa Lin",
        "team": ["QDPM", "PM"]
    },
    {
        "name": "Loic Li",
        "team": ["QDPM", "PM"]
    },
    {
        "name": "Mars Huang",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Ken Kao",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Momo Liao",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Hungmin Chang",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Suika Hung",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Takashi Gao",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "Rei Liu",
        "team": ["HWPM", "PM"]
    },
    {
        "name": "White Hung",
        "team": ["PL"]
    },
    {
        "name": "Yu Jie Li",
        "team": ["PL"]
    },
    {
        "name": "YiJie Lai",
        "team": ["PL"]
    },
    {
        "name": "Mia Chang",
        "team": ["PL"]
    },
    {
        "name": "Betty Jheng",
        "team": ["PL"]
    },
    {
        "name": "Shou Hsu",
        "team": ["PL"]
    },
    {
        "name": "ShihHan Chang",
        "team": ["Intern"]
    },
    {
        "name": "Amber Tang",
        "team": ["Intern"]
    },
    {
        "name": "Clarence Chen",
        "team": ["Intern"]
    },
    {
        "name": "Chris Huang",
        "team": ["Intern"]
    },
    {
        "name": "Carter Chang",
        "team": ["Support"]
    },
    {
        "name": "Nemo Huang",
        "team": ["Support"]
    },
    {
        "name": "Joy Li",
        "team": ["Support"]
    },
    {
        "name": "Shuning Yu",
        "team": ["Support"]
    },
    {
        "name": "Jerry Chang",
        "team": ["Support"]
    },
    {
        "name": "Kevin Lin",
        "team": ["Support"]
    },
    {
        "name": "FD Fan",
        "team": ["Support"]
    },
    {
        "name": "Evelyn Tien",
        "team": ["FCCLMFI"]
    },
    {
        "name": "Annie Lee",
        "team": ["FCCLMFI"]
    }

];

//取得元素
//input的元素
const ManagerEl = document.getElementById("Manager");
const PMEl = document.getElementById("PM");
const QDPMEl = document.getElementById("QDPM");
const HWPMEl = document.getElementById("HWPM");
const PLEl = document.getElementById("PL");
const InternEl = document.getElementById("Intern");
const SupportEl = document.getElementById("Support");

//按鈕元素
const btnEl = document.querySelector("button");
//名字元素
const nameEl = document.getElementById("name");




//抽選按鈕
btnEl.addEventListener("click", function () {

    //如果全部沒勾
    if (ManagerEl.checked === false &&
        PMEl.checked === false &&
        QDPMEl.checked === false &&
        HWPMEl.checked === false &&
        PLEl.checked === false &&
        InternEl.checked === false &&
        SupportEl.checked === false) {
        // console.log("進入沒勾的方法");
        let randomNum = Math.floor(Math.random() * 100)
        while (randomNum >= fullList.length) {
            randomNum = Math.floor(Math.random() * 100)
        }
        const result = fullList[randomNum].name;
        nameEl.innerText = result;
    } else {
        //建立空清單
        let checkListed = [];
        // console.log("有勾");
        //長官有勾
        if (ManagerEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("Manager") !== -1) {
                    checkListed.push(item.name);
                    console.log(checkListed);


                }
            })
        }
        //PM有勾
        if (PMEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("PM") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }
        //QDPM有勾
        if (QDPMEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("QDPM") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }
        //HWPM有勾
        if (HWPMEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("HWPM") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }
        //PL有勾
        if (PLEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("PL") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }
        //Intern有勾
        if (InternEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("Intern") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }
        //Support有勾
        if (SupportEl.checked === true) {
            fullList.forEach((item) => {
                if (item.team.indexOf("Support") !== -1) {
                    checkListed.push(item.name);
                }
            })
        }

        //把重複的名字拿掉
        checkListed = checkListed.filter((item,index)=>{
            return checkListed.indexOf(item) === index;
        });
   
        //從有打勾的人裡面選一位出來
        let randomNum = Math.floor(Math.random() * 100)
        while (randomNum >= checkListed.length) {
            randomNum = Math.floor(Math.random() * 100)
        }
        result = checkListed[randomNum];
        nameEl.innerText = result;
    }



})


