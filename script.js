document.getElementById("submitBtn").addEventListener("click", () => {
    const form = document.getElementById("userForm");
    const fullName = document.getElementById("fullName");
    const faculty = document.getElementById("faculty");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const email = document.getElementById("email");

    let isValid = true;

    const fullNameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const facultyRegex = /^[А-Яа-яІЇЄҐіїєґ\s]+$/;
    const dobRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ']+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (field, regex) => {
        if (!regex.test(field.value.trim())) {
            field.classList.add("error");
            field.classList.remove("success");
            isValid = false;
        } else {
            field.classList.add("success");
            field.classList.remove("error");
        }
    };

    validateField(fullName, fullNameRegex);
    validateField(faculty, facultyRegex);
    validateField(dob, dobRegex);
    validateField(address, addressRegex);
    validateField(email, emailRegex);

    if (isValid) {
        alert(`
        ПІБ: ${fullName.value},
        Факультет: ${faculty.value},
        Дата народж.: ${dob.value},
        Адреса: ${address.value},
        e-mail: ${email.value}
      `);
        form.reset();
        document.querySelectorAll("input").forEach((input) => {
            input.classList.remove("success");
        });
    }
});

const table = document.getElementById("interactiveTable");
const colorPicker = document.getElementById("colorPicker");


for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        const cellNumber = i * 6 + j + 1;
        cell.textContent = cellNumber;

        if (cellNumber === 5) {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener("click", () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener("dblclick", () => {
                const allCells = table.getElementsByTagName("td");
                for (let c of allCells) {
                    if (c !== cell) {
                        c.style.backgroundColor = getRandomColor();
                    }
                }
            });
        }
    }
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}
