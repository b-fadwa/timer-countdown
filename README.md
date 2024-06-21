# Overview

This pack includes two main components: a custom timer that serves as a clock that begins at a specific time and stops when it reaches the end, and a countdown component that begins at the specified date and gradually decrements until the deadline is met.

## Timer component

![](https://github.com/b-fadwa/Qodly-timer-countdown/blob/develop/public/timer.png)

### Datasource

| Name       | Type   | Required | Description                                              |
| ---------- | ------ | -------- | -------------------------------------------------------- |
| datasource | Number | Yes      | Will contain the timer startup value before decrementing |

### Custom css

When customizing the appearance of the timer, these are the classes to be used :

![](https://github.com/b-fadwa/Qodly-timer-countdown/blob/develop/public/customTimerCss.png)

Here's a basic example:

```css
/*to customize the container*/
self .timer-container {
}

/*to customize the timer's content*/
self .timer-content {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/*to customize the timer's text*/
self .timer-text {
  border-bottom: 3px solid #8f71ff;
}

/*to customize the timer's reset button*/
self .timer-reset-button {
  background-color: #ffffff;
  color: #8f71ff;
  border: 1px solid #8f71ff;
}

/*to customize the timer's start/stop button*/
self .timer-start-button {
  background-color: #8f71ff;
  color: #ffffff;
}
```

## Countdown component

![](https://github.com/b-fadwa/Qodly-timer-countdown/blob/develop/public/countDown.png)

### Properties

| Name             | Type   | Default | Description                                                          |
| ---------------- | ------ | ------- | -------------------------------------------------------------------- |
| Countdown Header | string |         | will be the value of the message displayed in the countdown's header |

### Datasource

| Name       | Type | Required | Description                                               |
| ---------- | ---- | -------- | --------------------------------------------------------- |
| datasource | Date | Yes      | Will contain the date from where the countdown will start |

### Custom CSS

For the countdown, you have access to the following classes within the component:

![](https://github.com/b-fadwa/Qodly-timer-countdown/blob/develop/public/customCountDownCss.png)

Here's a basic example:

```css
/*To customize the countdown's header*/
self .countdown-header {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid red;
}

/*To customize the countdown's container*/
self .countdown-container {
  padding: 10px;
}

/*To customize the countdown's days,hours, minutes and seconds*/
self .countdown-days,
.countdown-hours,
.countdown-minutes,
.countdown-seconds {
  border-radius: 50%;
  background-color: #ffffff;
  color: #444;
  border: 1px solid red;
}

self .countdown-days {
  background-color: red;
}
```
