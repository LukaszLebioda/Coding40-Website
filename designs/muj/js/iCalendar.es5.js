/*
 * iCalendar v1.0-alpha
 *
 *
 * MIT License
 *
 * Copyright (c) 2019 Nikola Knezevic
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of iCalendar software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and iCalendar permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var iCalendar = (function() {
    //Constructor
    function iCalendar(target) {
        if (!target) {
            throw new Error('iCalendar: Target argument missing!');
        } else {
            var elementExists = !!document.getElementById(target);
            if (elementExists == false) {
                throw new Error('iCalendar: Specified target does not exist in DOM');
            }
        }
        this.target = target;
        this.version = 'v1.0-alpha';
        this.months = {
            0: "Styczen",
            1: "Luty",
            2: "Marzec",
            3: "Kwiecien",
            4: "Maj",
            5: "Czerwiec",
            6: "Lipiec",
            7: "Sierpien",
            8: "Wrzesien",
            9: "Pazdziernik",
            10: "Listopad",
            11: "Grudzien"
        };
        this.today = new Date();
        this.currentMonth = this.today.getMonth();
        this.currentYear = this.today.getFullYear();
        this.selectYear = this.currentYear;
        this.selectMonth = this.currentMonth;
        this.selectedDate = null;
        this.calendarBody = document.querySelector('#cal-frame table.curr tbody');
        this.events = [];
        this.apiUrl = null;
        this.eventsJSON = [];
    }

    iCalendar.prototype.render = function() {
        var structure = '<div id="cal"><div class="header"><a href="" class="prev"><span class="left button" id="prev"> &lang; </span></a><span class="month-year" id="label"> June 2020 </span><a href="" class="next"><span class="right button" id="next"> &rang; </span></a></div>';
        structure += '<table id="days"><td>sun</td><td class="weekday">mon</td><td class="weekday">tue</td><td class="weekday">wed</td><td class="weekday">thu</td><td class="weekday">fri</td><td>sat</td></table>';
        structure += '<div id="cal-frame"><table class="curr"><tbody id="calendar-body"></tbody></table></div>';
        structure += '</div>';

        document.getElementById(this.target).innerHTML = structure;
        this._updateCalendar(this.currentMonth, this.currentYear);
        this._eventHandler();
    }

    iCalendar.prototype._updateCalendar = function(month, year) {
        var firstDay = (new Date(year, month)).getDay();
        var tbl = document.getElementById("calendar-body"); // body of the calendar
        // clearing all previous cells
        tbl.innerHTML = "";

        // filing data about month and in the page via DOM.
        var monthAndYear = document.getElementById('label');
        monthAndYear.innerHTML = this.months[month] + " " + year;

        var date = 1;

        for (var calendarRow = 0; calendarRow < 6; calendarRow++) {
            // creates a table row
            var row = document.createElement("tr");

            //creating individual cells, filing them up with data.
            for (var callendarCell = 0; callendarCell < 7; callendarCell++) {
                if (calendarRow === 0 && callendarCell < firstDay) {
                    var cell = document.createElement("td");
                    cell.classList.add('nil');
                    var cellText = document.createTextNode("");
                    var div = document.createElement('div');
                    div.setAttribute('class', "day");
                    div.appendChild(cellText);
                    cell.appendChild(div);
                    row.appendChild(cell);
                } else if (date > this._daysInMonth(month, year)) {
                    break;
                } else {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(date);
                    var div = document.createElement('div');
                    div.setAttribute('class', "day");
                    var a = document.createElement('a');
                    var actualMonth = this.currentMonth + 1;
                    a.setAttribute('data-id', this.currentYear + '-' + actualMonth + '-' + date);
                    a.setAttribute('class', 'calendarLink');
                    a.appendChild(cellText);
                    div.appendChild(a);
                    // color today's date
                    if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
                        //cell.classList.add("bg-info");
                        div.classList.add('today');
                    }
                    //Check if date is weekend and apply styles
                    if (this._isWeekend(this.currentYear, this.currentMonth, date)) {
                        div.classList.add('weekend');
                    }
                    cell.appendChild(div);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row); // appending each row into calendar body.
        }
    }

    iCalendar.prototype.next = function() {
        this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
        this.currentMonth = (this.currentMonth + 1) % 12;
        this._updateCalendar(this.currentMonth, this.currentYear);
    }

    iCalendar.prototype.previous = function() {
        this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
        this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
        this._updateCalendar(this.currentMonth, this.currentYear);
    }

    iCalendar.prototype._daysInMonth = function(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    iCalendar.prototype._isWeekend = function(year, month, date) {
        var dt = new Date(year, month, date);
        if (dt.getDay() == 6 || dt.getDay() == 0) {
            return true;
        } else {
            return false;
        }
    }

    iCalendar.prototype._eventHandler = function() {
        var prevButton = document.querySelector("a.prev");
        prevButton.addEventListener("click", function(event) {
            event.preventDefault();
            this.previous();
        }.bind(this));

        var nextButton = document.querySelector("a.next");
        nextButton.addEventListener("click", function(event) {
            event.preventDefault();
            this.next();
        }.bind(this));

        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('calendarLink')) {
                //remove previously selected element
                var calendarLinks = document.getElementById('calendar-body').getElementsByClassName('selected-link');
                for (var i = 0; i < calendarLinks.length; i++) {
                    calendarLinks[i].classList.remove('selected-link');
                }
                //remove previously selected element
                var selectedElement = event.target;
                selectedElement.classList.add("selected-link");
                this.selectedDate = selectedElement.getAttribute("data-id");
                var cEvent = new Event("iCalendarDateSelected");
                document.dispatchEvent(cEvent);
                event.preventDefault();
            }
        }.bind(this));
    }

    return iCalendar;
})();