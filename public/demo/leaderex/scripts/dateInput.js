$(function () {
  var showMonths;
  if (windowWidth >= 1440) {
    showMonths = 3;
  } else if (windowWidth >= 1024) {
    showMonths = 2;
  } else {
    showMonths = 1;
  }

  moment.locale(momentLang);

  function inputValue(selectedDates) {
    var tip = '';
    holidayDates.forEach(function (element) {
      if (Date.parse(element.date) === +(selectedDates)) {
        tip = element.tip;
      }
    });
    workDates.forEach(function (element) {
      if (Date.parse(element.date) === +(selectedDates)) {
        tip = element.tip;
      }
    });
    specialDates.forEach(function (element) {
      if (Date.parse(element.date) === +(selectedDates)) {
        tip = element.tip;
      }
    });
    return tip;
  }

  $('.datepickr').flatpickr({
    animate: true,
    altInput: true,
    dateFormat: 'Y/m/d D',
    disableMobile: true,
    locale: flatpickrLang,
    minDate: 'today',
    showMonths: showMonths,
    onDayCreate: function (dObj, dStr, fp, dayElem) {
      var weekday = dayElem.dateObj.getDay();
      if (weekday === 0 || weekday === 6) {
        dayElem.className += ' holiday';
      }
      holidayDates.forEach(function (element) {
        if (Date.parse(element.date) === (+dayElem.dateObj)) {
          dayElem.className += ' holiday';
          dayElem.innerHTML += '<span class="tip">' + element.tip + '</span>';
        }
      });
      workDates.forEach(function (element) {
        if (Date.parse(element.date) === (+dayElem.dateObj)) {
          dayElem.className += ' workday';
          dayElem.innerHTML += '<span class="tip">' + element.tip + '</span>';
        }
      });
    },
    onChange: function (selectedDates, dateStr, instance) {
      var elem = instance.element;
      var calendar = $('#' + elem.id);
      var dayValue = '';
      var dayTip = '';

      dayValue = moment(selectedDates[0]).format('YYYY/MM/DD ddd');
      if (inputValue(selectedDates[0]) !== '') {
        dayTip = inputValue(selectedDates[0]);
      }

      calendar.next('input').val(dayValue);
      calendar.siblings('span.day_tip').text(dayTip);
    },
    formatDate: function (dateObj, formatString) {
      return moment(dateObj).format('YYYY/MM/DD ddd')
    }
  });

  $('.dates_range').each(function () {
    var fromDate = $(this).find('[data-input="fromDate"]');
    var toDate = $(this).find('[data-input="toDate"]');

    config = {
      mode: 'range',
      animate: true,
      altInput: true,
      dateFormat: 'Y/m/d D',
      disableMobile: true,
      locale: flatpickrLang,
      minDate: 'today',
      showMonths: showMonths,
      onDayCreate: function (dObj, dStr, fp, dayElem) {
        var weekday = dayElem.dateObj.getDay();
        if (weekday === 0 || weekday === 6) {
          dayElem.className += ' holiday';
        }
        holidayDates.forEach(function (element) {
          if (Date.parse(element.date) === (+dayElem.dateObj)) {
            dayElem.className += ' holiday';
            dayElem.innerHTML += '<span class="tip">' + element.tip + '</span>';
          }
        });
        workDates.forEach(function (element) {
          if (Date.parse(element.date) === (+dayElem.dateObj)) {
            dayElem.className += ' workday';
            dayElem.innerHTML += '<span class="tip">' + element.tip + '</span>';
          }
        });
      },
      onChange: function (selectedDates, dateStr, instance) {
        var elem = instance.element;
        var calendar = $(elem).data('input');
        var fromValue = '';
        var toValue = '';
        var fromTip = '';
        var toTip = '';

        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = selectedDates[1] - selectedDates[0];
        var days = Math.floor(millisBetween / millisecondsPerDay) + 1;
        if (days) {
          $(elem).parents('.dates_range').find('span.days').text(days);
        } else {
          $(elem).parents('.dates_range').find('span.days').text('0');
        }

        if (selectedDates[0]) {
          fromValue = moment(selectedDates[0]).format('YYYY/MM/DD ddd')
          if (inputValue(selectedDates[0]) !== '') {
            fromTip = inputValue(selectedDates[0]);
          }
        }
        if (selectedDates[1]) {
          toValue = moment(selectedDates[1]).format('YYYY/MM/DD ddd')
          if (inputValue(selectedDates[1]) !== '') {
            toTip = inputValue(selectedDates[1]);
          }
        }

        instance.close();

        if (calendar == 'fromDate') {
          picker2.setDate(selectedDates);
          fromDate.next('input').val(fromValue);
          fromDate.siblings('span.day_tip').text(fromTip);
          if (toValue == '') {
            picker2.open();
            toDate.siblings('span.day_tip').text('');
          } else {
            toDate.next('input').val(toValue);
            toDate.siblings('span.day_tip').text(toTip);
          }
          calendar == 'toDate';
        } else if (calendar == 'toDate') {
          picker1.setDate(selectedDates);
          toDate.next('input').val(toValue);
          fromDate.next('input').val(fromValue);
          toDate.siblings('span.day_tip').text(toTip);
          fromDate.siblings('span.day_tip').text(fromTip);
          if (toValue == '') {
            picker2.setDate(selectedDates);
            picker2.close();
            picker1.open();
            fromDate.siblings('span.day_tip').text('');
          }
        }
      },
      formatDate: function (dateObj, formatString) {
        return moment(dateObj).format('YYYY/MM/DD ddd');
      }
    };

    var picker1 = fromDate.flatpickr(config);
    var picker2 = toDate.flatpickr(config);
  });
})