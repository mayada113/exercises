let frontEnd = ['HTML', 'CSS', 'Javascript'];
let frontEndLangages = frontEnd;

const counter = {
    count: 0,
  
    updateCounter: function () {
      this.count += 1;
    }
  };
  
  counter.updateCounter();
  counter.updateCounter();
  counter.updateCounter();
  
  alert(counter.count);