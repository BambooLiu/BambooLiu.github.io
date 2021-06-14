$(function () {
  moment.locale(momentLang);

  $('.datepickr').flatpickr({
    mode: 'range',
    animate: true,
    altInput: true,
    dateFormat: 'Y/m/d',
    disableMobile: true,
    locale: flatpickrLang,
    onDayCreate: function (dObj, dStr, fp, dayElem) {
      var weekday = dayElem.dateObj.getDay();
      if (weekday === 0 || weekday === 6) {
        dayElem.className += ' holiday';
      }
      holidayDates.forEach(function (element) {
        if (Date.parse(element.date) === (+dayElem.dateObj)) {
          dayElem.className += ' holiday';
        }
      });
      workDates.forEach(function (element) {
        if (Date.parse(element.date) === (+dayElem.dateObj)) {
          dayElem.className += ' workday';
        }
      });
    },
    onChange: function (selectedDates, dateStr, instance) {
      var elem = instance.element;
      var calendar = $(elem).data('input');
      var fromValue = '';
      var toValue = '';

      if (selectedDates[0]) {
        fromValue = moment(selectedDates[0]).format('YYYY/MM/DD')
      }
      if (selectedDates[1]) {
        toValue = moment(selectedDates[1]).format('YYYY/MM/DD')
      }

      instance.close();

      if (calendar == 'fromDate') {
        picker2.setDate(selectedDates);
        fromDate.next('input').val(fromValue);
        if (toValue == '') {
          picker2.open();
        } else {
          toDate.next('input').val(toValue);
        }
        calendar == 'toDate';
      } else if (calendar == 'toDate') {
        picker1.setDate(selectedDates);
        toDate.next('input').val(toValue);
        fromDate.next('input').val(fromValue);
        if (toValue == '') {
          picker2.setDate(selectedDates);
          picker2.close();
          picker1.open();
        }
      }
    },
    formatDate: function (dateObj, formatString) {
      return moment(dateObj).format('YYYY/MM/DD');
    }
  });

  $('.dates_range').each(function () {
    var fromDate = $(this).find('[data-input="fromDate"]');
    var toDate = $(this).find('[data-input="toDate"]');

    config = {
      mode: 'range',
      animate: true,
      altInput: true,
      dateFormat: 'Y/m/d',
      disableMobile: true,
      locale: flatpickrLang,
      onDayCreate: function (dObj, dStr, fp, dayElem) {
        var weekday = dayElem.dateObj.getDay();
        if (weekday === 0 || weekday === 6) {
          dayElem.className += ' holiday';
        }
        holidayDates.forEach(function (element) {
          if (Date.parse(element.date) === (+dayElem.dateObj)) {
            dayElem.className += ' holiday';
          }
        });
        workDates.forEach(function (element) {
          if (Date.parse(element.date) === (+dayElem.dateObj)) {
            dayElem.className += ' workday';
          }
        });
      },
      onChange: function (selectedDates, dateStr, instance) {
        var elem = instance.element;
        var calendar = $(elem).data('input');
        var fromValue = '';
        var toValue = '';

        if (selectedDates[0]) {
          fromValue = moment(selectedDates[0]).format('YYYY/MM/DD')
        }
        if (selectedDates[1]) {
          toValue = moment(selectedDates[1]).format('YYYY/MM/DD')
        }

        instance.close();

        if (calendar == 'fromDate') {
          picker2.setDate(selectedDates);
          fromDate.next('input').val(fromValue);
          if (toValue == '') {
            picker2.open();
          } else {
            toDate.next('input').val(toValue);
          }
          calendar == 'toDate';
        } else if (calendar == 'toDate') {
          picker1.setDate(selectedDates);
          toDate.next('input').val(toValue);
          fromDate.next('input').val(fromValue);
          if (toValue == '') {
            picker2.setDate(selectedDates);
            picker2.close();
            picker1.open();
          }
        }
      },
      formatDate: function (dateObj, formatString) {
        return moment(dateObj).format('YYYY/MM/DD');
      }
    };

    var picker1 = fromDate.flatpickr(config);
    var picker2 = toDate.flatpickr(config);
  });
});