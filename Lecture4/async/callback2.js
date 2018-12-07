// 1-1. callback과 onSuccess, onFailure
function getTime(onSuccess, onFailure) {
  setTimeout(() => {
    const isSuccess = true;
    // const isSuccess = Math.random() >= 0.5;

    if (isSuccess) {
      onSuccess(new Date());
    } else {
      onFailure('Error!');
    }
  }, 1000);
}

function execute() {
  // callback hell...
  getTime((currentTime) => {
    console.log('The current time is ', currentTime);
    getTime((newTime) => {
      console.log('The new time is', newTime);
      getTime((realNewTime) => {
        console.log('The real new time is', realNewTime);
        getTime((pheww) => {
          console.log('phewww...', pheww);
        })
      })
    })
  }, (error) => {
    console.log(error);
  });
}

execute();