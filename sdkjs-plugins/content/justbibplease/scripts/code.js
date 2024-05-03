(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const dForm = document.getElementById("formView");
        const dControl = document.getElementById("controls");
        const dAuthorBox = document.getElementById("authorsView");
        const dGenButton = document.getElementById("generate");
        const dRes = document.getElementById("result");

        function space() {
            let br = document.createElement("br");
            dForm.appendChild(br);
        }

        function addAuthor() {
            const authorContainer = document.createElement("div");
            authorContainer.classList.add("author-container");

            const nameContainer = document.createElement("div");
            const nameLabel = document.createElement("label");
            nameLabel.textContent = "Name: ";

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.required = true;
            nameInput.size = "10";
            nameInput.placeholder = "Name";

            const surnameContainer = document.createElement("div");
            const surnameLabel = document.createElement("label");
            surnameLabel.textContent = "Surname: ";

            const surnameInput = document.createElement("input");
            surnameInput.type = "text";
            surnameInput.required = true;
            surnameInput.size = "10";
            surnameInput.placeholder = "Surname";

            const addButton = document.createElement("button");
            addButton.id = "addAuthors";
            addButton.insertAdjacentHTML("afterbegin", "&#x002B;");
            addButton.addEventListener("click", addAuthor);

            const deleteButton = document.createElement("button");
            deleteButton.insertAdjacentHTML("afterbegin", "&#x1F5D1;");
            deleteButton.addEventListener("click", function () {
                let currentContainers =
                    document.getElementsByClassName("author-container");
                if (currentContainers.length > 1) {
                    authorContainer.parentNode.removeChild(authorContainer);
                }
            });

            nameContainer.appendChild(nameLabel);
            nameContainer.appendChild(nameInput);
            surnameContainer.appendChild(surnameLabel);
            surnameContainer.appendChild(surnameInput);
            authorContainer.appendChild(nameContainer);
            authorContainer.appendChild(surnameContainer);
            authorContainer.appendChild(deleteButton);
            authorContainer.appendChild(addButton);
            dAuthorBox.appendChild(authorContainer);
        }

        function checkAuthors() {
            if (
                document.getElementsByClassName("author-container").length == 0
            ) {
                addAuthor();
            }
        }

        function addTitle() {
            if (document.getElementById("title") == null) {
                const titleBox = document.createElement("div");

                const titleLabel = document.createElement("label");
                titleLabel.textContent = "Title: ";

                const titleInput = document.createElement("input");
                titleInput.type = "text";
                titleInput.id = "title";
                titleInput.required = true;
                titleInput.placeholder = "Title";

                titleBox.appendChild(titleLabel);
                titleBox.appendChild(titleInput);
                dForm.appendChild(titleBox);
                space();
            }
        }

        function addPublisher() {
            if (document.getElementById("publisher") == null) {
                const pubBox = document.createElement("div");

                const pubLabel = document.createElement("label");
                pubLabel.textContent = "Publisher: ";

                const pubInput = document.createElement("input");
                pubInput.type = "text";
                pubInput.id = "publisher";
                pubInput.required = true;
                pubInput.placeholder = "Publisher";

                pubBox.appendChild(pubLabel);
                pubBox.appendChild(pubInput);
                dForm.appendChild(pubBox);
                space();
            }
        }

        function addPlace() {
            if (document.getElementById("place") == null) {
                const placeBox = document.createElement("div");

                const placeLabel = document.createElement("label");
                placeLabel.textContent = "Place: ";

                const placeInput = document.createElement("input");
                placeInput.type = "text";
                placeInput.id = "place";
                placeInput.required = true;
                placeInput.placeholder = "Place";

                placeBox.appendChild(placeLabel);
                placeBox.appendChild(placeInput);
                dForm.appendChild(placeBox);
                space();
            }
        }

        function addYear() {
            if (document.getElementById("year") == null) {
                const yearBox = document.createElement("div");

                const date = new Date();

                const yearLabel = document.createElement("label");
                yearLabel.textContent = "Year: ";

                const yearInput = document.createElement("input");
                yearInput.type = "number";
                yearInput.id = "year";
                yearInput.pattern = "[0-9]{4}";
                yearInput.placeholder = generateNumber(
                    1121,
                    date.getFullYear()
                );

                yearBox.appendChild(yearLabel);
                yearBox.appendChild(yearInput);
                dForm.appendChild(yearBox);
                space();

                document
                    .getElementById("year")
                    .addEventListener("click", updateDay);
            }
        }

        function addMonth() {
            if (document.getElementById("month") == null) {
                const monthBox = document.createElement("div");

                const monthLabel = document.createElement("label");
                monthLabel.textContent = "Month: ";

                const monthSelect = document.createElement("select");
                monthSelect.id = "month";

                monthBox.appendChild(monthLabel);
                monthBox.appendChild(monthSelect);
                dForm.appendChild(monthBox);
                space();

                const months = {
                    January: 1,
                    February: 2,
                    March: 3,
                    April: 4,
                    May: 5,
                    June: 6,
                    July: 7,
                    August: 8,
                    September: 9,
                    October: 10,
                    November: 11,
                    December: 12,
                };
                for (let month in months) {
                    let monthOpt = document.createElement("option");

                    monthOpt.value = months[month];
                    monthOpt.textContent = month;

                    monthSelect.appendChild(monthOpt);
                }
                document
                    .getElementById("month")
                    .addEventListener("click", updateDay);
            }
        }

        function updateDay() {
            const Month = document.getElementById("month");
            const Year = document.getElementById("year");
            const selectedMonth = Month? Month.value: '';
            const selectedYear = Year? Year.value: '';
            if (selectedMonth && selectedYear) {
                console.log(selectedMonth);
                console.log(selectedYear);
                let calcDays = new Date(
                    selectedYear,
                    selectedMonth,
                    0
                ).getDate();
                const dayInput = document.getElementById("day");
                if (dayInput) {
                    dayInput.max = calcDays;
                }
            }
        }

        function addDay() {
            if (document.getElementById("day") == null) {
                const dayBox = document.createElement("div");

                const dayLabel = document.createElement("label");
                dayLabel.textContent = "Day: ";

                const dayInput = document.createElement("input");
                dayInput.type = "number";
                dayInput.id = "day";
                dayInput.pattern = "[0-9]{2}";
                dayInput.min = 1;
                dayInput.max = 31;
                dayInput.placeholder = generateNumber(1, 29);

                dayBox.appendChild(dayLabel);
                dayBox.appendChild(dayInput);
                dForm.appendChild(dayBox);
                space();
                updateDay();
            }
        }

        function addAccessYear() {
            if (document.getElementById("ayear") == null) {
                const ayearBox = document.createElement("div");

                const date = new Date();

                const ayearLabel = document.createElement("label");
                ayearLabel.textContent = "Access year: ";

                const ayearInput = document.createElement("input");
                ayearInput.type = "number";
                ayearInput.id = "ayear";
                ayearInput.pattern = "[0-9]{4}";
                ayearInput.placeholder = generateNumber(
                    1121,
                    date.getFullYear()
                );

                ayearBox.appendChild(ayearLabel);
                ayearBox.appendChild(ayearInput);
                dForm.appendChild(ayearBox);
                space();

                document
                    .getElementById("ayear")
                    .addEventListener("click", updateAccessDay);
            }
        }

        function addAccessMonth() {
            if (document.getElementById("amonth") == null) {
                const amonthBox = document.createElement("div");

                const amonthLabel = document.createElement("label");
                amonthLabel.textContent = "Access month: ";

                const amonthSelect = document.createElement("select");
                amonthSelect.id = "amonth";

                amonthBox.appendChild(amonthLabel);
                amonthBox.appendChild(amonthSelect);
                dForm.appendChild(amonthBox);
                space();

                const amonths = {
                    January: 1,
                    February: 2,
                    March: 3,
                    April: 4,
                    May: 5,
                    June: 6,
                    July: 7,
                    August: 8,
                    September: 9,
                    October: 10,
                    November: 11,
                    December: 12,
                };
                for (let amonth in amonths) {
                    let amonthOpt = document.createElement("option");

                    amonthOpt.value = amonths[amonth];
                    amonthOpt.textContent = amonth;

                    amonthSelect.appendChild(amonthOpt);
                }
                document
                    .getElementById("amonth")
                    .addEventListener("click", updateAccessDay);
            }
        }

        function updateAccessDay() {
            const Month = document.getElementById("amonth");
            const Year = document.getElementById("ayear");
            const selectedMonth = Month? Month.value: '';
            const selectedYear = Year? Year.value: '';
            if (selectedMonth && selectedYear) {
                console.log(selectedMonth);
                console.log(selectedYear);
                let calcDays = new Date(
                    selectedYear,
                    selectedMonth,
                    0
                ).getDate();
                const dayInput = document.getElementById("day");
                if (dayInput) {
                    dayInput.max = calcDays;
                }
            }
        }

        function addAccessDay() {
            if (document.getElementById("aday") == null) {
                const adayBox = document.createElement("div");

                const adayLabel = document.createElement("label");
                adayLabel.textContent = "Access day: ";

                const adayInput = document.createElement("input");
                adayInput.type = "number";
                adayInput.id = "day";
                adayInput.pattern = "[0-9]{2}";
                adayInput.min = 1;
                adayInput.max = 31;
                adayInput.placeholder = generateNumber(1, 29);

                adayBox.appendChild(adayLabel);
                adayBox.appendChild(adayInput);
                dForm.appendChild(adayBox);
                space();
                updateAccessDay();
            }
        }

        function addRedacted() {
            if (document.getElementById("red") == null) {
                const redactedBox = document.createElement("div");
                redactedBox.title =
                    "By default the redacted mark will be applied on the first author. The first author is indicated by green border.";

                const redLabel = document.createElement("label");
                redLabel.textContent = "Redacted: ";
                redLabel.htmlFor = "red";

                const redCheck = document.createElement("input");
                redCheck.id = "red";
                redCheck.type = "checkbox";

                redactedBox.appendChild(redLabel);
                redactedBox.appendChild(redCheck);
                dControl.appendChild(redactedBox);

                redCheck.addEventListener("change", function () {
                    let authorContainers =
                        document.getElementsByClassName("author-container");
                    if (this.checked) {
                        if (authorContainers[0]) {
                            authorContainers[0].classList.add("highlighted");
                        }
                    } else if (authorContainers[0]) {
                        authorContainers[0].classList.remove("highlighted");
                    }
                });
            }
        }

        function addDateFormat() {
            if (document.getElementById("dateformat") == null) {
                const dateFormatBox = document.createElement("div");
                dateFormatBox.title = "Specifies date format";
                
                const dateFormatLabel = document.createElement("label");
                dateFormatLabel.textContent = "Date format: ";

                const dateFormatSelect = document.createElement("select");
                dateFormatSelect.id = "dateformat";

                dateFormatBox.appendChild(dateFormatLabel);
                dateFormatBox.appendChild(dateFormatSelect);
                dControl.appendChild(dateFormatBox);
                
                const formats = ["DMY", "MDY", "YMD"];

                formats.forEach((format) => {
                    let optionsOpt = document.createElement("option");

                    optionsOpt.value = format;
                    optionsOpt.textContent = format;

                    dateFormatSelect.appendChild(optionsOpt);
                });

            }
        }

        function addDataSeparator() {
            if (document.getElementById("dateseparator")== null){
                const dateSeparatorBox = document.createElement("div");
                dateSeparatorBox.title= "Sets the delimiter between dates.";

                const dateSeparatorLabel = document.createElement("label");
                dateSeparatorLabel.textContent = "Date separator: ";
                
                const dateSeparatorSelect = document.createElement("select");
                dateSeparatorSelect.id = "dateseparator";

                dateSeparatorBox.appendChild(dateSeparatorLabel);
                dateSeparatorBox.appendChild(dateSeparatorSelect);
                dControl.appendChild(dateSeparatorBox);

                const separators = {
                    ".": "Dot .",
                    ",": "Comma ,",
                    "-": "Dash -",
                    "/": "Slash /"
                };

                for (let separator in separators) {
                    let optionsOpt = document.createElement("option");
                    optionsOpt.value = separator;
                    optionsOpt.textContent = separators[separator];
            
                    dateSeparatorSelect.appendChild(optionsOpt);
                }
            }
        }

        function addAnnotation() {
            if (document.getElementById("annot") == null) {
                const annotBox = document.createElement("div");
                annotBox.title = "Use to give some context on the book.";

                const annotLabel = document.createElement("label");
                annotLabel.textContent = "Annotation: ";
                annotLabel.htmlFor = "annot";

                const annotCheck = document.createElement("input");
                annotCheck.id = "annot";
                annotCheck.type = "checkbox";

                annotBox.appendChild(annotLabel);
                annotBox.appendChild(annotCheck);
                dControl.appendChild(annotBox);
                annotCheck.addEventListener("click", checkAnnotation);
            }
        }

        function checkAnnotation() {
            const checkAnnot = document.getElementById("annot");
            const annotationLabel = document.createElement("label");
            annotationLabel.htmlFor = "annotfield";
            annotationLabel.textContent = "Annotation: ";
            const annotationBox = document.createElement("div");
            const annotationField = document.createElement("textarea");
            annotationField.id = "annotfield";
            if (checkAnnot.checked) {
                annotationBox.appendChild(annotationLabel);
                annotationBox.appendChild(annotationField);
                dForm.appendChild(annotationBox);
            } else {
                removeDivWithContents("annotfield");
            }
        }

        function addURL() {
            if (document.getElementById("url") == null) {
                const urlBox = document.createElement("div");

                const urlLabel = document.createElement("label");
                urlLabel.textContent = "URL: ";

                const urlInput = document.createElement("input");
                urlInput.type = "url";
                urlInput.id = "url";
                urlInput.required = true;
                urlInput.placeholder = "https://www.example.com/";

                urlBox.appendChild(urlLabel);
                urlBox.appendChild(urlInput);
                dForm.appendChild(urlBox);
                space();
            }
        }

        function addDOI() {
            if (document.getElementById("doi") == null) {
                const doiBox = document.createElement("div");

                const doiLabel = document.createElement("label");
                doiLabel.textContent = "DOI: ";

                const doiInput = document.createElement("input");
                doiInput.type = "text";
                doiInput.id = "doi";
                doiInput.required = true;
                // eslint-disable-next-line no-useless-escape
                doiInput.pattern = "^10\.\d{4,9}\/\d+$|^doi:[a-zA-Z0-9\-]+$";
                doiInput.placeholder = "https://www.example.com/";

                doiBox.appendChild(doiLabel);
                doiBox.appendChild(doiInput);
                dForm.appendChild(doiBox);
                space();
            }
        }


        function generateNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function giveNumbers(min, max) {
            let num1 = generateNumber(min, max);
            let num2 = generateNumber(min, max);
            if (num1 < num2) {
                return [num1, num2];
            } else if (num2 < num1) {
                return [num2, num1];
            } else {
                giveNumbers(min, max);
            }
        }

        function addPages() {
            if (document.getElementById("pages") == null) {
                const pageBox = document.createElement("div");
                pageBox.title =
                    "When citing an article, use page range instead of giving page number.";

                const pageLabel = document.createElement("label");
                pageLabel.textContent = "Pages: ";

                const pageInput = document.createElement("input");
                pageInput.type = "text";
                pageInput.id = "pages";
                pageInput.pattern = "^\\d+(\\s*-\\s*\\d+)?$";

                const nums = giveNumbers(21, 500);
                pageInput.placeholder = `${generateNumber(21, 500)} or ${
                    nums[0]
                }-${nums[1]}`;

                pageBox.appendChild(pageLabel);
                pageBox.appendChild(pageInput);
                dForm.appendChild(pageBox);
                space();
            }
        }

        function citationFormat() {
            if (document.getElementById("citationformat") == null) {
                const citBox = document.createElement("div");

                const citLabel = document.createElement("label");
                citLabel.htmlFor = "citationformat";
                citLabel.textContent = "Bibliography style: ";

                const citFormat = document.createElement("select");
                citFormat.id = "citationformat";

                citBox.appendChild(citLabel);
                citBox.appendChild(citFormat);
                dControl.appendChild(citBox);

                const citList = ["APA6", "APA7", "MLA", "Chicago"];
                citList.forEach(function (input) {
                    let citOpt = document.createElement("option");
                    citOpt.value = input;
                    citOpt.textContent = input;
                    citFormat.appendChild(citOpt);
                });
            }
        }

        function sanitizeResult(name) {
            // eslint-disable-next-line no-undef
            return DOMPurify.sanitize(name);
        }

        function capitalizeFirstLetter(string) {
            string = string.toLowerCase();
            return string[0].toUpperCase() + string.slice(1);
        }

        function getResults() {
            dRes.textContent = "";

            const authors = dAuthorBox.querySelectorAll(
                ".author-container input[type='text']"
            );

            const preferences = [
                { id: "citationformat", element: document.getElementById("citationformat") },
                { id: "redacted", element: document.getElementById("citationformat") },
                { id: "dateseparator", element: document.getElementById("dateseparator") },
                { id: "dateformat", element: document.getElementById("dateformat") }
            ]

            const dataHooks = [
                { id: "title", element: document.getElementById("title") },
                { id: "publisher", element: document.getElementById("publisher") },
                { id: "place", element: document.getElementById("place") },
                { id: "pages", element: document.getElementById("pages") },
                { id: "day", element: document.getElementById("day") },
                { id: "month", element: document.getElementById("month") },
                { id: "year", element: document.getElementById("year") },
                { id: "url", element: document.getElementById("url") },
                { id: "doi", element: document.getElementById("doi") },
                { id: "accessDay", element: document.getElementById("aday") },
                { id: "accessMonth", element: document.getElementById("amonth") },
                { id: "accessYear", element: document.getElementById("ayear") },
                { id: "annotation", element: document.getElementById("annot") }
            ];

            const sanitizedValues = {};
            const getPreferences = {};

            preferences.forEach(({id, element}) => {
                getPreferences[id] = element ? element.value : "";
                console.log(`${id}, ${element.value}`);
            });

            dataHooks.forEach(({ id, element }) => {
                sanitizedValues[id] = element ? sanitizeResult(element.value) : "";
            });

            const paddedMonthValue = sanitizedValues.month ? ("0" + sanitizedValues.month.slice(-2)) : "";
            const accessDate = {
                day: sanitizedValues.day,
                month: paddedMonthValue,
                year: sanitizedValues.year,
                getFull: function(){
                    if (this.year&&this.month&&this.day) {
                        return `${this.day}.${this.month}.${this.year}`;
                    } else if (this.year&&this.month) {
                        return `${this.month}.${this.year}`;
                    } else if (this.year) {
                        return `${this.year}`
                    }
                }
            };
            
            //const pob = `title: ${titles}, publisher: ${publishers}, place: ${places}, date: ${date.getFull()}, pages: ${pages}, citation: ${citations}, url: ${urls}, doi: ${dois}`;

            let sanitizedNames = Array.from(authors).map((author) =>
                sanitizeResult(capitalizeFirstLetter(author.value))
            );

            sanitizedNames = sortAuthors(sanitizedNames);

            sanitizedNames.forEach((name, index) => {
                let fields = index % 2 === 0 ? "Name" : "Surname";
                let value = name;
                dRes.textContent += fields + ": " + value + "\n";
            });
            
            dRes.textContent += "udane";
        }
        dGenButton.addEventListener("click", getResults);

        function sortAuthors(list, mode = 0) {
            if (list && list.length > 2) {
                let tempList = [];
                let startIndex = mode === 1 ? 2 : 0;

                for (let i = 0; i < list.length; i += 2) {
                    tempList.push(`${list[i + 1]} ${list[i]}`);
                }

                tempList.sort((a, b) => a.localeCompare(b));

                let listIdx = startIndex;
                for (let i = startIndex; i < tempList.length; i++) {
                    let sortedElement = tempList[i].split(" ");

                    if (listIdx < list.length) {
                        list[listIdx] = sortedElement[1];

                        list[listIdx + 1] = sortedElement[0];
                        listIdx += 2;
                    }
                }
            }
            return list;
        }

        function removeDivWithContents(id) {
            let containerDiv = document.querySelector(`#${id}`).closest("div");

            if (containerDiv) {
                containerDiv.remove();
            }
        }

        if (!dForm || !dRes) {
            document.body.innerHTML = "Reload the plugin!";
        }
        document.getElementById("citingWhat").onchange = function () {
            let dType = document.getElementById("citingWhat").value;
            citationFormat();
            addRedacted();
            addAnnotation();
            addDateFormat();
            addDataSeparator();
            switch (dType) {
                case "null":
                    dForm.style.display = "none";
                    break;
                case "book":
                    dForm.style.display = "block";
                    checkAuthors();
                    addTitle();
                    addPublisher();
                    addPlace();
                    addDay();
                    addMonth();
                    addYear();
                    addPages();
                    addURL();
                    addDOI();
                    break;
                case "chapter":
                    dForm.style.display = "block";
                    checkAuthors();
                    citationFormat();
                    break;
                case "dbook":
                    dForm.style.display = "block";
                    checkAuthors();
                    break;
                case "article":
                    dForm.style.display = "block";
                    checkAuthors();
                    break;
                case "web":
                    dForm.style.display = "block";
                    checkAuthors();
                    break;
                case "other":
                    dForm.style.display = "block";
                    checkAuthors();
                    break;
            }
        };
    });

    // eslint-disable-next-line no-unused-vars
    window.Asc.plugin.button = function (id) {
        this.executeCommand("close", "");
    };
})();
