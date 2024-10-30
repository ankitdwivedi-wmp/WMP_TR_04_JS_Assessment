function delayedFunction(callback) {
    setTimeout(callback, 2000);
  }
  
  delayedFunction(() => {
    console.log("Callback fucntion invoked after 2 seconds");
  });
  