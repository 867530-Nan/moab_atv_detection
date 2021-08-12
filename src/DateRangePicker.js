import React from 'react'
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const DateRange = (props) => {
  const [datePickerFocus,setDatePickerFocus] = React.useState(false)
  const onDatePickerfocus = (focused) => {
    setDatePickerFocus(focused)
  }

  return (
    <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
      <h2>Select Date Range</h2>
      <DateRangePicker
        isOutsideRange={() => false}
        startDate={props.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={props.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({startDate,endDate}) => props.dateChange({startDate,endDate})} // PropTypes.func.isRequired,
        focusedInput={datePickerFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => onDatePickerfocus(focusedInput)}
      />
    </div>
  )
}

export default DateRange